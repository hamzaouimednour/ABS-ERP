<template>
    <div class="col-md-12">

        <div class="card">
            <div class="card-header">
                <h3 class="mb-0 card-title">Licences des entreprises</h3>
            </div>
            <div class="card-body">
                
                <div>

                    <div class="modal fade" id="editElementModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="card-status bg-brand br-tr-7 br-tl-7"></div>
                                <div class="modal-header">
                                    <h5 class="modal-title" id="editElementModalLabel"><i class="fe fe-edit-3"></i> Modifier licence</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                                    
                                </div>
                                <div class="modal-body" id="modal-body">
                                    
                                    <div class="alert alert-secondary" role="alert" v-if="formErrors.length">
                                        <div v-for="error in formErrors" v-bind:key="error.key">{{ error }}</div>
                                    </div>

                                    <form id="editElementForm" @submit.prevent="handleEditLicense" autocomplete="off">
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-4">
                                                    <label class="form-label">Entreprise <small class="text-danger">*</small></label>
                                                    <select class="form-control form-select" v-model="form.entreprise_id" required>
                                                        <option value="" selected disabled>Sélectionnez une entreprise</option>
                                                        <option v-for="item in data.entreprises" v-bind:key="item.key" v-bind:value="item.id"> {{ item.name }} </option>
                                                    </select>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Durée de licence <small class="text-danger">*</small></label>
                                                    <label class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" @click="form.license_limited = !form.license_limited" v-model="form.license_limited" :value="true" checked="">
                                                        <span class="custom-control-label" v-text="form.license_limited ? 'Licence avec une durée bien déterminée.' : 'Licence à durée indéterminée.'"></span>
                                                    </label>
                                                </div>
                                                <div class="mb-4" v-show="form.license_limited">
                                                    <label class="form-label">Durée de début du licence <small class="text-danger">*</small></label>
                                                    <div class="input-group">
                                                        <input
                                                        type="text"
                                                        v-model="form.license_start_date"
                                                        name="start-date"
                                                        class="form-control fc-datepicker"
                                                        placeholder="JJ/MM/AAAA">
                                                        <div class=""> <button type="button" class="btn btn-auth"> <i class="ti-calendar" aria-hidden="true"></i> </button> </div>
                                                    </div>
                                                </div>
                                                <div class="mb-4" v-show="form.license_limited">
                                                    <label class="form-label">Durée de fin du licence <small class="text-danger">*</small></label>
                                                    <div class="input-group">
                                                        <input
                                                        type="text"
                                                        v-model="form.license_end_date"
                                                        class="form-control fc-datepicker"
                                                        placeholder="JJ/MM/AAAA">
                                                        <div class=""> <button type="button" class="btn btn-auth"> <i class="ti-calendar" aria-hidden="true"></i> </button> </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Etat du licence <small class="text-danger">*</small></label>
                                                    <select class="form-control form-select" v-model="form.status" required>
                                                        <option v-for="(item, index) in statusList" v-bind:key="index" :value="index"> {{ item }} </option>
                                                    </select>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Applicatif <small class="text-danger">*</small></label>
                                                    <select class="form-control form-select" v-model="form.component_id" @change="modulesOf(form.component_id)" required>
                                                        <option value="" selected disabled>Sélectionnez un applicatif</option>
                                                        <option v-for="item in data.components" v-bind:key="item.key" v-bind:value="item.id"> {{ item.name }} </option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Modules et Permissions de l'applicatif <small class="text-danger">*</small></label>
                                                    
                                                    <ul class="list-group" v-if="form.component_id && data.currentComponent.modules.length">
                                                        <div v-for="item in data.currentComponent.modules" :key="item.index">
                                                            <li class="list-group-item list-module">
                                                                <span class="tag tag-dark">{{item.name}} :</span> {{item.description}}
                                                                <div class="material-switch pull-right">
                                                                    <input
                                                                    :id="'mod-'+item.id"
                                                                    :data-module="item.id"
                                                                    @click="handleModules(item.id)"
                                                                    ref="switch"
                                                                    name="module-switch"
                                                                    type="checkbox"/>
                                                                    <label :for="'mod-'+item.id" class="label-warning"></label>
                                                                </div>
                                                            </li>
                                                            <li class="list-group-item list-module-permission" v-if="form.modules.includes(item.id)">
                                                                <div class="row ms-1">
                                                                    <label class="custom-control custom-checkbox me-5" v-for="xitem in item.permissions_data" :key="xitem.index">
                                                                        <input
                                                                        type="checkbox"
                                                                        class="custom-control-input"
                                                                        v-model="form.permissions[item.id]"
                                                                        :value="xitem.slug">
                                                                        <span class="custom-control-label"><span class="tag">{{ xitem.name }}</span></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </div>
                                                    </ul>
                                                    <span class="tag" v-else>Pas encore des Modules  affectés à cette Applicatif.</span>

                                                </div>

                                            </div>
                                        </div>
                                        
                                        <div class="row mt-5">
                                            <div class="col-md btn-toolbar justify-content-end btn-group">
                                                <button class="btn btn-radius btn-black" type="button" data-bs-dismiss="modal"><i class="fe fe-arrow-left me-2"></i> Annuler</button>
                                                <button class="btn btn-radius btn-brand" type="submit"><i class="fe fe-save me-2"></i> Sauvgarder</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="table-responsive">
                    <table id="datatable" class="table table-striped table-bordered text-nowrap w-100" >
                        <thead>
                            <tr>
                                <th class="wd-15p">Entreprise</th>
                                <th class="wd-15p">Manager ID</th>
                                <th class="wd-15p">Applicatif</th>
                                <th class="wd-15p">Date du Licence</th>
                                <th class="">Statut</th>
                                <th class="">options</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { formFieldsMixin } from '../../../mixins';
    import '/assets/js/jquery-3.4.1.min.js'
    
    import '/assets/plugins/datatable/css/dataTables.bootstrap5.min.css'
    import '/assets/plugins/datatable/css/responsive.dataTables.min.css'
    import '/assets/plugins/datatable/css/buttons.dataTables.min.css'
    import '/assets/plugins/date-picker/spectrum.css'

    import '/assets/plugins/datatable/js/jquery.dataTables.min.js'
	import '/assets/plugins/datatable/js/dataTables.bootstrap5.min.js'
	import '/assets/plugins/datatable/dataTables.responsive.min.js'
	import '/assets/plugins/datatable/js/dataTables.buttons.min.js'
    import '/assets/plugins/date-picker/spectrum.js'
    import '/assets/plugins/date-picker/jquery-ui.js'
    import '/assets/plugins/date-picker/i18n/datepicker-fr.js'
    import '/assets/plugins/input-mask/jquery.maskedinput.js'

    export default {
        mixins: [formFieldsMixin],
        data() {
            return {
                datatable: {},
                modal: {},
                toggleModal: false,

                form: {
                    id: null,
                    entreprise_id: '',
                    component_id: '',
                    license_limited: true,
                    license_start_date: '',
                    license_end_date: '',
                    status: 1,
                    modules: [],
                    permissions: []
                },
                data: {
                    entreprises: [],
                    components: [],
                    currentComponent: {}
                },
                formValidated: false,
                formErrors: [],
                formSaved: false,
                statusList: this.getStatus(),
                permissionsList: [],
                modulesList: [],

                currentElement: {},
                currentUser: {
                    auth_level: null
                }
            }
        },

        async mounted () {
            // check user data
            await this.$store.dispatch("auth/checkAuth");
            this.currentUser = this.$store.getters["auth/user"];
            axios.get('/api/auth/components?list=1').then((response) => {
                this.data.components = response.data.data;
            });
            axios.get('/api/auth/entreprises?list=1').then((response) => {
                this.data.entreprises = response.data.data;
            });

            // set dt
            if ( !$.fn.DataTable.isDataTable( '#datatable' ) ) {
                this.datatable = $('#datatable').DataTable({
                    responsive: true,
                    processing: true,
                    serverSide: true,
                    ajax: "/api/auth/entreprises-licenses",
                    autoWidth: false,
                    lengthChange: false,
                    pageLength: 15,
                    bLengthChange: false,
                    language: {
                        "url": "/assets/plugins/datatable/French.json"
                    },
                    columns: [
                        {data: 'entreprise', name:'entreprise'},
                        {data: 'manager', name:'manager'},
                        {data: 'component', name:'component'},
                        {
                            data: 'license_limited',
                            className: 'text-center',
                            render: function ( data, type, row ) {
                                return (row.license_limited) ? row.license_start_date+' - '+row.license_end_date : 'illimité';
                            }
                        },
                        {
                            data: 'status',
                            render: function ( data, type, row ) {
                                return formFieldsMixin.methods.getStatus(row.status);
                            }
                        },
                        {data: 'actions', name: 'actions', className: 'text-center'},
                    ]
                })
            }

            this.modal = new bootstrap.Modal(document.getElementById('editElementModal'), {
                keyboard: false,
            })
            let vdata = this.$data.form;
            $('.fc-datepicker').datepicker({
                minDate: 0,
                showOtherMonths: true,
                selectOtherMonths: true,
                onSelect: function(date) {
                    if($(this).attr('name') == 'start-date') vdata.license_start_date = date + ' 00:00:00';
                    else vdata.license_end_date = date + ' 00:00:00';
                    $(this).val(date + ' 00:00:00');
                }
            });
            this.dtActions();
            
        },
        
        methods: {
            handleModules(module){
                if(!(this.form.modules.includes(module))){
                    this.form.modules.push(module);
                    this.form.permissions[module] = [];
                }else{
                    this.form.modules.splice(this.form.modules.indexOf(module), 1);
                    this.form.permissions[module] = undefined;
                }
            },
            clearFormErrors() {
                this.formErrors = [];
                this.$refs.switch.forEach(element => {
                    if(element.checked) element.checked = false;
                });
            },
            setFormSaved(value = true) {
                this.formSaved = value;
                this.formValidated = false;
            },

            // local methods
            clearFormErrors() {
                this.formErrors = [];
            },
            handleEditLicense(e) {
                e.preventDefault();

                this.setFormSaved(false);
                this.clearFormErrors();

                // form valdiation using JQuery
                axios.put(`/api/auth/entreprises-licenses/${this.form.id}`, this.form ).then((response) => {
                    if (response.status){
                        this.setFormSaved();
                        swal("Succès!", "Les données d'utlisateur a été mise à jour.", "success").then((value) => {
                            this.modal.hide()
                        });
                        // update dt
                        this.datatable.ajax.reload();
                    }
                }).catch((error) => {
                    if (error.response.status != 422){
                        console.log(error);
                        this.formErrors.push('Echoué!, Une erreur est survenue.');
                    }else{
                        for (const [key, value] of Object.entries(error.response.data.errors)) {
                            for (const key in value) {
                                if (Object.hasOwnProperty.call(value, key)) this.formErrors.push( value[key] );
                            }
                        }
                    }
                })
                
                // scroll to request msg
                this.scrollToTopModal('editElementModal');
            },
            modulesOf(id) {
                this.data.currentComponent = this.data.components.find(obj => obj.id === id);
                this.form.modules = [];
                this.form.permissions = [];
                if(this.$refs.switch){
                    this.$refs.switch.forEach(element => {
                        if(element.checked) element.checked = false;
                    });
                }
            },

            dtActions(){
                var vmNextTick = this.$nextTick;
                var refs = this.$refs;
                var vdata = this.$data;
                var modalElement = this.modal;
                var dt = this.datatable;
                $('.table').on('click', '.btn-edit', function(e) {
                    e.preventDefault();
                    var elementID = $(this).parents('.dt-actions').attr('data-id');
                    axios.get(`/api/auth/entreprises-licenses/${elementID}`).then((response) => {
                        // fill form attributes
                        for (const [key, value] of Object.entries(response.data.data)) {
                            if (Object.hasOwnProperty.call(vdata.form, key)) {
                                vdata.form[key] = value;
                            }
                        }

                        // fill data current component
                        vdata.data.currentComponent = vdata.data.components.find(obj => obj.id === vdata.form.component_id);

                        // fill form modules & permissions
                        vdata.form.modules = [];
                        vdata.form.permissions = [];
                        if(response.data.data.hasOwnProperty('license_modules') && response.data.data.license_modules){
                            response.data.data.license_modules.forEach(element => {
                                vdata.form.modules.push(element.component_module_id)
                                vdata.form.permissions[element.component_module_id] = element.permissions;
                            });
                            vmNextTick(function () {
                                refs.switch.forEach(element => {
                                    if(element.checked) element.checked = false;
                                    var elementModule = Number(element.getAttribute('data-module'));
                                    if(vdata.form.modules.includes(elementModule) && !element.checked) element.checked = true;
                                });
                            })
                        }

                        modalElement.show()
                        
                    })
                })

                $('.table').on('click', '.btn-delete', function(e) {
                    e.preventDefault();
                    var elementID = $(this).parents('.dt-actions').attr('data-id');
                    swal({
                        title: "Etes-vous sûr(e)?",
                        text: "Toutes les données associées seront supprimées de manière définitive.",
                        icon: "warning",
                        buttons: {
                            cancel: {
                                text: "Annuler",
                                value: null,
                                visible: true,
                                className: "btn btn-default btn-radius",
                                closeModal: true
                            },
                            confirm: {
                                text: "Supprimer",
                                value: true,
                                visible: true,
                                className: "btn btn-danger btn-radius",
                                closeModal: false
                            }
                        },
                        dangerMode: true,
                    }).then((willDelete) => {
                        if (willDelete) {
                            axios.delete(`/api/auth/entreprises-licenses/${elementID}`).then((response) => {
                                if(response.status === 204){
                                    swal("Succès!", "Elément sélectionné a été supprimé.", "success");
                                    dt.ajax.reload();
                                }else if(response.status === 409) swal("Attention!", "Impossible de supprimer l'élément sélectionné à cause des données associées.", "warning");
                                else swal("Échoué!", "Echec de supprimer l'élément sélectionné car vous n'avez pas la permission ou l'élément n'existe pas.", "error");
                            })
                        }
                    });
                    
                })
                
            }
        },
    }
</script>
<style>
    .ui-datepicker {z-index: 99999 !important;}
</style>
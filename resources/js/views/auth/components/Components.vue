<template>
    <div class="col-md-12">

        <div class="card">
            <div class="card-header">
                <h3 class="mb-0 card-title">Applicatif</h3>
            </div>
            <div class="card-body">
                
                <div>

                    <div class="modal fade" id="editElementModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="card-status bg-brand br-tr-7 br-tl-7"></div>
                                <div class="modal-header">
                                    <h5 class="modal-title" id="editElementModalLabel"><i class="fe fe-edit-3"></i> Modifier applicatif</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                                    
                                </div>
                                <div class="modal-body">
                                    
                                    <div class="alert alert-secondary" role="alert" v-if="formErrors.length">
                                        <div v-for="error in formErrors" v-bind:key="error.key">{{ error }}</div>
                                    </div>

                                    <form id="editElementForm" @submit.prevent="handleEditComponent">
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-4">
                                                    <label class="form-label">Libellé <small class="text-danger">*</small></label>
                                                    <input
                                                    type="text"
                                                    v-model="form.name"
                                                    class="form-control"
                                                    placeholder="Libellé"
                                                    required>
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Identifient (Slug)<small class="text-danger">*</small></label>
                                                    <input
                                                    type="text"
                                                    v-model="form.slug"
                                                    @keyup="form.slug = lower_alphanum(form.slug)"
                                                    @change="form.slug = lower_alphanum(form.slug)"
                                                    class="form-control"
                                                    placeholder="slug"
                                                    maxlength="250"
                                                    pattern="[a-z0-9-_]*"
                                                    required>
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Description</label>
                                                    <textarea v-model="form.description" class="form-control" rows="3" placeholder="description ..."></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Etat de l'applicatif :</label>
                                                    <select class="form-control form-select" v-model="form.status" required>
                                                        <option v-for="(item, index) in statusList" v-bind:key="index" :value="index"> {{ item }} </option>
                                                    </select>
                                                </div>

                                                <div class="form-group">
                                                    <label class="form-label">Modules et Permissions de l'applicatif <small class="text-danger">*</small></label>
                                                    
                                                    <ul class="list-group">
                                                        <div v-for="item in modulesList" :key="item.index">
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
                                                                    <label class="custom-control custom-checkbox me-5" v-for="xitem in permissionsList" :key="xitem.index">
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
                                <th class="wd-15p">Libellé</th>
                                <th class="wd-15p">Slug</th>
                                <th class="">Date de Création</th>
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

    import '/assets/plugins/datatable/js/jquery.dataTables.min.js'
	import '/assets/plugins/datatable/js/dataTables.bootstrap5.min.js'
	import '/assets/plugins/datatable/dataTables.responsive.min.js'
	import '/assets/plugins/datatable/js/dataTables.buttons.min.js'

    export default {
        mixins: [formFieldsMixin],
        data() {
            return {
                datatable: {},
                modal: {},
                toggleModal: false,

                form: {
                    id: null,
                    name: '',
                    slug: '',
                    description: '',
                    status: 1,
                    modules: [],
                    permissions:[]
                },
                formValidated: false,
                formErrors: [],
                formSaved: false,
                statusList: this.getStatus().splice(0,2),
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
            this.permissionsList = await this.getPermissions();
            axios.get('/api/auth/modules?list=1').then((response) => {
                this.modulesList = response.data;
            });

            // set dt
            if ( !$.fn.DataTable.isDataTable( '#datatable' ) ) {
                this.datatable = $('#datatable').DataTable({
                    responsive: true,
                    processing: true,
                    serverSide: true,
                    ajax: "/api/auth/components",
                    autoWidth: false,
                    lengthChange: false,
                    pageLength: 15,
                    bLengthChange: false,
                    language: {
                        "url": "/assets/plugins/datatable/French.json"
                    },
                    columns: [
                        {data: 'name', name:'name'},
                        {data: 'slug', name:'slug'},
                        {data: 'updated_at', name: 'updated_at'},
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
            handleEditComponent(e) {
                e.preventDefault();

                this.setFormSaved(false);
                this.clearFormErrors();

                // form valdiation using JQuery
                axios.put(`/api/auth/components/${this.form.id}`, this.form ).then((response) => {
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

            dtActions(){
                var refs = this.$refs;
                var vdata = this.$data;
                var modalElement = this.modal;
                var dt = this.datatable;
                $('.table').on('click', '.btn-edit', function(e) {
                    e.preventDefault();
                    var elementID = $(this).parents('.dt-actions').attr('data-id');
                    axios.get(`/api/auth/components/${elementID}`).then((response) => {

                        // fill form attributes
                        for (const [key, value] of Object.entries(response.data.data)) {
                            if (Object.hasOwnProperty.call(vdata.form, key)) {
                                vdata.form[key] = value;
                            }
                        }

                        // fill form mofules & permissions
                        vdata.form.modules = [];
                        vdata.form.permissions = [];
                        if(response.data.data.hasOwnProperty('modules') && response.data.data.modules)
                            response.data.data.modules.forEach(element => {
                                vdata.form.modules.push(element.module_id)
                                vdata.form.permissions[element.module_id] = element.permissions;
                            });
                        
                        // checked for switchers ($refs.switch)
                        refs.switch.forEach(element => {
                            if(element.checked) element.checked = false;
                            var elementModule = Number(element.getAttribute('data-module'));
                            if(vdata.form.modules.includes(elementModule) && !element.checked) element.checked = true;
                        });

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
                            axios.delete(`/api/auth/components/${elementID}`).then((response) => {
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

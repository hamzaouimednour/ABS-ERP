<template>
    <div class="col-md-12">

        <div class="card">
            <div class="card-header">
                <h3 class="mb-0 card-title">Groupes de permissions</h3>
            </div>
            <div class="card-body">
                
                <div>

                    <div class="modal fade" id="editElementModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="card-status bg-brand br-tr-7 br-tl-7"></div>
                                <div class="modal-header">
                                    <h5 class="modal-title" id="editElementModalLabel"><i class="fe fe-edit-3"></i> Modifier groupe de permissions</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                                    
                                </div>
                                <div class="modal-body">
                                    
                                    <div class="alert alert-secondary" role="alert" v-if="formErrors.length">
                                        <div v-for="error in formErrors" v-bind:key="error.key">{{ error }}</div>
                                    </div>

                                    <form id="editElementForm" @submit.prevent="handleEditPermission">
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-4">
                                                    <label class="form-label">Nom du groupe <small class="text-danger">*</small></label>
                                                    <input
                                                    type="text"
                                                    v-model="form.name"
                                                    class="form-control"
                                                    placeholder="group"
                                                    required>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Etat du groupe :</label>
                                                    <select class="form-control form-select" v-model="form.status" required>
                                                        <option v-for="(item, index) in statusList" v-bind:key="index" :value="index"> {{ item }} </option>
                                                    </select>
                                                </div>

                                                <div class="form-group">
                                                    <label class="form-label">Applicatifs (modules et permissions) <small class="text-danger">*</small></label>
                                                    
                                                    <ul class="list-group">
                                                        <div v-for="item in componentsList" :key="item.index">
                                                            <li class="list-group-item list-module">
                                                                <span class="tag tag-gray">{{item.name}} :</span> {{item.description}}
                                                                <div class="material-switch pull-right">
                                                                    <input
                                                                    :id="'comp-'+item.id"
                                                                    :data-component="item.id"
                                                                    @click="handleComponents(item.id)"
                                                                    ref="components"
                                                                    name="component-switch"
                                                                    type="checkbox"/>
                                                                    <label :for="'comp-'+item.id" class="label-warning"></label>
                                                                </div>
                                                            </li>
                                                            <li class="list-group-item list-module-permission" v-if="form.components.includes(item.id)">
                                                                <ul class="list-group" v-if="item.modules.length">
                                                                    <div v-for="xitem in item.modules" :key="xitem.index">
                                                                        <li class="list-group-item list-module">
                                                                            <span class="tag tag-dark">{{xitem.name}} :</span> {{xitem.description}}
                                                                            <div class="material-switch pull-right">
                                                                                <input
                                                                                :id="'mod-'+xitem.id"
                                                                                :data-module="xitem.id"
                                                                                :data-module-component="item.id"
                                                                                @click="handleModules(xitem.id)"
                                                                                ref="modules"
                                                                                name="module-switch"
                                                                                type="checkbox"/>
                                                                                <label :for="'mod-'+xitem.id" class="label-warning"></label>
                                                                            </div>
                                                                        </li>
                                                                        <li class="list-group-item list-module-permission" v-if="form.modules.includes(xitem.id)">
                                                                            <div class="row ms-1">
                                                                                <label class="custom-control custom-checkbox me-5" v-for="xxitem in xitem.permissions_data" :key="xxitem.index">
                                                                                    <input
                                                                                    type="checkbox"
                                                                                    class="custom-control-input"
                                                                                    v-model="form.permissions"
                                                                                    :value="xitem.id+'.'+xxitem.slug">
                                                                                    <span class="custom-control-label"><span class="tag">{{ xxitem.name }}</span></span>
                                                                                </label>
                                                                            </div>
                                                                        </li>
                                                                    </div>
                                                                </ul>
                                                                <span v-else>Il n'y a pas de modules dans cet applicatif</span>
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
                    <div class="modal fade" id="optionElementModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="card-status bg-brand br-tr-7 br-tl-7"></div>
                                <div class="modal-header">
                                    <h5 class="modal-title" id="optionlementModalLabel"><i class="fe fe-users"></i> Affecter des utilisateurs à groupe de permissions</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                                    
                                </div>
                                <div class="modal-body">
                                    
                                    <div class="alert alert-secondary" role="alert" v-if="formErrors.length">
                                        <div v-for="error in formErrors" v-bind:key="error.key">{{ error }}</div>
                                    </div>

                                    <form id="optionElementForm" @submit.prevent="handleUsersPermission">
                                        <div class="form-group">
                                            <label class="form-label mb-3">Sélectionner Le(s) Utilisateur(s) <small class="text-danger">*</small></label>
                                            <label class="me-2" v-for="item in usersList" :key="item.index">
                                                <span class="tag">{{ item.login }} - {{ item.nom }} {{ item.prenom }}
                                                    <span @click="setUserPermission(item.id)" class="tag-addon" :class="[ optionForm.users.includes(item.id) ? 'tag-success' : 'tag-light-gray' ]">
                                                        <i :class="[ optionForm.users.includes(item.id) ? 'fe fe-x' : 'fe fe-plus' ]"></i>
                                                    </span>
                                                </span>
                                            </label>
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
                modal2: {},
                toggleModal: false,

                form: {
                    id: null,
                    name: '',
                    slug: '',
                    description: '',
                    status: 1,
                    components: [],
                    modules: [],
                    permissions:[]
                },
                optionForm: {
                    id: null,
                    users: []
                },
                formValidated: false,
                formErrors: [],
                formSaved: false,
                statusList: this.getStatus().splice(0,2),
                permissionsList: [],
                componentsList: [],
                usersList: [],

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
            this.statusList = this.getStatus().splice(0,2);
            axios.get('/api/auth/components?list=1').then((response) => {
                this.componentsList = response.data.data;
            });
            // axios.get('/api/auth/users?list=1').then((response) => {
            //     this.usersList = response.data;
            // });

            // set dt
            if ( !$.fn.DataTable.isDataTable( '#datatable' ) ) {
                this.datatable = $('#datatable').DataTable({
                    responsive: true,
                    processing: true,
                    serverSide: true,
                    ajax: "/api/auth/permissions",
                    autoWidth: false,
                    lengthChange: false,
                    pageLength: 15,
                    bLengthChange: false,
                    language: {
                        "url": "/assets/plugins/datatable/French.json"
                    },
                    columns: [
                        {data: 'name', name:'name'},
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
            this.modal2 = new bootstrap.Modal(document.getElementById('optionElementModal'), {
                keyboard: false,
            })
            this.dtActions();
            
        },
        
        methods: {
            setUserPermission(user){
                if(this.optionForm.users.includes(user)) this.optionForm.users.splice(this.optionForm.users.indexOf(user), 1);
                else this.optionForm.users.push(user);
            },
            handleComponents(component){
                if(!(this.form.components.includes(component))){
                    this.form.components.push(component);
                }else{
                    // close component switch will remove childrens data
                    this.$refs.modules.forEach(element => {
                        var module = Number(element.getAttribute('data-module'));
                        var moduleComponent = Number(element.getAttribute('data-module-component'));
                        if(moduleComponent==component){
                            if(this.form.modules.includes(module)) this.form.modules.splice(this.form.modules.indexOf(module), 1);
                            _.remove(this.form.permissions, function(n) {
                                return n.startsWith(module+'.')
                            });
                        }
                    });
                    this.form.components.splice(this.form.components.indexOf(component), 1);
                }
            },
            handleModules(module){
                if(!(this.form.modules.includes(module))){
                    this.form.modules.push(module);
                }else{
                    this.form.modules.splice(this.form.modules.indexOf(module), 1);
                    _.remove(this.form.permissions, function(n) {
                        return n.startsWith(module+'.')
                    });
                }
            },
            clearFormErrors() {
                this.formErrors = [];
            },
            setFormSaved(value = true) {
                this.formSaved = value;
                this.formValidated = false;
            },
            handleEditPermission(e) {
                e.preventDefault();

                this.setFormSaved(false);
                this.clearFormErrors();

                // form valdiation using JQuery
                axios.put(`/api/auth/permissions/${this.form.id}`, this.form ).then((response) => {
                    if (response.status){
                        this.setFormSaved();
                        swal("Succès!", "Les données du groupe de permissions a été mise à jour.", "success").then((value) => {
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
            handleUsersPermission(e) {
                e.preventDefault();

                this.clearFormErrors();

                // form valdiation using JQuery
                axios.post(`/api/auth/permissions/${this.optionForm.id}/users`, this.optionForm ).then((response) => {
                    if (response.status){
                        swal("Succès!", "Les données du groupe de permissions a été mise à jour.", "success").then((value) => {
                            this.modal2.hide()
                        });
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
                this.scrollToTopModal('optionElementModal');
            },

            dtActions(){
                var refs = this.$refs;
                var vdata = this.$data;
                var modalElement = this.modal;
                var modalElement2 = this.modal2;
                var dt = this.datatable;
                $('.table').on('click', '.btn-edit', function(e) {
                    e.preventDefault();
                    var elementID = $(this).parents('.dt-actions').attr('data-id');
                    axios.get(`/api/auth/permissions/${elementID}`).then((response) => {

                        // fill form attributes
                        for (const [key, value] of Object.entries(response.data.data)) {
                            if (Object.hasOwnProperty.call(vdata.form, key)) {
                                vdata.form[key] = value;
                            }
                        }

                        // fill form mofules & permissions
                        vdata.form.components = [];
                        vdata.form.modules = [];
                        vdata.form.permissions = [];
                        if(response.data.data.hasOwnProperty('rules') && response.data.data.rules)
                            response.data.data.rules.forEach(element => {
                                if(!(vdata.form.components.includes(element.component_id))) vdata.form.components.push(element.component_id)
                                vdata.form.modules.push(element.component_module_id)
                                JSON.parse(element.permissions).forEach(p => {
                                    vdata.form.permissions.push(element.component_module_id+'.'+p);
                                });
                            });

                        // launch modal
                        modalElement.show()
                    })
                })

                
                $('.table').on('click', '.btn-users', function(e) {
                    e.preventDefault();
                    vdata.optionForm.id = Number($(this).parents('.dt-actions').attr('data-id'));
                    axios.get(`/api/auth/permissions/${vdata.optionForm.id}/users`).then((response) => {
                        vdata.optionForm.users = response.data;
                        if(!vdata.usersList.length){
                            axios.get('/api/auth/users?list=1').then((response) => {
                                vdata.usersList = response.data;
                                modalElement2.show()
                            });
                        }else{ modalElement2.show() }
                    });
                })

                // close switchers on modal hide
                $('#editElementModal').on('hidden.bs.modal', function (event) {
                    refs.modules.forEach(element => {
                        element.checked = false;
                    });
                    refs.components.forEach(element => {
                        element.checked = false;
                    });
                })
                $('#optionElementModal').on('hidden.bs.modal', function (event) {
                    vdata.optionForm.users = [];
                })
                // check switchers on modal show
                $('#editElementModal').on('shown.bs.modal', function (event) {
                    refs.components.forEach(element => {
                        if(element.hasAttribute('data-component')){
                            var elementComponent = Number(element.getAttribute('data-component'));
                            if(vdata.form.components.includes(elementComponent) && !element.checked) element.checked = true;
                        }
                    });
                    refs.modules.forEach(element => {
                        if(element.hasAttribute('data-module')){
                            var elementModule = Number(element.getAttribute('data-module'));
                            if(vdata.form.modules.includes(elementModule) && !element.checked) element.checked = true;
                        }
                    });
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
                            axios.delete(`/api/auth/permissions/${elementID}`).then((response) => {
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

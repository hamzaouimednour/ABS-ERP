<template>
    <div class="col-md-12">

        <div class="card">
            <div class="card-header">
                <h3 class="mb-0 card-title">Entreprises</h3>
            </div>
            <div class="card-body">
                <div>

                    <div class="modal fade" id="editElementModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="card-status bg-brand br-tr-7 br-tl-7"></div>
                                <div class="modal-header">
                                    <h5 class="modal-title" id="editElementModalLabel"><i class="fe fe-edit-3"></i> Modifier l'entreprise</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                                    
                                </div>
                                <div class="modal-body">
                                    
                                    <div class="alert alert-secondary" role="alert" v-if="formErrors.length">
                                        <div v-for="error in formErrors" v-bind:key="error.key">{{ error }}</div>
                                    </div>

                                    <form id="editElementForm" @submit.prevent="handleEditEntreprise" v-bind:class="{'was-validated': formValidated}">
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-4">
                                                    <label class="form-label">Nom de l'entreprise <small class="text-danger">*</small></label>
                                                    <input
                                                    type="text"
                                                    v-model="form.name"
                                                    class="form-control"
                                                    placeholder="Nom de l'entreprise"
                                                    required>
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="form-group" v-if="currentUser.auth_level == 1">
                                                    <label class="form-label">Propriétaire (Manager) <small class="text-danger">*</small></label>
                                                    <select class="form-control form-select" v-model="form.uid" required>
                                                        <option value="" selected disabled>Sélectionnez un utilisateur</option>
                                                        <option v-for="item in data.managers" v-bind:key="item.key" v-bind:value="item.id"> {{ item.login + ' - ' + item.nom + ' ' + item.prenom }} </option>
                                                    </select>
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Email <small class="text-danger">*</small></label>
                                                    <input
                                                    type="email"
                                                    v-model="form.email"
                                                    class="form-control"
                                                    maxlength="250" 
                                                    placeholder="E-mail">
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Numéro de Téléphone</label>
                                                    <input
                                                    type="text"
                                                    v-model="form.phone"
                                                    @keyup="form.phone = number(form.phone)"
                                                    @change="form.phone = number(form.phone)"
                                                    class="form-control"
                                                    maxlength=""
                                                    placeholder="Numéro de téléphone">
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Adresse</label>
                                                    <textarea v-model="form.address" class="form-control" rows="3" placeholder="adresse de l'entreprise ..."></textarea>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Description</label>
                                                    <textarea v-model="form.description" class="form-control" rows="3" placeholder="description de l'entreprise ..."></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Etat de l'entreprise <small class="text-danger">*</small></label>
                                                    <select class="form-control form-select" v-model="form.status" required>
                                                        <option v-for="(item, index) in statusList" v-bind:key="index" :value="index"> {{ item }} </option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Sous domaine <small>[a-z0-9-]</small> <small class="text-danger">*</small></label>
                                                    <div class="input-group">
                                                        <input
                                                        type="text"
                                                        class="form-control"
                                                        v-model="form.subdomain"
                                                        @keyup="form.subdomain = domain(form.subdomain)"
                                                        @change="form.subdomain = domain(form.subdomain)"
                                                        pattern="[a-z0-9-]*"
                                                        placeholder="subdomain"
                                                        required>
                                                        <div class=""> <button type="button" class="btn btn-auth"> <i class="fe fe-globe" aria-hidden="true"></i> </button> </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Licenses des utilisateurs <small>(-1 pour illimité)</small> <small class="text-danger">*</small></label>
                                                    <div class="input-group">
                                                        <input
                                                        type="number"
                                                        class="form-control"
                                                        v-model="form.user_licenses"
                                                        min="-1"
                                                        pattern="[0-9-]*"
                                                        placeholder="0"
                                                        required>
                                                        <div class=""> <button type="button" class="btn btn-auth"> <i class="fe fe-user" aria-hidden="true"></i> </button> </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Licenses des produits <small>(-1 pour tous les produits)</small> <small class="text-danger">*</small></label>
                                                    <div class="input-group">
                                                        <input
                                                        type="number"
                                                        class="form-control"
                                                        v-model="form.component_licenses"
                                                        min="-1"
                                                        placeholder="0"
                                                        required>
                                                        <div class=""> <button type="button" class="btn btn-auth"> <i class="fe fe-layers" aria-hidden="true"></i> </button> </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="form-group">
                                                    <label class="form-label">Logo d'entreprise <small>(max 1M)</small></label>
                                                    <input type="file" class="dropify" ref="logo" v-on:change="handleFileUpload()" data-height="272" data-allowed-file-extensions="png jpg jpeg gif" data-max-file-size="1M"/>
                                                </div>
                                            </div>
                                        </div>
                                            
                                        <div class="row mt-5">
                                            <div class="col-md btn-toolbar justify-content-end btn-group">
                                                <button class="btn btn-radius btn-black" type="button" @click.prevent="resetForm" data-bs-dismiss="modal"><i class="fe fe-arrow-left me-2"></i> Annuler</button>
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
                                <th class="wd-15p">Sous domain</th>
                                <th class="">base de données</th>
                                <th class="">Statut</th>
                                <th class="">options</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div><!-- TABLE WRAPPER -->
                <!-- <div class="spinner1" v-else>
                    <img src="assets/images/loader.svg">
                </div> -->
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
    import '/assets/plugins/fileuploads/css/fileupload.css'

    import '/assets/plugins/datatable/js/jquery.dataTables.min.js'
	import '/assets/plugins/datatable/js/dataTables.bootstrap5.min.js'
	import '/assets/plugins/datatable/dataTables.responsive.min.js'
	import '/assets/plugins/datatable/js/dataTables.buttons.min.js'
    import '/assets/plugins/fileuploads/js/fileupload.js'

    export default {
        mixins: [formFieldsMixin],
        data() {
            return {
                datatable: {},
                modal: {},
                dropify: {},

                form: {
                    uid: '',
                    name: '',
                    description: '',
                    email: '',
                    phone: null,
                    address: '',
                    user_licenses: 0,
                    component_licenses: 0,
                    logo: null,
                    status: 1,
                    subdomain: '',
                    tenant: ''
                },
                data: {
                    managers: [],
                },
                formValidated: false,
                formErrors: [],
                formSaved: false,
                authority: this.getAuthority(),
                statusList: this.getStatus(),

                currentElement: {},
                currentUser: {
                    auth_level: null,
                }
            }
        },

        async mounted () {
            await this.$store.dispatch("auth/checkAuth");
            this.currentUser = this.$store.getters["auth/user"];
            axios.get('/api/auth/users?auth_lvl=2').then((response) => { this.data.managers = response.data })
            this.dropify = this.initDropify()
            // this.authority = await this.getAuth()

            // set dt
            if ( !$.fn.DataTable.isDataTable( '#datatable' ) ) {
                this.datatable = $('#datatable').DataTable({
                    responsive: true,
                    processing: true,
                    serverSide: true,
                    ajax: "/api/auth/entreprises",
                    autoWidth: false,
                    lengthChange: false,
                    pageLength: 15,
                    bLengthChange: false,
                    language: {
                        "url": "/assets/plugins/datatable/French.json"
                    },
                    columns: [
                        {data: 'name', name: 'name'},
                        {data: 'manager', name: 'manager'},
                        {data: 'tenant.domain', name: 'tenant.domain'},
                        {data: 'tenant.id', name: 'tenant.id'},
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
            clearFormErrors() {
                this.formErrors = [];
            },
            setFormSaved(value = true) {
                this.formSaved = value;
                this.formValidated = false;
            },
            resetForm() {
                // Object.assign(this.$data, this.$options.data());
                // reset only data.form attrs
                Object.assign(this.$data.form, this.$options.data().form);
                this.formValidated = false;
                this.clearFormErrors();
                this.$refs.logo.files = [];
            },
            handleFileUpload(){
                var vlogo = this.$data;
                vlogo.form.logo = this.$refs.logo.files[0];
                this.dropify.on('dropify.errors', function(event, element){
                    vlogo.form.logo = null;
                });
                this.dropify.on('dropify.afterClear', function(e, el){
                    vlogo.form.logo = null;
                })
            },
            // local methods
            clearFormErrors() {
                this.formErrors = [];
            },
            handleEditEntreprise(e) {
                e.preventDefault();

                this.setFormSaved(false);
                this.clearFormErrors();

                // form valdiation using JQuery
                if ($('#editElementForm')[0].checkValidity() === false) {
                    e.preventDefault();
                    e.stopPropagation();
                }else {
                    axios.put(`/api/auth/entreprises/${this.form.id}`, this.form ).then((response) => {
                        if (response.status){
                            this.setFormSaved();
                            swal("Succès!", "Les données de l'entreprise a été mise à jour.", "success").then((value) => {
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
                }
                
                // validate form.
                this.formValidated = true;
                
                // scroll to request msg
                this.scrollToTopModal('editElementModal');
            },

            dtActions(){
                var vdata = this.$data;
                var modalElement = this.modal;
                var dt = this.datatable;
                $('.table').on('click', '.btn-edit', function(e) {
                    e.preventDefault();
                    var elementID = $(this).parents('.dt-actions').attr('data-id');
                    axios.get(`/api/auth/entreprises/${elementID}`).then((response) => {
                        vdata.form = response.data.data;
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
                            axios.delete(`/api/auth/entreprises/${elementID}`).then((response) => {
                                if(response.status === 204){
                                    swal("Succès!", "Elément sélectionné a été supprimé.", "success");
                                    dt.ajax.reload();
                                }else if(response.status === 409) swal("Attention!", "Impossible de supprimer l'élément sélectionné à cause des données associées.", "warning");
                                else{
                                    swal("Échoué!", "Echec de supprimer l'élément sélectionné car vous n'avez pas la permission ou l'élément n'existe pas.", "error");
                                    dt.ajax.reload();
                                }
                            })
                        }
                    });
                })
                
            }
        },
    }
</script>

<template>
    <div class="col-md-12">

        <div class="card">
            <div class="card-header">
                <h3 class="mb-0 card-title">Utilisateurs</h3>
            </div>
            <div class="card-body">
                
                <div>

                    <div class="modal fade" id="editElementModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="card-status bg-brand br-tr-7 br-tl-7"></div>
                                <div class="modal-header">
                                    <h5 class="modal-title" id="editElementModalLabel"><i class="fe fe-edit-3"></i> Modifier l'utilisateur</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                                    
                                </div>
                                <div class="modal-body">
                                    
                                    <div class="alert alert-secondary" role="alert" v-if="formErrors.length">
                                        <div v-for="error in formErrors" v-bind:key="error.key">{{ error }}</div>
                                    </div>

                                    <form id="editElementForm" @submit.prevent="handleEditUser" v-bind:class="{'was-validated': formValidated}">
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-4">
                                                    <label class="form-label">Nom <small class="text-danger">*</small></label>
                                                    <input
                                                    type="text"
                                                    v-model="form.nom"
                                                    class="form-control"
                                                    placeholder="Nom"
                                                    maxlength="250"
                                                    pattern="[a-zA-Z ]*"
                                                    required>
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Prénom <small class="text-danger">*</small></label>
                                                    <input
                                                    type="text"
                                                    v-model="form.prenom"
                                                    class="form-control"
                                                    placeholder="Prénom"
                                                    maxlength="250"
                                                    pattern="[a-zA-Z ]*"
                                                    required>
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Deuxiéme prénom</label>
                                                    <input
                                                    type="text"
                                                    v-model="form.deuxieme_prenom"
                                                    class="form-control"
                                                    maxlength="250" 
                                                    placeholder="Deuxiéme prénom"
                                                    pattern="[a-zA-Z ]*">
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Email</label>
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
                                                    v-model="form.telephone"
                                                    @keyup="form.telephone = number(form.telephone)"
                                                    @change="form.telephone = number(form.telephone)"
                                                    class="form-control"
                                                    maxlength=""
                                                    placeholder="Numéro de téléphone">
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Numéro de Téléphone Mobile</label>
                                                    <input
                                                    type="text"
                                                    v-model="form.telephone_mobile"
                                                    @keyup="form.telephone_mobile = number(form.telephone_mobile)"
                                                    @change="form.telephone_mobile = number(form.telephone_mobile)"
                                                    class="form-control"
                                                    maxlength=""
                                                    placeholder="numéro de téléphone mobile">
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Pseudo d'utilisateur <small class="text-danger">*</small></label>
                                                    <input
                                                    type="text"
                                                    v-model="form.login"
                                                    @keyup="form.login = alphanum(form.login)"
                                                    @change="form.login = alphanum(form.login)"
                                                    class="form-control"
                                                    maxlength="250"
                                                    pattern="[a-zA-Z0-9-_]*"
                                                    placeholder="Identifiant"
                                                    required>
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Mot de passe </label>
                                                    <input
                                                    type="password"
                                                    v-model="form.password"
                                                    class="form-control"
                                                    maxlength="250"
                                                    placeholder="******">
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Confirmer le Mot de passe </label>
                                                    <input
                                                    type="password"
                                                    v-model="form.password_confirmation"
                                                    class="form-control"
                                                    maxlength="250"
                                                    placeholder="******">
                                                    <div class="invalid-feedback"> Le mot de passe ne correspond pas.</div>
                                                </div>
                                                <hr>
                                                <div class="form-group" v-if="currentUser.auth_level == 1">
                                                    <label class="form-label">Rôle <small class="text-danger">*</small></label>
                                                    <select class="form-control form-select" v-model="form.auth_level" required>
                                                        <option value="" selected disabled>Sélectionnez un rôle</option>
                                                        <option v-for="(item, index) in authority" v-bind:key="index" v-bind:value="index"> {{ item }} </option>
                                                    </select>
                                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Etat de l'utilisateur :</label>
                                                    <select class="form-control form-select" v-model="form.status" required>
                                                        <option v-for="(item, index) in statusList" v-bind:key="index" :value="index"> {{ item }} </option>
                                                    </select>
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
                                <th class="wd-15p">Nom & Prénom</th>
                                <th class="wd-15p">Identifiant</th>
                                <th class="wd-15p">Email</th>
                                <th class="">Date de Création</th>
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
                    auth_level: '',
                    nom: '',
                    prenom: '',
                    deuxieme_prenom: '',
                    email: '',
                    country_code: '',
                    dialling_code: '',
                    telephone_mobile: '',
                    telephone: '',
                    login: '',
                    password: '',
                    password_confirmation: '',
                    status: 1,
                    photo: '',
                },
                formValidated: false,
                formErrors: [],
                formSaved: false,
                authority: this.getAuthority(),
                statusList: this.getStatus(),

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

            // set dt
            if ( !$.fn.DataTable.isDataTable( '#datatable' ) ) {
                this.datatable = $('#datatable').DataTable({
                    responsive: true,
                    processing: true,
                    serverSide: true,
                    ajax: "/api/auth/users",
                    autoWidth: false,
                    lengthChange: false,
                    pageLength: 15,
                    bLengthChange: false,
                    language: {
                        "url": "/assets/plugins/datatable/French.json"
                    },
                    columns: [
                        {
                            data: 'nom',
                            render: function ( data, type, row ) {
                                return row.nom + ' ' + row.prenom;
                            }
                        },
                        {data: 'login', name: 'login'},
                        {
                            data: 'email',
                            render: function ( data, type, row ) {
                                return row.email || '-';
                            }
                        },
                        {data: 'created_at', name: 'created_at'},
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

            // local methods
            clearFormErrors() {
                this.formErrors = [];
            },
            handleEditUser(e) {
                e.preventDefault();

                this.setFormSaved(false);
                this.clearFormErrors();

                // form valdiation using JQuery
                if ($('#editElementForm')[0].checkValidity() === false) {
                    e.preventDefault();
                    e.stopPropagation();
                } else if(this.form.password !== this.form.password_confirmation){
                    this.formErrors.push('Les deux mots de passe ne correspond pas.');
                } else {
                    axios.put(`/api/auth/users/${this.form.id}`, this.form ).then((response) => {
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
                    axios.get(`/api/auth/users/${elementID}`).then((response) => {
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
                            axios.delete(`/api/auth/users/${elementID}`).then((response) => {
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

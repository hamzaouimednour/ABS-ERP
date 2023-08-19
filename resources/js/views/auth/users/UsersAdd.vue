<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-status bg-black br-tr-7 br-tl-7"></div>
            <div class="card-header">
                <h3 class="mb-0 card-title">Nouveau Utilisateur</h3>
            </div>
            <div class="card-body">
                
                <div class="alert alert-secondary" role="alert" v-if="formErrors.length">
                    <div v-for="error in formErrors" v-bind:key="error.key">{{ error }}</div>
                </div>
                
                <div class="alert alert-primary" role="alert" v-if="formStored">
                    <span class="alert-inner--icon"><i class="fe fe-check-square"></i></span>
                    <span class="alert-inner--text"> <strong> Succès! </strong> un nouvel utilisateur a été ajouté.</span>
                </div>

                <form id="newElementForm" @submit.prevent="handleAddUser" v-bind:class="{'was-validated': formValidated}">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md mb-4">
                                    <label class="form-label">Nom <small class="text-danger">*</small></label>
                                    <input
                                    type="text"
                                    v-model="form.nom"
                                    class="form-control"
                                    placeholder="Nom"
                                    pattern="[a-zA-Z ]*"
                                    required>
                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                </div>
                                <div class="col-md mb-4">
                                    <label class="form-label">Prénom <small class="text-danger">*</small></label>
                                    <input
                                    type="text"
                                    v-model="form.prenom"
                                    class="form-control"
                                    placeholder="Prénom"
                                    pattern="[a-zA-Z ]*"
                                    required>
                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Deuxiéme prénom</label>
                                <input
                                type="text"
                                v-model="form.deuxieme_prenom"
                                class="form-control"
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
                                placeholder="E-mail">
                                <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                            </div>
                            <div class="row">
                                <div class="col-md mb-4">
                                    <label class="form-label">Numéro de Téléphone</label>
                                    <input
                                    type="text"
                                    v-model="form.telephone"
                                    @keyup="form.telephone = number(form.telephone)"
                                    @change="form.telephone = number(form.telephone)"
                                    class="form-control"
                                    placeholder="téléphone">
                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                </div>
                                <div class="col-md mb-4">
                                    <label class="form-label">Numéro de Téléphone Mobile</label>
                                    <input
                                    type="text"
                                    v-model="form.telephone_mobile"
                                    @keyup="form.telephone_mobile = number(form.telephone_mobile)"
                                    @change="form.telephone_mobile = number(form.telephone_mobile)"
                                    class="form-control"
                                    placeholder="téléphone mobile">
                                    <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                                </div>
                            </div>
                            
                            <hr>
                            
                            <div class="mb-4">
                                <label class="form-label">Pseudo d'utilisateur <small class="text-danger">*</small></label>
                                <div class="input-group">
                                    <input
                                    type="text"
                                    v-model="form.login"
                                    @keyup="form.login = alphanum(form.login)"
                                    @change="form.login = alphanum(form.login)"
                                    class="form-control"
                                    pattern="[a-zA-Z0-9-_]*"
                                    placeholder="Identifiant"
                                    required>
                                    <div class=""> <button type="button" class="btn btn-auth"> <i class="fe fe-user" aria-hidden="true"></i> </button> </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Mot de passe <small class="text-danger">*</small></label>
                                <div class="input-group">
                                    <input
                                    type="password"
                                    v-model="form.password"
                                    class="form-control"
                                    placeholder="******"
                                    required>
                                    <div class=""> <button type="button" class="btn btn-auth"> <i class="ti-lock" aria-hidden="true"></i> </button> </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Confirmer le Mot de passe <small class="text-danger">*</small></label>
                                <div class="input-group">
                                    <input
                                    type="password"
                                    v-model="form.password_confirmation"
                                    class="form-control"
                                    placeholder="******"
                                    required>
                                    <div class=""> <button type="button" class="btn btn-auth"> <i class="ti-lock" aria-hidden="true"></i> </button> </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Rôle <small class="text-danger">*</small></label>
                                <select class="form-control form-select" v-model="form.auth_level" required>
                                    <option value="" selected disabled>Sélectionnez un rôle</option>
                                    <option v-for="(item, index) in authority" v-bind:key="index" v-bind:value="index"> {{ item }} </option>
                                </select>
                                <div class="invalid-feedback"> Ce champ n'est pas valide.</div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Etat de l'utilisateur :</label>
                                <!-- <input type="hidden" v-model="form.status" value="1"> -->
                                <select class="form-control form-select" v-model="form.status" required>
                                    <option v-for="(item, index) in statusList" v-bind:key="index" :value="index"> {{ item }} </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mt-5">
                        <div class="col-md btn-toolbar justify-content-end btn-group">
                            <button class="btn btn-radius btn-black" @click.prevent="resetForm"><i class="fe fe-refresh-ccw me-2"></i> Réinitialiser</button>
                            <button class="btn btn-radius btn-brand" type="submit"><i class="fe fe-save me-2"></i> Sauvgarder</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { formFieldsMixin } from '../../../mixins'

    export default {
        mixins: [formFieldsMixin],
        data() {
            return {
                form: {
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
                currentUser: {
                    auth_level: null
                },
                formValidated: false,
                formErrors: [],
                formStored: false,
                authority: [],
                statusList: []
            }
        },

        async mounted () {
            // check user data
            await this.$store.dispatch("auth/checkAuth");
            this.currentUser = this.$store.getters["auth/user"];
            this.authority = this.getAuthority();
            this.statusList = this.getStatus();
        },

        methods: {
            clearFormErrors() {
                this.formErrors = [];
            },
            setFormStored(value) {
                this.formStored = value;
            },
            resetForm() {
                // Object.assign(this.$data, this.$options.data());
                // reset only data.form attrs
                Object.assign(this.$data.form, this.$options.data().form);
                this.formValidated = false;
                this.clearFormErrors();
            },
            handleAddUser(e) {
                e.preventDefault();

                // reset some attrs
                this.clearFormErrors();
                this.setFormStored(false);

                // form valdiation using JQuery
                if ($('#newElementForm')[0].checkValidity() === false) {
                    e.preventDefault();
                    e.stopPropagation();
                } else if(this.form.password !== this.form.password_confirmation){
                    this.formErrors.push('Les deux mots de passe ne correspond pas.');
                } else {
                    axios.post('/api/auth/users', this.form ).then((response) => {
                        if (response.status){
                            this.setFormStored(true);
                            this.resetForm();
                        }
                    }).catch((error) => {
                        if (error.response.status != 422){
                            console.log(error);
                            this.formErrors.push('Echoué!, Une erreur est survenue.');
                        }else{
                            for (const [key, value] of Object.entries(error.response.data.errors)) {
                                for (const key in value) {
                                    if (Object.hasOwnProperty.call(value, key)) {
                                        this.formErrors.push( value[key] );
                                    }
                                }
                            }
                        }
                    })
                }
                
                // validate form.
                this.formValidated = true;
                
                // scroll to request msg
                this.scrollToTop();
            }
        },
    }
</script>

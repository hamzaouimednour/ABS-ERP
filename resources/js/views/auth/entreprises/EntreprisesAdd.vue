<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-status bg-black br-tr-7 br-tl-7"></div>
            <div class="card-header">
                <h3 class="mb-0 card-title">Nouvelle Entreprise</h3>
            </div>
            
            <div class="card-body">
                
                <div class="alert alert-secondary" role="alert" v-if="formErrors.length">
                    <div v-for="error in formErrors" v-bind:key="error.key">{{ error }}</div>
                </div>
                
                <div class="alert alert-primary" role="alert" v-if="formStored">
                    <span class="alert-inner--icon"><i class="fe fe-check-square"></i></span>
                    <span class="alert-inner--text"> <strong> Succès! </strong> une nouvelle entreprise a été ajouté.</span>
                </div>

                <form id="newElementForm" @submit.prevent="handleAddEntreprise" v-bind:class="{'was-validated': formValidated}">
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
                        </div>

                        <div class="col">
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
                                <label class="form-label">Base de données <small>[a-z0-9-_]</small> <small class="text-danger">*</small></label>
                                <div class="input-group">
                                    <input
                                    type="text"
                                    class="form-control"
                                    v-model="form.tenant"
                                    @keyup="form.tenant = lower_alphanum(form.tenant)"
                                    @change="form.tenant = lower_alphanum(form.tenant)"
                                    pattern="[a-z0-9-_]*"
                                    placeholder="db"
                                    required>
                                    <div class=""> <button type="button" class="btn btn-auth"> <i class="fe fe-database" aria-hidden="true"></i> </button> </div>
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
    import '/assets/plugins/fileuploads/css/fileupload.css'
    import '/assets/plugins/fileuploads/js/fileupload.js'

    export default {
        mixins: [formFieldsMixin],
        data() {
            return {
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
                currentUser: {
                    auth_level: null
                },
                formValidated: false,
                formErrors: [],
                formStored: false,
                statusList: []
            }
        },
        async mounted() {
            // check user data
            await this.$store.dispatch("auth/checkAuth");
            this.currentUser = this.$store.getters["auth/user"];
            axios.get('/api/auth/users?auth_lvl=2').then((response) => { this.data.managers = response.data })
            this.dropify = this.initDropify()
            this.statusList = this.getStatus()
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
            handleAddEntreprise(e) {
                e.preventDefault();

                // reset some attrs
                this.clearFormErrors();
                this.setFormStored(false);

                // form valdiation using JQuery
                if ($('#newElementForm')[0].checkValidity() === false) {
                    e.preventDefault();
                    e.stopPropagation();
                } else {
                    let formData = new FormData();
                    _.each(this.form, (value, key) => {
                        formData.append(key, value)
                    })
                    axios.post('/api/auth/entreprises', formData, {headers: {'Content-Type': 'multipart/form-data'}})
                    .then((response) => {
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
            },
        },
    }
</script>

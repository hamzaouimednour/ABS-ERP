<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-status bg-black br-tr-7 br-tl-7"></div>
            <div class="card-header">
                <h3 class="mb-0 card-title">Nouveau Module</h3>
            </div>
            <div class="card-body">
                
                <div class="alert alert-secondary" role="alert" v-if="formErrors.length">
                    <div v-for="error in formErrors" v-bind:key="error.key">{{ error }}</div>
                </div>
                
                <div class="alert alert-primary" role="alert" v-if="formStored">
                    <span class="alert-inner--icon"><i class="fe fe-check-square"></i></span>
                    <span class="alert-inner--text"> <strong> Succès! </strong> un nouveau module a été ajouté.</span>
                </div>

                <form id="newElementForm" @submit.prevent="handleAddModule">
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
                                pattern="[a-z0-9-_]*"
                                required>
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Controller <small class="text-danger">*</small></label>
                                <input
                                type="text"
                                v-model="form.controller"
                                @keyup="form.controller = lower_alpha(form.controller)"
                                @change="form.controller = lower_alpha(form.controller)"
                                class="form-control"
                                placeholder="controller"
                                pattern="[a-z]*"
                                required>
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Description</label>
                                <textarea v-model="form.description" class="form-control" rows="3" placeholder="description ..."></textarea>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Etat du module <small class="text-danger">*</small></label>
                                <select class="form-control form-select" v-model="form.status" required>
                                    <option v-for="(item, index) in statusList" v-bind:key="index" :value="index"> {{ item }} </option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Permissions du module <small class="text-danger">*</small></label>
                                <ul class="list-group">
                                    <li class="list-group-item" v-for="item in permissionsList" :key="item.index">
                                        <span class="tag">{{ item.name }} :</span> {{ item.description }}
                                        <label class="custom-control custom-checkbox pull-right">
                                            <input type="checkbox" class="custom-control-input" v-model="form.permissions" :value="item.slug">
                                            <span class="custom-control-label"></span>
                                        </label>
                                    </li>
                                </ul>
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
                    name: '',
                    slug: '',
                    controller: '',
                    description: '',
                    status: 1,
                    permissions: []
                },
                currentUser: {
                    auth_level: null
                },
                formValidated: false,
                formErrors: [],
                formStored: false,
                permissionsList: [],
                statusList: []
            }
        },

        async mounted () {
            // check user data
            await this.$store.dispatch("auth/checkAuth");
            this.currentUser = this.$store.getters["auth/user"];
            this.permissionsList = await this.getPermissions();
            this.statusList = this.getStatus().splice(0,2);
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
            handleAddModule(e) {
                e.preventDefault();

                // reset some attrs
                this.clearFormErrors();
                this.setFormStored(false);

                // form valdiation using JQuery
                axios.post('/api/auth/modules', this.form ).then((response) => {
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
                // validate form.
                this.formValidated = true;
                
                // scroll to request msg
                this.scrollToTop();
            }
        },
    }
</script>

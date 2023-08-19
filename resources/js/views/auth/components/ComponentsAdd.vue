<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-status bg-black br-tr-7 br-tl-7"></div>
            <div class="card-header">
                <h3 class="mb-0 card-title">Nouvelle Applicatif</h3>
            </div>
            <div class="card-body">
                
                <div class="alert alert-secondary" role="alert" v-if="formErrors.length">
                    <div v-for="error in formErrors" v-bind:key="error.key">{{ error }}</div>
                </div>
                
                <div class="alert alert-primary" role="alert" v-if="formStored">
                    <span class="alert-inner--icon"><i class="fe fe-check-square"></i></span>
                    <span class="alert-inner--text"> <strong> Succès! </strong> une nouvelle applicatif a été ajouté.</span>
                </div>

                <form id="newElementForm" @submit.prevent="handleAddComponent">
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
    import '/assets/css/custom.css';
    export default {
        mixins: [formFieldsMixin],
        data() {
            return {
                form: {
                    name: '',
                    slug: '',
                    description: '',
                    status: 1,
                    modules: [],
                    permissions:[]
                },
                currentUser: {
                    auth_level: null
                },
                formErrors: [],
                formStored: false,
                permissionsList: [],
                modulesList: [],
                statusList: []
            }
        },

        async mounted () {
            // check user data
            await this.$store.dispatch("auth/checkAuth");
            this.currentUser = this.$store.getters["auth/user"];
            this.permissionsList = await this.getPermissions();
            this.statusList = this.getStatus().splice(0,2);
            axios.get('/api/auth/modules?list=1').then((response) => {
                this.modulesList = response.data;
            });
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
            },
            setFormStored(value) {
                this.formStored = value;
            },
            resetForm() {
                if(this.$refs.switch){
                    this.$refs.switch.forEach(element => {
                        if(element.checked) element.checked = false;
                    });
                }
                Object.assign(this.$data.form, this.$options.data().form);
                this.clearFormErrors();
            },
            handleAddComponent(e) {
                e.preventDefault();

                // reset some attrs
                this.clearFormErrors();
                this.setFormStored(false);

                // form valdiation using JQuery
                axios.post('/api/auth/components', this.form ).then((response) => {
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
                
                // scroll to request msg
                this.scrollToTop();
            }
        },
    }
</script>

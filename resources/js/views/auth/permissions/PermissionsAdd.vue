<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-status bg-black br-tr-7 br-tl-7"></div>
            <div class="card-header">
                <h3 class="mb-0 card-title">Nouveau groupe de permissions</h3>
            </div>
            <div class="card-body">
                
                <div class="alert alert-secondary" role="alert" v-if="formErrors.length">
                    <div v-for="error in formErrors" v-bind:key="error.key">{{ error }}</div>
                </div>
                
                <div class="alert alert-primary" role="alert" v-if="formStored">
                    <span class="alert-inner--icon"><i class="fe fe-check-square"></i></span>
                    <span class="alert-inner--text"> <strong> Succès! </strong> un nouveau groupe de permissions a été ajouté.</span>
                </div>

                <form id="newElementForm" @submit.prevent="handleAddPermission">
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
                                                :data-module="item.id"
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
                    components: [],
                    modules: [],
                    permissions:[]
                },
                currentUser: {
                    auth_level: null
                },
                formErrors: [],
                formStored: false,
                componentsList: [],
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
            axios.get('/api/auth/components?list=1').then((response) => {
                this.componentsList = response.data.data;
            });
        },

        methods: {
            handleComponents(component){
                if(!(this.form.components.includes(component))){
                    this.form.components.push(component);
                }else{
                    // close component switch will remove childrens data
                    if(this.$refs.modules){
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
                    }
                    this.form.components.splice(this.form.components.indexOf(component), 1);
                }
            },
            handleModules(module){
                if(!(this.form.modules.includes(module))){
                    this.form.modules.push(module);
                }else{
                    this.form.modules.splice(this.form.modules.indexOf(module), 1);
                    // remove permissions related to this module
                    _.remove(this.form.permissions, function(n) {
                        return n.startsWith(module+'.')
                    });
                }
            },
            clearFormErrors() {
                this.formErrors = [];
            },
            setFormStored(value) {
                this.formStored = value;
            },
            resetForm() {
                this.$refs.components.forEach(element => {
                    if(element.checked) element.checked = false;
                });
                this.$refs.modules.forEach(element => {
                    if(element.checked) element.checked = false;
                });
                Object.assign(this.$data.form, this.$options.data().form);
                this.clearFormErrors();
            },
            handleAddPermission(e) {
                e.preventDefault();

                // reset some attrs
                this.clearFormErrors();
                this.setFormStored(false);

                // form valdiation using JQuery
                axios.post('/api/auth/permissions', this.form ).then((response) => {
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

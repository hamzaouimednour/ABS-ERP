<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-status bg-black br-tr-7 br-tl-7"></div>
            <div class="card-header">
                <h3 class="mb-0 card-title">Nouveau licence d'entreprise</h3>
            </div>
            <div class="card-body">
                
                <div class="alert alert-secondary" role="alert" v-if="formErrors.length">
                    <div v-for="error in formErrors" v-bind:key="error.key">{{ error }}</div>
                </div>
                
                <div class="alert alert-primary" role="alert" v-if="formStored">
                    <span class="alert-inner--icon"><i class="fe fe-check-square"></i></span>
                    <span class="alert-inner--text"> <strong> Succès! </strong> un nouveau licence d'entreprise a été ajouté.</span>
                </div>

                <form id="newElementForm" @submit.prevent="handleAddLicense" autocomplete="off">
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
    import '/assets/plugins/date-picker/spectrum.css';
    import '/assets/plugins/date-picker/spectrum.js';
    import '/assets/plugins/date-picker/jquery-ui.js';
    import '/assets/plugins/date-picker/i18n/datepicker-fr.js';
    import '/assets/plugins/input-mask/jquery.maskedinput.js';

    export default {
        mixins: [formFieldsMixin],
        data() {
            return {
                form: {
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
            this.statusList = this.getStatus();
            axios.get('/api/auth/components?list=1').then((response) => {
                this.data.components = response.data.data;
            });
            axios.get('/api/auth/entreprises?list=1').then((response) => {
                this.data.entreprises = response.data.data;
            });
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
        },

        methods: {
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
                this.formValidated = false;
                this.clearFormErrors();
            },
            handleModules(module){
                if(!(this.form.modules.includes(module))){
                    this.form.modules.push(module);
                    this.form.permissions[module] = [];
                }else{
                    this.form.modules.splice(this.form.modules.indexOf(module), 1);
                    this.form.permissions[module] = undefined;
                }
            },
            handleAddLicense(e) {
                e.preventDefault();

                // reset some attrs
                this.clearFormErrors();
                this.setFormStored(false);

                // form valdiation using JQuery
                axios.post('/api/auth/entreprises-licenses', this.form ).then((response) => {
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
            }
        },
    }
</script>

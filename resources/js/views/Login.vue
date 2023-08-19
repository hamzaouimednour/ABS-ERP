<template>
    <div class="w-100">
        <div class="custom-logo"></div>
        <div class="text-center mb-4">
            <img src="assets/images/avatar2.png" alt="lockscreen image" class="avatar avatar-xxl brround mb-2">
        </div>

        <div class="alert alert-primary" role="alert" v-if="authSuccess.state">
            <i class="fe fe-check-square me-2"></i> {{ authSuccess.message }}
        </div>

        <div class="alert alert-secondary" role="alert" v-if="authError.state">
            <i class="fe fe-alert-circle me-2"></i> {{ authError.message }}
        </div>

        <form autocomplete="off" @submit.prevent="handleLogin">
            <div class="form-group">
                <label class="form-label text-muted font-weight-normal">Pseudo d'utilisateur</label>
                <div class="input-group">
                    <input
                    type="text"
                    class="form-control"
                    v-model="form.login"
                    @keyup="form.login = alphanum(form.login)"
                    @change="form.login = alphanum(form.login)"
                    pattern="[a-zA-Z0-9_-]*"
                    placeholder="identifiant"
                    required>
                    <div class=""> <button type="button" class="btn btn-auth"> <i class="ti-user" aria-hidden="true"></i> </button> </div>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label text-muted font-weight-normal">Mot de passe</label>
                <div class="input-group">
                    <input
                    type="password"
                    class="form-control"
                    v-model="form.password"
                    placeholder="******"
                    required>
                    <div class=""> <button type="button" class="btn btn-auth"> <i class="ti-lock" aria-hidden="true"></i> </button> </div>
                </div>
            </div>
            <div class="form-group mb-0">
                <label class="custom-control custom-checkbox mb-0">
                    <input v-model="form.remember" @click="form.remember = !form.remember;" type="checkbox" class="custom-control-input">
                    <span class="custom-control-label text-muted">Rester connecté</span>
                </label>
            </div>
            <div class="form-group">
                <div class="container-login100-form-btn"><button v-bind:disabled="authSuccess.state" type="submit" class="btn btn-radius btn-auth btn-block"> CONNECTER </button> </div>
            </div>
        </form>
        <div class="mt-5 mb-5">
            <div class="font-weight-normal fs-16 text-muted">
                Mot de passe oublié ? <a class="btn-link font-weight-normal" href="#"> cliquez ici</a>
            </div>
        </div>
    </div>
</template>

<script>
    import { formFieldsMixin } from "../mixins";
    export default {
        mixins: [formFieldsMixin],
        data() {
            return {
                form: {
                    login: "",
                    password: "",
                    remember: false
                },
                authError: {
                    'state': false,
                    'message': ''
                },
                authSuccess: {
                    'state': false,
                    'message': ''
                },
            };
        },
        methods: {
            resetAuth() {
                Object.assign(this.$data.authError, this.$options.data().authError);
                Object.assign(this.$data.authSuccess, this.$options.data().authSuccess);
            },
            async handleLogin() {
                
                this.resetAuth();

                await this.$store.dispatch("auth/handleLogin", this.form);
                if (this.$store.getters["auth/authenticated"]){
                    this.authSuccess.message = this.$store.getters["auth/error"].message;
                    this.authSuccess.state = true;
                    setTimeout(() => window.location.href = this.$store.getters["auth/redirectTo"], 900);
                    // this.$router.replace(this.$store.getters["auth/redirectTo"]);
                }else{
                    this.authError.message = this.$store.getters["auth/error"].error;
                    this.authError.state = true;
                }
            },
        },
    };
</script>

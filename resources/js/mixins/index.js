export const formFieldsMixin = {
    data: function () {
        return {
        }
    },
    methods: {
        scrollToTop(){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        },
        scrollToTopModal(modal){
            document.getElementById(modal).scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        },
        // number filter input
        number(e) {
            // if (e.which < 48 || e.which > 57) e.preventDefault();
            return e.replace(/[^0-9]/gi, '');
        },
        // float filter input
        float(e) {
            // if (e.which != 46 && (e.which < 48 || e.which > 57))  e.preventDefault();
            return e.replace(/[^0-9.]/gi, '');
        },
        alpha(e) {
            return e.replace(/[^a-z]/gi, '');
        },
        lower_alpha(e) {
            return e.replace(/[^a-z]/g, '');
        },
        alphanum(e) {
            return e.replace(/[^a-z0-9_-]/gi, '');
        },
        lower_alphanum(e) {
            return e.replace(/[^a-z0-9_-]/g, '');
        },
        domain(e) {
            return e.replace(/[^a-z0-9-]/g, '');
        },
        getStatus(index = null){
            var status = ['Suspendu', 'Actif', 'Verrouillé'];
            return (index !== null) ? status[index] : status;
        },
        getAuthority(index = null){
            var authority = ['Aucun', 'Webmaster', 'Manager', 'Modérateur', 'Utilisateur tiers'];
            return (index !== null) ? authority[index] : authority;
        },
        async getAuth(){
            return axios.get('/api/auth/authority').then((response) => {
                return response.data;
            });
        },
        async getPermissions(){
            return axios.get('/api/auth/permissions?gates=1').then((response) => {
                return response.data;
            });
        },
        initDropify(){
            return $('.dropify').dropify({
                messages: {
                    'default': 'Glissez et déposez un fichier ici ou cliquez sur',
                    'replace': 'Glissez-déposez ou cliquez pour remplacer',
                    'remove': 'Supprimer',
                    'error': 'Oups, quelque chose de mal ajouté.'
                },
                error: {
                    'fileSize': 'La taille du fichier est trop grande (1M max).'
                }
            });
        }
    }
}
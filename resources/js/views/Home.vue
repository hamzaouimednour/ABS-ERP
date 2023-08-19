<template>
    <div class="row">
        <div v-for="book in books" v-bind:key="book.id" class="card ml-5" style="width: 18rem;">
            <img class="card-img-top" src="https://loremflickr.com/320/240" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{book.name}}</h5>
                <p class="card-text">{{book.description}}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                books: [{}],
            }
        },
        created() {
            this.loadBooks()
        },
        methods:{
            loadBooks: function () {
                axios.get('/api/books')
                .then((response) => {
                    this.books = response.data;
                })
                .catch((error) => {
                    // handle error
                    console.log(error);
                })
            }
        }
    }
</script>

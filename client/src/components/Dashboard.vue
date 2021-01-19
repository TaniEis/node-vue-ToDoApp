<template>
        <div v-if="ToDos.length > 0" class="row">
            <div class="ml-auto animated spacing--half"><input type="text" placeholder="Filter" v-model="filter"></div>
            <div class="table-responsive">
                <table class="table table-striped table-responsive-sm">
                    <thead class="thead-dark">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ToDo in filteredList" :key="ToDo._id">
                            <td>{{ ToDo.title }}</td>
                            <td>{{ ToDo.description }}</td>
                            <td>{{ ToDo.dueDate }}</td>
                            <td>
                                <router-link :to="{name: 'edit', params: { id: ToDo._id }}" class="btn btn-success">✏️
                                </router-link>
                                <button @click.prevent="remove(ToDo._id)" class="btn btn-danger">❌</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else>
            <blockquote class="blockquote text-center">
            <h1 class="mb-0">A Bit empty here at the moment</h1>
            <footer class="blockquote-footer">your subconscious</footer>
            </blockquote>
        </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                ToDos: [],
                filter: ''
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.ToDos = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            remove(id){
                let apiURL = `http://localhost:4000/api/delete/${id}`;
                let indexOfArrayItem = this.ToDos.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.ToDos.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        },
        computed: {
            filteredList() {
            return this.ToDos.filter((post) => {
                return post.title.includes(this.filter);
            });
        }
  }
    }
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
</style>
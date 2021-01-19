<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create To-Do</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" v-model="ToDo.title" required>
                </div>

                <div class="form-group">
                    <label>description</label>
                    <input type="text" class="form-control" v-model="ToDo.description" required>
                </div>

                <div class="form-group">
                    <label>Due Date</label>
                    <date-pick class="form-control" v-model="ToDo.dueDate" :format="'DD-MM-YYYY HH:mm'" :pickTime="true" required></date-pick>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import DatePick from 'vue-date-pick';
    import 'vue-date-pick/dist/vueDatePick.css';

    export default {
        components: {DatePick},
        data() {
            return {
                ToDo: {
                   title: '',
                   description: '',
                   dueDate: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/add';
                
                axios.post(apiURL, this.ToDo).then(() => {
                  this.$router.push('/')
                  this.ToDo = {
                    title: '',
                    description: '',
                    dueDate: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
</style>
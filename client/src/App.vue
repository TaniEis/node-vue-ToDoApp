<template>
      <div class="container-fluid">
        <header class="row">
          <div class="col-md-10">
            <router-link class="brand" to="/">ToDo app</router-link>
          </div>
          <div class="col-md-2 p-0">
            <router-link class="animated spacing--full" to="/add">Add To-Do</router-link>
          </div>
        </header>

    <!-- Router view -->
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/_variables.scss";
</style>
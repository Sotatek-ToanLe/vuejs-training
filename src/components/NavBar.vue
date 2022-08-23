<template>
  <div>
      <b-nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/todo-list">Todo List</router-link>
      </b-nav>
  </div>
</template>
<script>
export default {
  name:'NavBar'
}
</script>
<style lang="scss">
a {
  text-decoration: none;
  margin-right: 20px;
  &:hover{
    color: red;
  }
}
.router-link-exact-active{
  color: red;
}
</style>
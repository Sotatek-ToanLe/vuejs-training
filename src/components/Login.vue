<template>
  <div>
    {{ token}}


    
     <b-button @click="setToken" v-if="!token">Login</b-button>
     <b-button @click="logout" v-if="token">Log out</b-button>
  </div>
</template>
<script>

import { mapMutations, mapGetters, mapState } from 'vuex';

export default {
  name: 'LoginPage',
  data() { 
    return { 
     
    }
  },
  // watch: {
  //   '$store.state.token'(value) {
  //     if (value) {
  //       this.$router.push('todo-list')
  //     }
  //   }
  // },
  computed: {
    ...mapGetters(['getToken']),
    ...mapState(['token']),
   
  },
  methods: {
     ...mapMutations(['setToken','logout'])
  }
}

</script>
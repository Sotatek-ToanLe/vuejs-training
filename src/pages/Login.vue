<template>
  <div class="login-form">  
    <LoginStep1 v-if="isShowStep1" :visibale="{isShowStep1, isShowStep2}" @isShowStep1 = "handleShowStep"/>
    <LoginStep2 v-if="isShowStep2" :visibale="{isShowStep2, isShowStep3}" @isShowStep2 = "handleShowStep"/>

  </div>
</template>
<script>

import { mapMutations, mapGetters, mapState } from 'vuex';
import LoginStep1 from './LoginStep1.vue';
import LoginStep2 from './LoginStep2.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginStep1,
    LoginStep2
  },
  data() { 
    return { 
      formData: {

      },
      isShowStep1: true,
      isShowStep2: false,
      isShowStep3:false
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
    ...mapMutations(['setToken', 'logout']),
    handleShowStep(step1, step2, formData, type) {
      console.log('step1', step1);
      console.log('step2', step2);
      console.log('formData', formData);
      let temp1, temp2;
      
      if (type === 'step1') { 
        this.isShowStep1 = step1;
        this.isShowStep2 = step2;
        temp1 = { ...formData }
        console.log('temp1', temp1);
        
      } else if (type === 'step2') { 
        this.isShowStep2 = step1;
        this.isShowStep3 = step2;
        temp2 = { ...formData };
        console.log('temp2', temp2);

      }

      this.formData = { ...temp1, ...temp2 };
      console.log('form data:', this.formData);
      
     }
  }
}

</script>
<style lang="scss">
.login-form { 
  padding: 2rem 5rem;
   color: #707D96;
   font-size: 16px;
   h3 {
    color: black;
   }
   .right {
    display: flex;
    justify-content: space-between;
    .btn-next {
      color: white;
      background: #3865ED;
      border-radius: 15px;
      height: 44px;
      border: none;
      padding: 0 25px;
    }
    .btn-back {
      color: #707D96;
      background: #E9ECF6;
      border-radius: 15px;
      height: 44px;
      border: none;
      padding: 0 25px;
    }
   }
  .form-group{
    flex-direction: column;
    font-size: 14px;
    input {
    border:1px solid #ECECF6;
    border-radius: 15px;
    height: 44px;
    width: 80%;
    margin-right: 30px;
    text-indent: 12px;
    }
    .btn {
      color:#3865ED;
      background: rgba(56, 101, 237, 0.1);
      border-radius: 15px;
      height: 44px;
    }
  
    
   
  }
    .login-link {
      color:#3865ED;
      font-weight: 800;
      text-decoration: none;
      &:hover{
        text-decoration: underline;
      }

    }
}
</style>
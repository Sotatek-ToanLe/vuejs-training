<template>
  <div class="login-form">  
 {{obj}}
    <LoginStep1 v-if="obj.isShowStep1" :visibale="obj" @isShowStep1 = "handleShowStep" />
    <LoginStep2 v-if="obj.isShowStep2" :visibale="obj" @isShowStep2 = "handleShowStep" />
    <LoginStep3 v-if="obj.isShowStep3" :visibale="obj" @isShowStep3 = "handleShowStep"/>
    <LoginStep4 v-if="obj.isShowStep4" :visibale="obj" @isShowStep4 = "handleShowStep" />
  </div>
</template>
<script>

import store from '@/store';
import { mapMutations, mapGetters, mapState, mapActions } from 'vuex';
import LoginStep1 from './LoginStep1.vue';
import LoginStep2 from './LoginStep2.vue';
import LoginStep3 from './LoginStep3.vue';
import LoginStep4 from './LoginStep4.vue';


export default {
  name: 'LoginPage',
  components: {
    LoginStep1,
    LoginStep2,
    LoginStep3,
    LoginStep4
  },
  data() { 
    return { 
      formData: {

      },
      obj: {
        isShowStep1: true,
        isShowStep2: false,
        isShowStep3: false,
        isShowStep4: false
      }
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
    ...mapActions(['changeStep']),
    checkEmpty(object) {
      
     const result =  Object.entries(object).every(([, value]) => {

     return Boolean(value)
     });
      return result;
    },
    handleShowStep( formData, type) {
     
      let temp1, temp2, temp3, temp4;
      
      if (type === 'step1') { 
        temp1 = { ...formData }
        console.log('temp1', temp1);
       
        if (this.checkEmpty(temp1)) { 
          store.dispatch('changeStep', { type: 'step1', value: true });
        }
        

        
        console.log('store:', store.state.stepLine);
      } else if (type === 'step2') { 
        temp2 = { ...formData };
        console.log('temp2', temp2);
      } else if (type === 'step3') {
        temp3 = { ...formData };
        console.log('temp3', temp3);
      } else { 
        temp4 = {...formData}
      }

      this.formData = { ...this.formData,...temp1, ...temp2, ...temp3, ...temp4 };
      console.log('form data:', this.formData);
      
    },

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
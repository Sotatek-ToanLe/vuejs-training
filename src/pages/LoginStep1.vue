<template>
<div>
<h3 class="start">Get Started</h3>
    <p >Already have an Account? <a class="login-link">Sign In</a> </p>
  <form>
     <div class="form-group">
        <label for="email">Email Address</label>
        <div class="w-100">
        <input type="email" id="email" placeholder="Email Address" v-model="formData.email"/>
        <button class="btn">Check Email</button>
        </div>
      
      </div>
       <div class="form-group">
        <label for="code">Verification Code</label>
        <div>
        <input type="email" id="code" placeholder="Verification Code"  v-model="formData.code"/>
        <button class="btn">Check Email</button>
        </div>
      
      </div>
       <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" v-model="formData.password" />
      </div>
       <div class="form-group">
        <label for="confirm">Cofirm Password</label>
        <input type="password" id="confirm" placeholder="Cofirm Password" v-model="formData.confirm" />
      </div>
      <div class="right next">
        <button class="btn-next" @click="handleSubmit"> Next
         <b-icon icon="arrow-right"></b-icon>
        </button>
      </div>
  </form>
  </div>
</template>

<script>

// import NavBar from './NavBar.vue';
export default {
  name: "LoginStep1",
  data() {
    return { 
      formData: {
        email: '',
        code: '',
        password: '',
        confirm: ''
      },

      
    }
  },
  props: {
    visibale: Object
    },
  components: {},
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$emit('isShowStep1', !this.visibale.isShowStep1, !this.visibale.isShowStep2, this.formData, 'step1' );
      

    },
    handleBack(e) {
       e.preventDefault();
    }
  },
  
}
</script>
<style>
.next {
  justify-content: end !important;
}
</style>
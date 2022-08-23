<template>
  <div>
  <h3 class="start">Business Contact</h3>
    <p >If you provide details of another person in this application, you confirm that you have
their consent to do so  </p>
    <form>
    
     <div class="form-group">
        <label for="email">Business Contact Name</label>
         <div class="w-100">
        <input type="text" id="email" placeholder="Registered Legal Entity Name" v-model="formData.contact"/>
      
        </div>
      
    
      
      </div>
      
     
      <div class="right">
         
         <button class="btn-back" @click="handleBack" >
       
        <b-icon icon="arrow-left"></b-icon>
        Back
        </button>
        <button class="btn-next" @click="handleSubmit"> Next
         <b-icon icon="arrow-right"></b-icon>
        </button>
      </div>
    </form>

 
  </div>
</template>
<script>



export default {
  name: 'LoginStep4',
  data() { 
    return { 
      formData: {
        contact: '',
     
      },
     
    }
  },

  props: {
    visibale: Object
  },
   methods: {
     handleBack(e) {
       e.preventDefault();
        // eslint-disable-next-line vue/no-mutating-props
         this.visibale.isShowStep3 = !this.visibale.isShowStep3;
        // eslint-disable-next-line vue/no-mutating-props
       this.visibale.isShowStep4 = !this.visibale.isShowStep4;
     },
     handleSubmit(e) {
      e.preventDefault();
      this.$emit('isShowStep4', this.formData, 'step4' );
    },
   },
 


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
    
    .rotate {
      transform: rotate(180deg);
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
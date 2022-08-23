<template>
  <div>
  <h3 class="start">Company Information (1/2)</h3>
    <p >Setup Your Company Information </p>
    <form>
     <div class="form-group">
        <label for="email">Registered Legal Entity Name</label>
        <div class="w-100">
        <input type="email" id="email" placeholder="Registered Legal Entity Name" v-model="formData.legal"/>
      
        </div>
      
      </div>
       <div class="form-group">
        <label for="code">Registration Authority. <span>How to find out Registration Authority Code</span> </label>
        <div>
        <b-form-select v-model="formData.author" class="mb-3"  :options="options">
   
     
        </b-form-select>
        </div>
      
      </div>
      <div>
        <h4>Registered Company Address</h4>
      </div>
       <div class="form-group">
        <label for="address">Online Service (Brand) Name</label>
        <input type="text" id="address" placeholder="Online Service (Brand) Name" v-model="formData.address" />
      </div>
       <div class="form-group">
        <label for="confirm">Webpage URL</label>
        <input type="password" id="confirm" placeholder="Cofirm Password" v-model="formData.confirm" />
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
  name: 'LoginStep2',
  data() { 
    return { 
      formData: {
        legal: '',
      author:null
      },
      options: [
      { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option', disabled: true },
    ]
    }
  },

  props: {
    visibale: Object
  },
   methods: {
     handleBack(e) {
       e.preventDefault();
       
     },
     handleSubmit(e) {
      e.preventDefault();
      this.$emit('isShowStep2', !this.visibale.isShowStep2, !this.visibale.isShowStep3, this.formData, 'step2' );
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
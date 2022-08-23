<template>
  <div>
  <h3 class="start">Company Information (2/2)</h3>
    <p >Setup Your Company Information </p>
    <form>
      <h4>Regulatory Status</h4>
     <div class="form-group">
        <label for="email">Does your VASP business have regulatory approval in your jurisdiction?</label>
        
       <b-form-radio-group
        id="radio-group-1"
        v-model="formData.selected"
        :options="options"
        name="radio-options"
      ></b-form-radio-group>
      
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
  name: 'LoginStep3',
  data() { 
    return { 
      formData: {
        selected: 'first',
     
      },
      options: [
      { text: 'Toggle this custom radio', value: 'first' },
          { text: 'Or toggle this other custom radio', value: 'second' },
          { text: 'This one is Disabled', value: 'third', disabled: true },
          { text: 'This is the 4th radio', value: { fourth: 4 } }
    ]
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
       this.visibale.isShowStep2 = !this.visibale.isShowStep2;
       
     },
     handleSubmit(e) {
       e.preventDefault();
        // eslint-disable-next-line vue/no-mutating-props
       this.visibale.isShowStep3 = !this.visibale.isShowStep3;
        // eslint-disable-next-line vue/no-mutating-props
       this.visibale.isShowStep4 = !this.visibale.isShowStep4;
      this.$emit('isShowStep3', this.formData, 'step3' );
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
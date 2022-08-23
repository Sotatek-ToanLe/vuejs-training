<template>
  <div class="main-step">
  <img src="@/assets/images/logo-footer.png" alt="logo">
  <div class="step" v-for="step in stepper" :key="step.step">
    <p class="number-step"> {{step.step}} </p>
    <div>
      <p>{{ step.title}}</p>
      <p>{{step.subtitle}}</p>
    </div>
  <div :class="{line: step.line}"></div>
  </div>
  </div>
</template>

<script>
export default { 
  name: 'StepSignIn',
  data() { 
    return { 
      stepper: [
        { step: 1, title: 'Email Address', subtitle: 'Verify Your Email', line: true },
        { step: 2, title: 'Company Information', subtitle: 'Register Your Company Detail', line: true },
        { step: 3, title: 'Business Contact', subtitle: 'Register Business Contact Information', line: true},
        { step: 4, title: 'Submission', subtitle: 'Review and Confirm' }
      ]
    }
  }
}
</script>
<style lang="scss">
.main-step { 
background: #0B1B4D;
padding: 2rem;
color: white;
height: 100%;
  .step { 
display: flex;
margin-top: 2rem;
align-items: center;
position: relative;
p {
 margin: 0;
}

.line{
    height: 100%;
    width: 2px;
    background: white;
    position: absolute;
    top: 50px;
    left: 24px;
}
.number-step {
    width: 50px;
    height: 50px;
    background:  #3865ED;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    color: white;
    margin-right: 20px;
    
   
}
}
}
</style>
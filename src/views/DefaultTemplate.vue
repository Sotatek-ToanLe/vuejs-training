<template>
<div class="main">
<HeaderSection class="header" title="Login Page" />

<div class="content">
  <b-container>
    <b-row>
      <b-col cols="4"> <StepSignIn /></b-col>
      <b-col cols="8"> <router-view /> </b-col>
    </b-row> 
  </b-container>
  
</div>


<div  class="footer">
  <FooterSection/>
</div>
</div>
</template>

 <script>

import FooterSection from '@/components/FooterSection.vue';
import HeaderSection from '@/components/HeaderSection.vue';
import StepSignIn from '@/pages/StepSignIn.vue';


export default {
    name: "DefaultTemplate",
    components: { FooterSection, HeaderSection, StepSignIn }
}
</script>

<style lang="scss">
.main {
 padding: 0;
 margin: 0;
min-height: 100vh;
height: 100vh;
[class*='col-']{
padding: 0;
}
 .header { 
  height: 100px;
  background: #0B0D17;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .footer { 
  height: 300px;
  background:  #0B0D17;
  padding: 60px
 }
 .content { 
  padding: 2rem 5rem;
  background: #F1F3F8;
 .bg {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  display: flex;
  height: 100%;
  
 }
 }
}
</style>
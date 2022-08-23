<template>

   <b-container class="footer-content">
    <b-row>
      <b-col cols="6">
        <div class="logo">
          <img src="@/assets/images/logo-footer.png" alt="logo">
        </div>
        <div>
          <p class="copy-right">Copyright (C) 2021 VerifyVASP Pte. Ltd., <br /> All rights reserved.</p>
        </div>
     
          <ul class="list-icon">
            <li><a > <img src="@/assets/icons/insta.svg" alt="" /></a></li>
            <li><a > <img src="@/assets/icons/draw.svg" alt="" /></a></li>
            <li><a > <img src="@/assets/icons/insta.svg" alt="" /></a></li>
            <li><a > <img src="@/assets/icons/draw.svg" alt="" /></a></li>
          </ul>
      
      </b-col>
      <b-col cols="6">
        <b-row>
          <b-col>
            <h3>General</h3>
            <ul>
              <li> <a>Who we are </a></li>
              <li> <a>FAQ </a></li>
              <li> <a>Contact us </a></li>
              
            </ul>
          </b-col>
          <b-col>
             <h3>Developer</h3>
            <ul>
              <li> <a>Documentation </a></li>
              <li> <a>Terms of service</a></li>
              <li> <a>Legal</a></li>
               <li> <a>Privacy policy</a></li>
              <li> <a>Status</a></li>
             
            </ul>
          </b-col>
          <b-col>
             <h3>Legal</h3>
            <ul>
              <li> <a>Terms of service</a></li>
              <li> <a>API Tearm of Use</a></li>
              <li> <a>Privacy policy</a></li>
              
            </ul>
          </b-col>

        </b-row>
      </b-col>
     

    </b-row>
   </b-container>

</template>

<script>
export default {
  name: 'FooterSection'
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300&display=swap');
.footer-content {
  font-family:  'Open Sans', sans-serif;
  color:  #D9DBE1;
  font-size: 14px;
  .copy-right, .logo, .list-icon {
    text-align: start;
  }
  .copy-right{
    margin: 20px 0;
  }
  .list-icon {
    display: flex;
    li {
      padding-right: 20px;
      
    }
  }
}

</style>
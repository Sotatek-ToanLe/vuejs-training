<template>
  <div >
 
    <DefaultTemplate v-if="$route.meta.layout === 'DefaultTemplate'">
    </DefaultTemplate >
    <LayoutTemplate v-if="$route.meta.layout === 'LayoutTemplate'"> </LayoutTemplate>
    <CommonTemplate v-if="$route.meta.layout === 'CommonTemplate'" />
  </div>
</template>

<script>



import DefaultTemplate from './views/DefaultTemplate.vue';
import LayoutTemplate from './views/LayoutTemplate.vue';
import CommonTemplate from './views/CommonTemplate.vue';

export default {
  components: { DefaultTemplate, LayoutTemplate, CommonTemplate },
  data() {
    return { 
        
      }
  },
    methods: {
      handleConsole() {

      }
    },
}
</script>

<style lang="scss">

</style>

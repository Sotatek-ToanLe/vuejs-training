<template>
  <div class="container" >
    <h1>{{ title }} Todo</h1>
   <form @submit="onSubmit" class="col-md-6 ">
   <div class="form-group ">
  <label for="title">Todo</label>
    <input id="title" type="text"  v-model="form.title" required>
   </div>
   <div class="form-group ">
    <label for="status">Status</label>
     <b-form-checkbox
      id="checkbox-1"
      v-model="form.status"
      
    >  
    </b-form-checkbox>
   </div> 
   <div class="form-group ">
<b-button @click="goBack" class="mr-5">Back</b-button>
  <b-button variant="outline-primary" type="submit">Submit</b-button>
   </div>
     

   </form>
   
  </div>
</template>
<script>
import { getDetail, updateTodo, } from '@/api';
import store from '@/store';

export default  { 
  name: 'DetailTodo',
  data() {
    return {

      form: {
        id: '',
        title: '',
        status: false
      },
      type: '',
      title: '',
      error:''
    }
  },

  methods: {
    async onSubmit(event) {
      event.preventDefault();
      if (this.type === 'add') { 
        this.form.id = Math.floor(Math.random() * 100);
        store.dispatch('addTodo', this.form)
        this.goBack()
      } else {
        try {
          await updateTodo(this.form.id, this.form);
          this.goBack()
        } catch (error) {
          console.log(error);
        }    
      } 
    },
    goBack() {
      this.$router.push('/todo-list')
    },
    async getDetailTodo(id) {
      const res = await getDetail(id);
      this.form.id = res.id;
      this.form.title = res.title;
      this.form.status = res.status;
    },
  

  },
  async mounted() {
    this.type = this.$route.params.type;
    if (this.type === 'add') {
      this.title ='Add'
    } else {
      this.title = 'Edit'
    }
    this.id = this.$route.params.id;
    await this.getDetailTodo(this.id);
  }
}


</script>
<style lang="scss">
.container{
  text-align: center;
  position: relative;
}
.form-group { 
  display: flex;
  margin-bottom: 20px;
  label {
    margin-right: 12px;
  }
}


</style>
<template>
  <div>
     <b-button  variant="info" @click="navidateTodo('add')">Add</b-button>
      <b-spinner v-if="isLoading"></b-spinner>
      <b-table striped hover :items="todolist" :fields="fields">
       <template #cell(id)="data">
        {{ data.item.id }}
      </template>
       <template #cell(title)="data">
        {{ data.item.title }}
      </template>
       <template #cell(status)="data">
         {{ data.item.status ? 'done' : 'inprogress' }}
      </template>
       <template #cell(action)="data">
          <b-button class="marginRight" variant="danger" @click="_deleteTodo(data.item.id)">Delete</b-button>
          <b-button class="marginRight" variant="warning" @click="navidateTodo('edit',data.item.id)" >Detail</b-button>
      </template>
      </b-table>
      {{todolist}}
  </div>
</template>
<script>



import router from '@/router';
import store from '@/store';
import { mapActions, mapState} from 'vuex';

export default {
  name: 'TodoList',
  data() {
    return { 
      todos: [],
      fields: ['id', 'title', 'status', 'action'],
      isLoading: false
   }
  },
  computed: {
    ...mapActions(['getTodoList']),
    ...mapState(['todolist'])
  },

  methods: {

    navidateTodo(type, id) {

      router.push(`/detail/${type}${id !== undefined ? `/${id}`:''}`)
    },
    async getList() { 
     await store.dispatch('getTodoList');
   },
  async _deleteTodo(id) {
      try {
        await store.dispatch('deleteTodo', id);
        this.getList()
      } catch (error) {
        console.log(error);
      }
    
    },
   
  },

  async mounted() {
    await this.getList()
  },
}
</script>
<style>
.marginRight {
  margin-right: 10px;
}
</style>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2> Create a task! </h2>
    <input v-model="currentTask" type="text" /> 
    <button @click="create({name: currentTask})"> Create new task -- {{currentTask}}</button>
    <ul>
      <li 
        v-for="task in this.tasks"
        :key="task"
        @click="deleteTask({name: task})"
        > {{task}} </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'HelloWorld',
  data: () => {return {currentTask: "Current task"}},
  props: {
    msg: String
  },
  computed: mapState({
    tasks: state =>  state.tasks,
  }),
  methods: mapMutations([
    'deleteTask',
    'create'
  ])  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  /* list-style-type: none; */
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

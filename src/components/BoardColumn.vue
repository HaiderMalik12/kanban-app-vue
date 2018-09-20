<template>
    <div>
        <div class="uk-card uk-card-default uk-card-body" id="todo-col">
            <h3> {{col.name}}</h3>
            <Task v-for="task in col.tasks" :task="task" :key="task.id" />
        </div>
    </div>
</template>
<script>
import Task from './Task.vue';
export default {
name: 'BoardColumn',
props:['col'],
components:{
    Task
}
}
</script>

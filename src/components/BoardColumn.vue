<template>
    <div>
        <div class="uk-card uk-card-default uk-card-body" id="todo-col">
            <h3> {{name}}</h3>
            <Task/>
        </div>
    </div>
</template>
<script>
import Task from './Task.vue';
export default {
name: 'BoardColumn',
props:['name'],
components:{
    Task
}
}
</script>

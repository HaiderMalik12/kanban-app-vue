<template>
    <div class="has-text-centered icons">
        <div class="uk-alert-default" uk-alert>
            <p>{{task.title}}</p>
            <template v-if="task.edit">
                <input type="text" class="uk-input uk-form-width-medium uk-form-small" :placeholder="task.title" />
                <button class="uk-button uk-button-secondary uk-button-small" style="margin-top:5px"> Save</button>
            </template>
            <template v-else>
                <button class="uk-button uk-button-primary uk-button-small" @click="editTask(colId, task.id)">
                    Edit
                </button>
                <span style="margin:2px">
                </span>
                <button class="uk-button uk-button-danger uk-button-small">
                    Delete
                </button>
            </template>
        </div>
    </div>
</template>
<script>
import {store} from '../store.js';
export default {
    name: 'Task',
    props: ['task','colId'],
    methods:{
        editTask(colId, taskId){
         store.editTask(colId, taskId)
        }
    }
}
</script>


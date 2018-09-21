<template>
    <div class="uk-flex-center">
        <div class="task-header">
            <div class="uk-card uk-card-default uk-card-small uk-card-body">
                <h3 class="uk-card-title">New {{getColTitle}}</h3>
                <div class="uk-margin">
                    <input class="uk-input uk-form-width-medium uk-form-small" type="text" placeholder="Add Task">
                </div>
                <button class="uk-button uk-button-secondary uk-button-small">Save
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../store.js'
export default {
    name: 'AddTask',
    computed:{
        getColTitle(){
          return store.getActiveColumn().name
        }
    }
}
</script>

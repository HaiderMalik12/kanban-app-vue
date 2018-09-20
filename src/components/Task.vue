<template>
    <div class="has-text-centered icons">
        <div class="uk-alert-default" uk-alert>
            <p>{{task.title}}</p>
        </div>
        <button class="uk-button uk-button-primary uk-button-small">
            Edit
        </button>
        <span style="margin:2px">
        </span>
        <button class="uk-button uk-button-danger uk-button-small">
            Delete
        </button>
    </div>
</template>
<script>
export default {
    name: 'Task',
    props: ['task']
}
</script>


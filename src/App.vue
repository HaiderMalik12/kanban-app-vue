<template>
    <div id="app" class="container">
        <h3 align="center" class="uk-heading-divider">Kanban Board</h3>
        <div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-body" id="todo-col">
                    <h3> Todo</h3>
                    <div class="uk-alert-default" uk-alert>
                        <p>Learn Node</p>
                        <div class="has-text-centered icons">
                            <button class="uk-button uk-button-primary uk-button-small">
                                Edit
                            </button>
                            <span style="margin:2px">
                            </span>
                            <button class="uk-button uk-button-danger uk-button-small">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body" id="in-progress-col">
                    <h4>InProgress</h4>
                    <div class="uk-alert-default" uk-alert>
                        <p>Learn GQL</p>
                        <div class="has-text-centered icons">
                            <button class="uk-button uk-button-primary uk-button-small">
                                Edit
                            </button>
                            <span style="margin:2px">
                            </span>
                            <button class="uk-button uk-button-danger uk-button-small">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body" id="done-col">
                    <h4>Done</h4>
                    <div class="uk-alert-default" uk-alert>
                        <p>Learn Mongo</p>
                        <div class="has-text-centered icons">
                            <button class="uk-button uk-button-primary uk-button-small">
                                Edit
                            </button>
                            <span style="margin:2px">
                            </span>
                            <button class="uk-button uk-button-danger uk-button-small">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div class="uk-flex-center">
            <div class="task-header">
                <div class="uk-card uk-card-default uk-card-small uk-card-body">
                    <h3 class="uk-card-title">New Todo</h3>
                    <div class="uk-margin">
                        <input class="uk-input uk-form-width-medium uk-form-small" type="text" placeholder="Add Task">
                    </div>
                    <button class="uk-button uk-button-secondary uk-button-small">Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'app',
}
</script>
<style scoped>
.uk-card-body {
	padding: 12px 30px;
}
.icons .fa {
	padding: 0 2px;
}
.task-header {
	text-align: center;
	margin-top: 10px;
}
</style>

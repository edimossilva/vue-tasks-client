// src/components/taskitem/list-taskitem/ListTaskitem.vue
<template>
  <div>
    <h1>List Taskitem</h1>
    <br />
    <label for="taskItemsOverview">{{taskItemsOverview}}</label>

    <ul>
      <li v-for="taskitem in formattedTaskitems" :key="taskitem.id">
        <div>
          <label>checked:</label>
          <input type="checkbox" v-model="taskitem.checked" />
        </div>
        <div>
          <label>name: {{ taskitem.name}}</label>
        </div>
        <div>
          <label>description: {{ taskitem.description}}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["taskitems"],
  computed: {
    formattedTaskitems: function() {
      return this.taskitems.map(this.formatTaskitem);
    },
    taskItemsOverview: function() {
      const { formattedTaskitems, isTaskitemChecked } = this;
      const totalCount = formattedTaskitems.length;
      const checkedCount = formattedTaskitems.filter(isTaskitemChecked).length;

      return `${checkedCount} of ${totalCount} task items are checked`;
    }
  },
  methods: {
    formatTaskitem(taskitem) {
      return {
        checked: taskitem.checked,
        name: taskitem.task.name,
        description: taskitem.task.description
      };
    },
    isTaskitemChecked(taskitem) {
      return !!taskitem.checked;
    }
  }
};
</script>

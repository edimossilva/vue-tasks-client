<template>
  <div>
    <label>{{taskitemsOverview}}</label>
    <br />

    <ul>
      <li v-for="taskitem in taskitems" :key="taskitem.id">
        <div>
          <label>checked:</label>
          <input type="checkbox" v-model="taskitem.checked" />
        </div>

        <label>name:{{taskitem.name}}</label>
        <br />

        <label>description:{{taskitem.description}}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["taskitems"],
  methods: {
    formatTaskitem(taskitem) {
      return {
        id: taskitem.id,
        checked: taskitem.checked,
        name: taskitem.task.name,
        description: taskitem.task.description
      };
    },
    isTaskitemChecked({ checked }) {
      return checked;
    }
  },
  computed: {
    formattedTaskitems: function() {
      const { taskitems, formatTaskitem } = this;

      if (!taskitems) {
        return [];
      }
      return taskitems.map(formatTaskitem);
    },
    taskitemsOverview: function() {
      const { formattedTaskitems, isTaskitemChecked } = this;

      const length = formattedTaskitems.length;
      const checkedLength = formattedTaskitems.filter(isTaskitemChecked).length;

      return `${checkedLength} of ${length} are checked`;
    }
  }
};
</script>

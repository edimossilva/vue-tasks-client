// src/components/taskgroup/show-taskgroup/ShowTaskgroup.vue
<template>
  <div>
    <h1>Show Taskgroup - id: {{id}}</h1>

    <label for="id">Id: {{taskgroup.id}}</label>
    <br />

    <label for="name">Name: {{taskgroup.name}}</label>
    <br />

    <label for="description">Description: {{taskgroup.description}}</label>
    <br />

    <label for="frequence_type">Frequence Type: {{taskgroup.frequence_type}}</label>
    <br />

    <label>{{taskitemsOverview}}</label>
    <br />

    <ul>
      <li v-for="taskitem in formattedTaskitems" :key="taskitem.id">{{taskitem}}</li>
    </ul>
  </div>
</template>

<script>
import { getTaskgroupApi } from "./../../../services/api";
export default {
  props: ["id"],
  data() {
    return {
      taskgroup: {}
    };
  },
  mounted: function() {
    getTaskgroupApi(this.id).then(response => {
      this.taskgroup = response.data.data;
    });
  },
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
      const { taskgroup, formatTaskitem } = this;

      if (!taskgroup.task_in_lists) {
        return [];
      }

      const { task_in_lists: taskitems } = taskgroup;
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

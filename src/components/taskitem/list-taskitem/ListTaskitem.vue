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
          <input type="checkbox" v-model="taskitem.checked" @click="updateTaskItem(taskitem)" />
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

// src/components/taskitem/list-taskitem/ListTaskitem.vue
<script>
import { mapState, mapMutations } from "vuex";
import { updateTaskItemApi } from "../../../services/api";
export default {
  computed: {
    formattedTaskitems: function() {
      return this.taskitems.map(this.formatTaskitem);
    },
    taskItemsOverview: function() {
      const { formattedTaskitems, isTaskitemChecked } = this;
      const totalCount = formattedTaskitems.length;
      const checkedCount = formattedTaskitems.filter(isTaskitemChecked).length;

      return `${checkedCount} of ${totalCount} task items are checked`;
    },
    ...mapState(["taskitems"])
  },
  methods: {
    ...mapMutations(["setTaskitem"]),
    formatTaskitem(taskitem) {
      return {
        id: taskitem.id,
        checked: taskitem.checked,
        name: taskitem.task.name,
        description: taskitem.task.description
      };
    },
    isTaskitemChecked(taskitem) {
      return !!taskitem.checked;
    },
    updateTaskItem(taskitem) {
      taskitem.checked = !taskitem.checked;
      updateTaskItemApi(taskitem).then(response => {
        this.setTaskitem(taskitem);
      });
    }
  }
};
</script>

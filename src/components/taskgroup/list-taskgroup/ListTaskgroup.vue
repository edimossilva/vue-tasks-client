// src/components/taskgroup/list-taskgroup/ListTaskgroup.vue
<template>
  <div>
    <h1>List taskgroup</h1>
    <ul>
      <li v-for="taskgroup in taskgroups" :key="taskgroup.id">
        {{ taskgroup.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getTaskgroupsApi } from "./../../../services/api";

export default {
  data() {
    return {
      taskgroups: []
    };
  },
  mounted: function() {
    getTaskgroupsApi().then(response => {
      this.taskgroups = response.data.data;
    });
  }
};
</script>

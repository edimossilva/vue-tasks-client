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
    <list-taskitem></list-taskitem>
  </div>
</template>
// src/components/taskgroup/show-taskgroup/ShowTaskgroup.vue
<script>
import { mapState, mapMutations } from "vuex";
import { getTaskgroupApi } from "./../../../services/api";
import ListTaskitem from "./../../taskitem/list-taskitem/ListTaskitem.vue";

export default {
  props: ["id"],
  components: {
    "list-taskitem": ListTaskitem
  },
  computed: {
    ...mapState(["taskgroup"])
  },
  mounted: function() {
    getTaskgroupApi(this.id).then(response => {
      this.setTaskgroup(response.data.data);
    });
  },
  methods: {
    ...mapMutations(["setTaskgroup"])
  }
};
</script>

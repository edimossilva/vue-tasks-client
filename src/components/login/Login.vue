// vue-tasks-client/src/components/login/Login.vue
<template>
  <div>
    <h1>Login</h1>
    <div>
      <label for="username">Username:</label>
      <input type="text" v-model="username" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" v-model="password" autocomplete="new-password" />
    </div>
    <button @click="doLogin(username, password)">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "registered_user1",
      password: "111"
    };
  },
  methods: {
    doLogin(username, password) {
      const baseURI =
        "https://edimossilva-task-manager.herokuapp.com/auth/login";
      const params = { username, password };

      this.$http.post(baseURI, params).then(result => {
        console.log(result.data);
      });
    }
  }
};
</script>

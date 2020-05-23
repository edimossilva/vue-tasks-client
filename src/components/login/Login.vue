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
    <button @click="doLogin(username,password)">Login</button>
    {{username}}
    {{password}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    doLogin(username, password) {
      alert(`${username},${password}`);
    }
  }
};
</script>

<style>
</style>

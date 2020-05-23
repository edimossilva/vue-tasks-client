// vue-tasks-client/src/components/login/Login.vue
<template>
  <div>
    <h1>Login</h1>
    <div>
      <label for="username">Username:</label>
      <input type="text" @input="username = $event.target.value" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" @input="password = $event.target.value" autocomplete="new-password" />
    </div>
    <button>Login</button>
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
  }
};
</script>

<style>
</style>

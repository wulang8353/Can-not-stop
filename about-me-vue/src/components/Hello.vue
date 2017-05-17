<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<style lang="scss" scoped>
$blue: blue;
h1,
h2 {
  font-weight: normal;
  color: $blue;
}


</style>

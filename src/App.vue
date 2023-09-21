<template>
  <div>
    <my-addtion></my-addtion>
    <p>------------------------------</p>
    <my-subtraction></my-subtraction>
    <user />
  </div>
</template>

<script>
  import Addtion from './components/Addtion.vue';
  import Subtraction from './components/Subtraction.vue';
  import User from './components/User.vue';
export default {
  name: 'App',
  components: {
    'my-addtion': Addtion,
    'my-subtraction': Subtraction,
    User,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

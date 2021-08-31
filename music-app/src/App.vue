<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    if( document.getElementById('Loading'))document.getElementById('Loading').remove();
  }
}
</script>

<style>

</style>

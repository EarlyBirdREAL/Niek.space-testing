<script setup>
import {content} from "@/utils/content";
// console.log($route.params.song)
</script>
<template>
  <div class="admin">
 <h1>Help</h1>

  <li v-for="data in content">
    {{data.title}}
  </li>
    <router-link to="/Songs">Click me</router-link>
  </div>
</template>
<style>
.admin{
  text-align: left;
}
</style>
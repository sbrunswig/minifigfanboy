<script>
export default {
  data() {
    return {
      name: 'scott',
    }
  }
}
</script>

<template>
  <div>
    <div class="flex">
      <router-link to="/">Home {{ name }}</router-link>
    </div>
    <router-view/>
  </div>
</template>



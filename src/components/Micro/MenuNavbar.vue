<template>
  <li class="nav-item my-auto">
    <router-link :to="to" 
      :class="{
        'nav-link': 1, 
        'active': namePath.indexOf(this.$route.name) != -1 ? 1 : 0
      }">
      {{ title }}
    </router-link>
  </li>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      namePath: {
        type: Array,
        required: true
      },
    }
  }
</script>
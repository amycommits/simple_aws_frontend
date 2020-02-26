<template>
  <div class="container">
    <h1 class="title">
      frontend
    </h1>
    <div v-for="thing in things" :key="thing.id">
      {{ thing.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  computed: {
    ...mapGetters(['things'])
  },
  mounted() {
    this.$store.dispatch('getThings')
  }
}
</script>

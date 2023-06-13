<template>
  <Story title="component" :layout="{ type: 'grid' }">
    <Test />
  </Story>
</template>

<script setup lang="ts">
import Test from '../src/index.vue'

defineOptions({
  name: 'CottonStory'
})
</script>

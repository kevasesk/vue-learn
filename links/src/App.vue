<template>
  <div id="root">
    {{this.$root.$data.config}}
    <Links/>
  </div>
</template>

<script>
import Links from './components/Links.vue'

export default {
  name: 'LinksApp',
  components: {
      Links
  }
}
</script>

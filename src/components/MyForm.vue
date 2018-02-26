<template>
  <div>
      <div 
        v-for="(comp, index) in list"
        :key="index"
      >
        {{ comp.title }}
      </div>
  </div>
</template>

<script>

export default {
  name: 'MyForm',
  computed: {
      list () {
          return this.$store.state.list;
          return this.$store.state.mock;
      }
  }
}
</script>

<template>
  <Card class="border-success">
    <template slot="zh-title">{{ zhName }}</template>
    <template slot="en-title">{{ name }}</template>
    <slot v-for="(_, slot) in $slots" :slot="slot" :name="slot" />
  </Card>
</template>

<script>
import Card from './card.vue';

export default {
  name: 'OmenCard',
  components: {
    Card,
  },
  props: [
    'name',
  ],
  computed: {
    zhName() {
      console.assert(_(this.$share.omens).has(this.name));
      return _.defaultTo(this.$share.omens[this.name], '????????');
    },
  },
};
</script>

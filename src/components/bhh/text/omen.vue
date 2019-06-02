<template>
  <span>
    <template v-if="brief === null">「{{ zhName }} {{ name }}」</template>
    <template v-else>{{ zhName }}</template>
  </span>
</template>

<script>
import _ from 'lodash';

export default {
  props: {
    name: null,
    brief: null,
  },
  computed: {
    zhName() {
      console.assert(_(this.$share.omens).has(this.name));
      return _.defaultTo(this.$share.omens[this.name], '????????');
    },
  },
};
</script>

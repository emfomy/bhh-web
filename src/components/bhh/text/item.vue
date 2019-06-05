<template>
  <span>
    <template v-if="brief === undefined">〈{{ zhName }} {{ name }}〉</template>
    <template v-else>{{ zhName }}</template>
  </span>
</template>

<script>
import _ from 'lodash';

export default {
  props: [
    'name',
    'brief',
  ],
  computed: {
    zhName() {
      console.assert(_(this.$share.items).has(this.name));
      return _.defaultTo(this.$share.items[this.name], '????????');
    },
  },
};
</script>

<template>
  <span>
    <template v-if="!brief">〈{{ zhName }} {{ name }}〉</template>
    <template v-else>{{ zhName }}</template>
  </span>
</template>

<script>
import _ from 'lodash';

export default {
  props: {
    name: String,
    brief: { type: Boolean, default: false },
  },
  computed: {
    zhName() {
      console.assert(_(this.$share.omens).has(this.name));
      return _.get(this.$share.omens, [this.name], '????????');
    },
  },
};
</script>

<template>
  <span>
    <template v-if="!brief">〈{{ zhName }}<template v-if="!small"> {{ name }}</template>〉標記</template>
    <template v-else>{{ zhName }}</template>
  </span>
</template>

<script>
import _ from 'lodash';

export default {
  props: {
    name: String,
    brief: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
  },
  computed: {
    zhName() {
      console.assert(_(this.$share.monsters).has(this.name));
      return _.get(this.$share.monsters, [this.name], '????????');
    },
  },
};
</script>

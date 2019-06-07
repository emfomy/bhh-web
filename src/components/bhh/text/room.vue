<template>
  <span>〈{{ zhName }} {{ name }}〉</span>
</template>

<script>
import _ from 'lodash';

export default {
  props: {
    name: String,
  },
  computed: {
    zhName() {
      console.assert(_(this.$share.rooms).has(this.name));
      return _.defaultTo(this.$share.rooms[this.name], '????????');
    },
  },
};
</script>

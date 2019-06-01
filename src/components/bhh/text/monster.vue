<template>
  <span>「{{ zhColor }}」標記</span>
</template>

<script>
import _ from 'lodash';

export default {
  props: [
    'name',
  ],
  computed: {
    zhColor() {
      console.assert(_(this.$share.monster).has(this.name));
      return _.defaultTo(this.$share.monster[this.name], '????????');
    },
  },
};
</script>

<template>
  <span>「{{ zhName }} {{ name }}」</span>
</template>

<script>
import _ from 'lodash';

export default {
  props: [
    'name',
  ],
  computed: {
    zhName() {
      console.assert(_(this.$share.items).has(this.name));
      return _.defaultTo(this.$share.items[this.name], '????????');
    },
  },
};
</script>

<template>
  <span>〈{{ zhName }} {{ name }}〉{{zhShape}}標記</span>
</template>

<script>
import _ from 'lodash';

const zhShape = {
  square: '方形',
  triangle: '三角',
  pentagon: '五角',
};

export default {
  props: [
    'name',
  ],
  computed: {
    zhName() {
      console.assert(_(this.$share.tokens).has(this.name));
      return _.defaultTo(this.$share.tokens[this.name].name, '????????');
    },
    zhShape() {
      console.assert(_(this.$share.tokens).has(this.name));
      return _.defaultTo(zhShape[this.$share.tokens[this.name].shape], '????????');
    },
  },
};
</script>

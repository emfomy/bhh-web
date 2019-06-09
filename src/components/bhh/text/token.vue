<template>
  <span>〈{{ zhName }} {{ name }}〉<template v-if="!noShape">{{zhShape}}標記</template></span>
</template>

<script>
import _ from 'lodash';

const zhShape = {
  square: '方形',
  triangle: '三角',
  pentagon: '五角',
};

export default {
  props: {
    name: String,
    noShape: { type: Boolean, default: false },
  },
  computed: {
    zhName() {
      console.assert(_(this.$share.tokens).has(this.name));
      return _.get(this.$share.tokens, [this.name, 'name'], '????????');
    },
    zhShape() {
      console.assert(_(this.$share.tokens).has(this.name));
      return _.defaultTo(zhShape[_.get(this.$share.tokens, [this.name, 'shape'])], '????????');
    },
  },
};
</script>

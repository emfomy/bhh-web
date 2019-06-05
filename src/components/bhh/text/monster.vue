<template>
  <span>
    <template v-if="small === undefined">〈{{ zhName }} {{ name }}〉標記</template>
    <template v-else>〈{{ zhName }}〉標記</template>
  </span>
</template>

<script>
import _ from 'lodash';

export default {
  props: [
    'name',
    'small',
  ],
  computed: {
    zhName() {
      console.assert(_(this.$share.monsters).has(this.name));
      return _.defaultTo(this.$share.monsters[this.name], '????????');
    },
  },
};
</script>

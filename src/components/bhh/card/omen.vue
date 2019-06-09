<template>
  <Card ref="body" :series="series" :usage="usage">
    <template slot="zh-title">{{ zhName }}</template>
    <template slot="en-title">{{ name }}</template>
    <slot slot="story" name="story" />
    <slot slot="body" />
    <template slot="footer">
      <b-img class="OmenIcon" center src="@/assets/images/omen_icon.png" />
      <p class="mt-2 mb-0">請立即進行作祟檢定。</p>
    </template>
  </Card>
</template>

<script>
import _ from 'lodash';

import Card from './card.vue';

export default {
  name: 'OmenCard',
  components: {
    Card,
  },
  props: {
    name: String,
    usage: String,
    series: String,
  },
  computed: {
    zhName() {
      console.assert(_(this.$share.omens).has(this.name));
      return _.get(this.$share.omens, [this.name], '????????');
    },
  },
  methods: {
    downloadParam() {
      return this.$refs.body.downloadParam(`Omen - ${this.series} - ${this.name}`);
    },
  },
};
</script>

<style scoped lang="scss">
.Card {
  background-image: url('~@/assets/images/omen_background.png');
}

.OmenIcon {
  height: 2rem;
}
</style>

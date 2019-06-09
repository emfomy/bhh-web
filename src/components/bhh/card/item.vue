<template>
  <Card ref="body" :series="series" :usage="usage">
    <template slot="zh-title">{{ zhName }}</template>
    <template slot="en-title">{{ name }}</template>
    <slot slot="story" name="story" />
    <slot slot="body" />
    <template slot="footer">
      <b-img class="ItemIcon" center src="@/assets/images/item_icon.png" />
      <p class="invisible mt-2 mb-0"></p>
    </template>
  </Card>
</template>

<script>
import _ from 'lodash';

import Card from './card.vue';

export default {
  name: 'ItemCard',
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
      console.assert(_(this.$share.items).has(this.name));
      return _.get(this.$share.items, [this.name], '????????');
    },
  },
  methods: {
    downloadParam() {
      return this.$refs.body.downloadParam(`Item - ${this.series} - ${this.name}`);
    },
  },
};
</script>

<style scoped lang="scss">
.Card {
  background-image: url('~@/assets/images/item_background.png');
}

.ItemIcon {
  height: 2rem;
}
</style>

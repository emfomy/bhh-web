<template>
  <Card class="border-danger">
    <template slot="zh-title">{{ zhName }}</template>
    <template slot="en-title">{{ name }}</template>
    <slot slot="story" name="story" />
    <slot slot="body" />
    <template slot="footer">
      <b-img class="ItemIcon" center src="@/assets/images/item_icon.png" />
    </template>
  </Card>
</template>

<script>
import Card from './card.vue';

export default {
  name: 'ItemCard',
  components: {
    Card,
  },
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

<style scoped lang="scss">
.Card {
  background-image: url('../../../assets/images/item_background.png');
}

.ItemIcon {
  height: 2rem;
}
</style>


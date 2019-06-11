<template>
  <Card ref="body" type="Event" :name="name" :series="series">
    <slot slot="zh-title" name="zh-title" />
    <slot slot="en-title" name="en-title">{{ name }}</slot>
    <slot slot="story" name="story" />
    <slot slot="body" />
    <template slot="footer">
      <b-img class="EventIcon" center src="@/assets/images/event_icon.png" />
      <p class="invisible mt-2 mb-0"></p>
    </template>
  </Card>
</template>

<script>
import Card from './card.vue';

export default {
  name: 'EventCard',
  components: {
    Card,
  },
  props: {
    name: String,
    series: String,
  },
  methods: {
    downloadParam() {
      return this.$refs.body.downloadParam();
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .Card {
  background-image: url('~@/assets/images/event_background.png');
}

.EventIcon {
  height: 2rem;
}
</style>

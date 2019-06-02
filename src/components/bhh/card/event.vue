<template>
  <Card class="EventCard border-warning">
    <slot slot="zh-title" name="zh-title" />
    <slot slot="en-title" name="en-title" />
    <slot slot="story" name="story" />
    <slot slot="body" />
    <template slot="footer">
      <b-img class="EventIcon" center src="/assets/images/event_icon.png" />
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
};
</script>

<style scoped lang="scss">
.EventCard {
  background-image: url('/assets/images/event_background.png');
  background-size: contain;
}

.EventIcon {
  height: 2rem;
}
</style>

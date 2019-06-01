<template>
  <Card class="border-warning">
    <slot v-for="(_, slot) in $slots" :slot="slot" :name="slot" />
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

<template>
  <b-container class="py-3">

    <header class="text-center">
      <h1>預兆列表</h1>
      <p></p>
    </header>

    <b-card class="mb-3" body-class="d-flex flex-wrap justify-content-around">

      <OmenCard class="m-2" name="Girl">
        <template slot="story">
        </template>
      </OmenCard>

    </b-card>

  </b-container>
</template>

<script>
import OmenCard from '@/components/bhh/card/omen.vue';

export default {
  name: 'Events',
  components: {
    OmenCard,
  },
};
</script>

<template>
  <b-container class="py-3">

    <header class="text-center">
      <h1>道具列表</h1>
      <p></p>
    </header>

    <b-card class="mb-3" body-class="d-flex flex-wrap justify-content-around">

      <ItemCard class="m-2" name="Candle">
        <template slot="story">
        </template>
      </ItemCard>

    </b-card>

  </b-container>
</template>

<script>
import ItemCard from '@/components/bhh/card/item.vue';

export default {
  name: 'Events',
  components: {
    ItemCard,
  },
};
</script>

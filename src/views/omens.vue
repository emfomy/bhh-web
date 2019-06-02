<template>
  <b-container class="py-3">

    <header class="text-center">
      <h1>預兆列表</h1>
      <p></p>
    </header>

    <b-card class="mb-3" body-class="d-flex flex-wrap justify-content-around">

      <OmenCard class="m-2" name="Bite">
        <template slot="story">
        </template>
      </OmenCard>

      <OmenCard class="m-2" name="Book">
        <template slot="story">
        </template>
      </OmenCard>

      <OmenCard class="m-2" name="Crystal Ball">
        <template slot="story">
        </template>
      </OmenCard>

      <OmenCard class="m-2" name="Dog">
        <template slot="story">
        </template>
      </OmenCard>

      <OmenCard class="m-2" name="Girl">
        <template slot="story">
        </template>
      </OmenCard>

      <OmenCard class="m-2" name="Holy Symbol">
        <template slot="story">
        </template>
      </OmenCard>

      <OmenCard class="m-2" name="Madman">
        <template slot="story">
        </template>
      </OmenCard>

      <OmenCard class="m-2" name="Mask">
        <template slot="story">
        </template>
      </OmenCard>

      <OmenCard class="m-2" name="Medallion">
        <template slot="story">
        </template>
      </OmenCard>

      <OmenCard class="m-2" name="Ring">
        <template slot="story">
        </template>
      </OmenCard>

      <OmenCard class="m-2" name="Skull">
        <template slot="story">
        </template>
      </OmenCard>

      <OmenCard class="m-2" name="Spear">
        <template slot="story">
        </template>
      </OmenCard>

      <OmenCard class="m-2" name="Spirit Board">
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

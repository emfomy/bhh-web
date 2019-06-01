<template>
  <b-container class="py-3">

    <header class="text-center">
      <h1>作祟列表</h1>
      <p></p>
    </header>

    <b-card class="mb-3" body-class="d-flex flex-wrap justify-content-around">
      <b-button
        v-for="(item, key) in this.$share.haunts" :key="key"
        :to="{ name: `haunts${item.path}` }"
        pill
        block
        class="my-2"
        variant="primary"
        style="width: 10rem; min-width: 10rem;"
      >
        {{ item.num }}
      </b-button>
    </b-card>

  </b-container>
</template>

<script>
export default {
  name: 'Haunts',
};
</script>

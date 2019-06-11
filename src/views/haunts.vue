<template>
  <b-container class="py-3">

    <header class="text-center">
      <h1>作祟列表</h1>
      <p></p>
    </header>

    <b-card no-body class="mb-3">
      <b-tabs card align="center">
        <b-tab title="列表" active>
          <b-card-text class="d-flex flex-wrap justify-content-around">
            <b-button
              v-for="(item, key) in this.$share.haunts" :key="key"
              :to="{ name: `haunts${item.path}` }"
              pill
              block
              class="Button my-2"
              variant="primary"
            >
              {{ item.num }}
            </b-button>
          </b-card-text>
        </b-tab>
        <b-tab title="對照表">
          <b-card-text>Tab Contents 2</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>

  </b-container>
</template>

<script>
export default {
  name: 'Haunts',
};
</script>

<style scoped lang="scss">
.Button {
  width: 10rem;
  min-width: 10rem;
}
</style>

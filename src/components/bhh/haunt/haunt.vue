<template>
  <b-container class="Haunt py-3">

    <header class="text-center">
      <h1><slot name="zh-title" /></h1>
      <h2><slot name="en-title" /></h2>
      <p></p>
    </header>

    <b-card no-body class="mb-3">
      <b-tabs card align="center">
        <b-tab title="Secrets Survival" active>
          <b-card-text><slot name="hero" /></b-card-text>
        </b-tab>
        <b-tab title="Traitor's Tome">
          <b-card-text><slot name="traitor" /></b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'Haunt',
};
</script>

<style scoped lang="scss">
.Haunt {
  ::v-deep ul {
    padding-left: 2rem;
  }
}
</style>

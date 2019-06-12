<template>
  <b-container class="Haunt py-3">

    <header class="text-center">
      <h1><slot name="zh-title" /></h1>
      <h2><slot name="en-title" /></h2>
      <p></p>
    </header>

    <b-card no-body>
      <b-tabs card align="center">
        <b-tab class="pb-1" title="生存指南" active>
          <b-card-text><slot name="hero" /></b-card-text>
        </b-tab>
        <b-tab class="pb-1" title="叛徒手冊">
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

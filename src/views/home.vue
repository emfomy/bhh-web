<template>
  <b-container class="py-3">

    <header class="text-center">
      <h1>山中小屋</h1>
      <p></p>
    </header>

    <b-card class="mb-3" header="房間列表" header-tag="h3" header-class="text-center mb-0">
      <Room
        v-for="(item, key) in $share.rooms"
        :key="key"
        :name="key"
      />
    </b-card>

    <b-card class="mb-3" header="標記列表" header-tag="h3" header-class="text-center mb-0">
      <Token
        v-for="(item, key) in $share.tokens"
        :key="key"
        :name="key"
      />
    </b-card>

  </b-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>

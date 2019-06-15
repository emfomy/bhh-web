<template>
  <b-card-text>
    <b-card no-body>
      <b-tabs card align="center" v-model="tabIndex">

        <b-tab title="" class="pb-1">

        </b-tab>

      </b-tabs>
    </b-card>
  </b-card-text>
</template>

<script>

export default {
  data() {
    return {
      tabIndex: 0,
    };
  }
};
</script>

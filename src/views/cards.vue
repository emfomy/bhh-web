<template>
  <b-container class="py-3">

    <header class="text-center">
      <h1>{{ title }}</h1>
      <p></p>
    </header>

    <b-card header-class="px-0 pb-0 border-bottom-0">
      <b-nav tabs align="center" slot="header">
        <b-nav-item active-class="active" :to="`/${path}/bhh`">BHH</b-nav-item>
        <b-nav-item active-class="active" :to="`/${path}/bww`">BWW</b-nav-item>
      </b-nav>
      <router-view ref="view" />
    </b-card>

  </b-container>
</template>

<script>
export default {
  name: 'Cards',
  props: [
    'path',
    'title',
  ],
  methods: {
    download() {
      const params = [];
      _(this.$refs.view.$children).forEach((child) => {
        if (typeof (child.downloadParam) === 'function') {
          params.push(child.downloadParam());
        }
      });

      this.$downloader.applyCards(params, this);
    },
  },
};
</script>

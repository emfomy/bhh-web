<template>
  <div class="Layout d-flex flex-column min-vh-100 bg-milk-light" >
    <Nav @download="download" />
    <div class="flex-grow-1"><slot /></div>
    <Footer />
  </div>
</template>

<script>
import Nav from './nav.vue';
import Footer from './footer.vue';

export default {
  name: 'Layout',
  components: {
    Nav,
    Footer,
  },
  methods: {
    download() {
      this.$emit('download');
    },
  },
};
</script>

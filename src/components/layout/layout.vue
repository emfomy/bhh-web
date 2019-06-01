<template>
  <div class="Layout min-vh-100 d-flex flex-column bg-milk-light" >
    <Nav/>
    <div class="flex-grow-1"><slot /></div>
    <Footer/>
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
};
</script>

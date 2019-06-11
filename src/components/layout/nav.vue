<template>
  <div class="shadow-sm border-bottom bg-light w-100">
    <b-navbar variant="light" toggleable="sm" class="container">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
          <b-nav-item exact-active-class="active font-weight-bold" to="/">主頁</b-nav-item>
          <b-nav-item active-class="active font-weight-bold" to="/rules">規則</b-nav-item>
          <b-nav-item active-class="active font-weight-bold" to="/events">事件</b-nav-item>
          <b-nav-item active-class="active font-weight-bold" to="/items">道具</b-nav-item>
          <b-nav-item active-class="active font-weight-bold" to="/omens">預兆</b-nav-item>
          <b-nav-item active-class="active font-weight-bold" to="/haunts">作祟</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">

          <b-button size="sm" variant="outline-secondary" @click="download">Download</b-button>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    download() {
      this.$emit('download');
    },
  },
};
</script>

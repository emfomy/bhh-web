<template>
  <div class="shadow-sm border-bottom bg-light w-100">
    <b-navbar variant="light" toggleable="sm" class="container">

      <b-navbar-brand slot="nav-brand" exact-active-class="active font-weight-bold" :to="{ name: 'home' }">主頁</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
          <b-nav-item active-class="active font-weight-bold" :to="{ name: 'events' }">事件</b-nav-item>
          <b-nav-item active-class="active font-weight-bold" :to="{ name: 'items' }">道具</b-nav-item>
          <b-nav-item active-class="active font-weight-bold" :to="{ name: 'omens' }">預兆</b-nav-item>
          <b-nav-item active-class="active font-weight-bold" :to="{ name: 'haunts' }">作祟</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

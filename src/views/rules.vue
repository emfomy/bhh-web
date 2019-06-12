<template>
  <b-container class="py-3">

    <header class="text-center">
      <h1>基礎規則</h1>
      <p></p>
    </header>

    <b-card header-class="px-0 pb-0 border-bottom-0">
      <b-nav tabs align="center" slot="header">
        <b-nav-item
          v-for="(item, key) in routes.slice(1)"
          :key="key"
          active-class="active"
          :to="`/rules/${item.path}`"
        >
          {{ item.meta.title }}
        </b-nav-item>
      </b-nav>
      <router-view ref="view" />
    </b-card>

  </b-container>
</template>

<script>
import routes from '@/include/routes/rules';

export default {
  name: 'Rules',
  data() {
    return {
      routes,
    };
  },
};
</script>

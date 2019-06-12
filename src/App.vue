<template>
  <Layout @download="download">
    <router-view ref="view" />
  </Layout>
</template>

<script>
import _ from 'lodash';

import Layout from '@/components/layout/layout.vue';

export default {
  name: 'App',
  components: {
    Layout,
  },
  methods: {
    download() {
      _.result(this, '$refs.view.download');
    },
  },
};
</script>

<template>
  <Layout @download="download">
    <router-view ref="body" />
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue';

import _ from 'lodash';
import async from 'async';
import { saveAs } from 'file-saver';

export default {
  name: 'App',
  components: {
    Layout,
  },
  methods: {
    download() {
      const taskQueue = [];
      _(this.$refs.body.$children).forEach((child) => {
        if (typeof(child.download) === 'function') {
          taskQueue.push((callback) => {
            return child.download().then((res) => {
              callback(null, res);
            });
          });
        }
      });

      async.parallel(taskQueue)
        .then((res) => {
          const downloadQueue = [];
          _(res).forEach((param) => {
            const { dataUrl, filename } = param;
            downloadQueue.push((callback) => {
              console.warn(`Downloading: ${filename}`);
              this.$bvToast.toast(filename, {
                title: 'Downloading',
                variant: 'success',
                toaster: 'b-toaster-top-left',
                autoHideDelay: 1000,
              });
              saveAs(dataUrl, filename);
              callback(null, null);
            });
          });
          async.series(downloadQueue);
        });
    },
  },
};
</script>

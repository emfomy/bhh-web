<template>
  <Layout @download="download">
    <router-view ref="view" />
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue';

import _ from 'lodash';
import aSync from 'async';
import domtoimage from 'dom-to-image';
import saveAs from 'file-saver';

export default {
  name: 'App',
  components: {
    Layout,
  },
  methods: {
    download() {
      const taskQueue = aSync.queue((task, callback) => {
        task().then(callback);
      }, 4);

      _(this.$refs.view.downloadChild()).forEach((child) => {
        if (typeof (child.downloadParam) === 'function') {
          const param = child.downloadParam();
          taskQueue.push(() => this.downloadOne(param));
        }
      });
    },
    downloadOne(param) {
      const {
        el, name, scale, width, height,
      } = param;
      const fileName = `BHH - ${name}.png`;

      this.$bvToast.toast(fileName, {
        title: 'Downloading',
        variant: 'success',
        toaster: 'b-toaster-top-left',
        autoHideDelay: 1000,
      });

      console.warn(`Generating: ${fileName}`);
      return domtoimage.toPng(el, {
        width: width * scale,
        height: height * scale,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: `${width}px`,
          height: `${height}px`,
        },
      })
        .then((dataUrl) => {
          console.warn(`Downloading: ${fileName}`);
          saveAs(dataUrl, fileName);
        });
    },
  },
};
</script>

import Vue from 'vue';

import _ from 'lodash';
import aSync from 'async';
import domtoimage from 'dom-to-image';
import saveAs from 'file-saver';

const downloader = {

  queue: aSync.queue((task, callback) => {
    task().then(callback);
  }, 4),

  apply(tasks) {
    _(tasks).forEach((task) => {
      this.queue.push(task);
    });
  },

  applyCards(params, vueObj) {
    const tasks = _(params).map((param) => {
       return (() => this.downloadCard(param, vueObj));
    });
    this.apply(tasks);
  },

  downloadCard(param, vueObj) {
    const {
      el, name, scale, width, height,
    } = param;
    const fileName = `BHH - ${name}.png`;

    vueObj.$bvToast.toast(fileName, {
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
}

Vue.prototype.$downloader = downloader;

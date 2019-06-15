<template>
  <div>
    <b-badge variant="none" class="mb-1 text-secondary border border-secondary" href="#" @click="download">Download</b-badge>
    <div ref="card" class="Card position-relative bg-milk-light">
      <div class="CardBody position-absolute w-100 h-100">
        <h3 class="text-center mb-0"><slot name="zh-title">???</slot></h3>
        <h6 class="text-center text-milk-dark text-uppercase"><slot name="en-title">???</slot></h6>
        <p class="text-center font-story-card mb-0"><slot name="story">???</slot></p>
        <hr class="my-2" />
        <div class="CardRule">
          <slot name="body" />
        </div>
      </div>

      <h6 v-if="usage" class="CardType position-absolute">{{ zhType }}</h6>

      <b-img class="CardSeries position-absolute" v-bind="seriesProps" />

      <div class="CardFooter position-absolute w-100">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

import bhhImg from '@/assets/images/bhh.png';
import bwwImg from '@/assets/images/bww.png';

const seriesImg = {
  BHH: bhhImg,
  BWW: bwwImg,
};

export default {
  name: 'Card',
  props: {
    type: String,
    name: String,
    series: String,
    usage: String,
  },
  computed: {
    zhType() {
      if (this.usage) {
        console.assert(_(this.$share.usages).has(this.usage));
        return _.get(this.$share.usages, [this.usage], '????????');
      }
      return null;
    },
    seriesProps() {
      console.assert(_(seriesImg).has(this.series));
      if (_(seriesImg).has(this.series)) {
        return { src: seriesImg[this.series] };
      }
      return { blank: true, blankColor: 'red' };
    },
  },
  methods: {
    download() {
      this.$downloader.applyCards([this.downloadParam()], this);
    },
    downloadParam() {
      const el = this.$refs.card;
      const name = `${this.type} - ${this.series} - ${this.name}`;
      return {
        el,
        name,
        scale: 3,
        width: el.offsetWidth,
        height: el.offsetHeight,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

.Card {

  font-size: (11.5 / 12) * 1rem !important;

  width:      (424 / 24) * 1rem;
  min-width:  (424 / 24) * 1rem;
  height:     (817 / 24) * 1rem;
  min-height: (817 / 24) * 1rem;

  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.CardBody {
  padding: 2rem 1.5rem 1.5rem;
  top: 0;

  background: rgba(255, 255, 255, 0.2);
}

.CardFooter {
  padding: 1.5rem;
  bottom: 0;
}

.CardType {
  top: 1.25rem;
  left: 1.25rem;
}

.CardSeries {
  top: 1.25rem;
  right: 1.25rem;
  height: 1rem;
  width:  1rem;
}

.CardRule {
  line-height: 100%;
}
</style>

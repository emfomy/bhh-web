<template>
  <div class="Card position-relative rounded bg-milk-light">
    <div class="CardBody position-absolute w-100 h-100">
      <h3 class="text-center mb-0"><slot name="zh-title">???</slot></h3>
      <h6 class="text-center text-milk-dark" style="text-transform: uppercase;"><slot name="en-title">???</slot></h6>
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
  props: [
    'series',
    'usage',
  ],
  computed: {
    zhType() {
      if (this.usage) {
        console.assert(_(this.$share.usages).has(this.usage));
        return _.defaultTo(this.$share.usages[this.usage], '????????');
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
    downloadParam(name) {
      return {
        el: this.$el,
        name,
        scale: 3,
        width: this.$el.offsetWidth,
        height: this.$el.offsetHeight,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

.Card {

  font-size: (11 / 12) * 1rem !important;

  width:      (215 / 12) * 1rem;
  min-width:  (215 / 12) * 1rem;
  height:     (400 / 12) * 1rem;
  min-height: (400 / 12) * 1rem;

  background-size: 100% 100%;
  background-repeat: no-repeat;

  ::v-deep p {
    margin-bottom: map-get($spacers, 2);
  }
}

.CardBody {
  padding: 2.5rem 2rem 2rem;
  top: 0;

  background: rgba(255, 255, 255, 0.2);
}

.CardFooter {
  padding: 2rem;
  bottom: 0;
}

.CardType {
  top: 1.75rem;
  left: 1.75rem;
}

.CardSeries {
  top: 1.75rem;
  right: 1.75rem;
  height: 1rem;
  width:  1rem;
}

.CardRule {
  line-height: 100%;
}
</style>

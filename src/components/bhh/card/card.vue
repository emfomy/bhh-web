<template>
  <div class="Card position-relative rounded bg-milk-light">
    <div class="CardBody position-absolute w-100 h-100">
      <h3 class="text-center font-zh-title mb-0"><slot name="zh-title">???</slot></h3>
      <h6 class="text-center font-en-title text-milk-dark" style="text-transform: uppercase;"><slot name="en-title">???</slot></h6>
      <p class="text-center font-zh-story font-weight-bold mb-0"><slot name="story">???</slot></p>
      <hr class="my-2" />
      <slot name="body" />
    </div>

    <h6 v-if="usage" class="CardType font-zh-title position-absolute">{{ zhType }}</h6>

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
  'BHH': bhhImg,
  'BWW': bwwImg,
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
      if ( _(seriesImg).has(this.series) ) {
        return { src: seriesImg[this.series], };
      } else {
        return { blank: true, blankColor: 'red', };
      }
    },
  },
  methods: {
    downloadParam(name) {
      return {
        el: this.$el,
        name,
        scale: 3,
        width: 215,
        height: 400,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

.Card {

  font-size: 10px;

  width:      57mm;
  min-width:  57mm;
  height:     106mm;
  min-height: 106mm;

  background-size: 100% 100%;
  background-repeat: no-repeat;

  ::v-deep p {
    margin-bottom: map-get($spacers, 2);
  }
}

.CardBody {
  padding: 2rem;
  top: 0;

  background: rgba(255, 255, 255, 0.2);
}

.CardFooter {
   padding: 2rem;
   bottom: 0;
}

.CardType {
  top: 2rem;
  left: 2rem;
}

.CardSeries {
  top: 2rem;
  right: 2rem;
  height: 1rem;
  width:  1rem;
}
</style>

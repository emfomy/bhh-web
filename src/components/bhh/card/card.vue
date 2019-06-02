<template>
  <div class="Card position-relative border rounded bg-milk-light">
    <div class="CardBody position-absolute w-100 h-100">
      <img v-if="imgSrc" />
      <h4 class="text-center"><slot name="zh-title">???</slot></h4>
      <h5 class="text-center" style="text-transform: uppercase;"><slot name="en-title">???</slot></h5>
      <p class="font-weight-bold font-italic mb-0"><slot name="story">???</slot></p>
      <hr class="my-2" />
      <slot name="body" />
    </div>
    <div class="CardType position-absolute">
      <h6 v-if="type" class="text-center mb-1">{{ zhType }}</h6>
    </div>
    <div class="CardFooter position-absolute w-100">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: [
    'img-src',
    'type',
  ],
  computed: {
    zhType() {
      console.assert(_(this.$share.itemTypes).has(this.type));
      return _.defaultTo(this.$share.itemTypes[this.type], '????????');
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

.CardType {
  padding: 2rem;
  top: 0;
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
</style>

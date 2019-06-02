<template>
  <div class="Card position-relative border rounded bg-milk-light">
    <div class="CardBody position-absolute w-100">
      <slot name="img" />
      <h4 class="text-center"><slot name="zh-title">???</slot></h4>
      <h5 class="text-center" style="text-transform: uppercase;"><slot name="en-title">???</slot></h5>
      <p class="font-weight-bold mb-0"><slot name="story">???</slot></p>
      <hr class="my-2" />
      <slot name="body" />
    </div>
    <div class="CardFooter position-absolute w-100">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

.Card {
  width:      57mm;
  min-width:  57mm;
  height:     106mm;
  min-height: 106mm;

  font-size: 10px;

  ::v-deep p {
    margin-bottom: map-get($spacers, 2);
  }
}

.CardBody {
  padding: 2rem;
  top: 0;
}

.CardFooter {
  padding: 2rem;
  bottom: 0;
}
</style>

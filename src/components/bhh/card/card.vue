<template>
  <div class="Card border rounded bg-light p-3">
    <slot name="img" />
    <h4 class="text-center"><slot name="zh-title">???</slot></h4>
    <h5 class="text-center" style="text-transform: uppercase;"><slot name="en-title">???</slot></h5>
    <p class="font-italic"><slot name="story">???</slot></p>
    <hr />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style scoped lang="scss">
.Card {
  width:      57mm;
  min-width:  57mm;
  height:     110mm;
  min-height: 110mm;
  font-size:  11px;
}
</style>

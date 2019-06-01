import Vue from 'vue';

import haunts from '@/data/haunts';
import items from '@/data/items';
import monster from '@/data/monster';
import omens from '@/data/omens';
import rooms from '@/data/rooms';
import tokens from '@/data/tokens';

Vue.prototype.$share = {
  haunts,
  items,
  monster,
  omens,
  rooms,
  tokens,
};

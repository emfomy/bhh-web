import Vue from 'vue';

import haunts from '@/data/haunts';
import items from '@/data/items';
import itemTypes from '@/data/item_types';
import monster from '@/data/monster';
import omens from '@/data/omens';
import rooms from '@/data/rooms';
import tokens from '@/data/tokens';

Vue.prototype.$share = {
  haunts,
  items,
  itemTypes,
  monster,
  omens,
  rooms,
  tokens,
};

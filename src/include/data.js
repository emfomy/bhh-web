import Vue from 'vue';

import haunts from '@/data/haunts';
import items from '@/data/items';
import monsters from '@/data/monsters';
import omens from '@/data/omens';
import rooms from '@/data/rooms';
import tokens from '@/data/tokens';
import usages from '@/data/usages';

Vue.prototype.$share = {
  haunts,
  items,
  monsters,
  omens,
  rooms,
  tokens,
  usages,
};

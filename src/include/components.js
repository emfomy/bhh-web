import Vue from 'vue';

import Item from '@/components/bhh/text/item.vue';
import Monster from '@/components/bhh/text/monster.vue';
import Omen from '@/components/bhh/text/omen.vue';
import Room from '@/components/bhh/text/room.vue';
import Token from '@/components/bhh/text/token.vue';

import Roll0 from '@/components/bhh/misc/roll_0.vue';
import RollD from '@/components/bhh/misc/roll_d.vue';
import RollL from '@/components/bhh/misc/roll_l.vue';
import RollT from '@/components/bhh/misc/roll_t.vue';


Vue.component('Item', Item);
Vue.component('Monster', Monster);
Vue.component('Omen', Omen);
Vue.component('Room', Room);
Vue.component('Token', Token);

Vue.component('Roll0', Roll0);
Vue.component('RollD', RollD);
Vue.component('RollL', RollL);
Vue.component('RollT', RollT);

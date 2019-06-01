import loadView from './_loader';

import _ from 'lodash';
import hauntsNums from '@/data/haunts';

export default _.map(hauntsNums, item => ({
  path: `/haunts/${item.path}`,
  name: `haunts${item.path}`,
  component: loadView(`haunts/${item.path}`),
  meta: { title: `作祟 #${item.num}` },
}));

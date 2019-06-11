// eslint-disable quote-props
import _ from 'lodash';

export default _.times(100, i => ({
  num: i + 1,
  path: _.padStart(i + 1, 3, '0'),
}));

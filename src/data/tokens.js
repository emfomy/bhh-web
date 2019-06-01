// eslint-disable quote-props
import _ from 'lodash';

const tokenSquare = {
  Blessing: '祝福',
  Closet: '壁櫥',
  Drip: '滴落',
  Safe: '保險箱',
  'Secret Passage': '秘密通道',
  'Secret Stairs': '秘密階梯',
  Skeletons: '骨骸',
  Slide: '滑道',
  Smoke: '煙霧',
  'Wall Switch': '牆機關',
};

const tokenTriangle = {
  'Knowledge Roll': '知識檢定',
};

const token = {};
_(tokenSquare).forEach((name, key) => {
  token[key] = { name, shape: 'square' };
});
_(tokenTriangle).forEach((name, key) => {
  token[key] = { name, shape: 'triangle' };
});

export default token;

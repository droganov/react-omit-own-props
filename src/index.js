import omit from 'lodash.omit';

export default (proptypes) => {
  const keys = Object.keys(proptypes);
  return props => omit(props, keys);
};

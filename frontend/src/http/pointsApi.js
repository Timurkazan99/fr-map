import { $host } from './index';

const fetchPoints = async () => {
  const {data} = await $host.get('api/points');
  return data;
};

export {fetchPoints};

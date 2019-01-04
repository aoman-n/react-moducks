import moducks from './moducks';
import { sagas as user } from './user';

export default moducks.util.flattenSagas({
  user
});
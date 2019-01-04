import moducks from './moducks';
import { sagas as user } from './moducks/user';

export default moducks.util.flattenSagas({
  user
});
import Marksman from 'patterns/factory/common/types/marksman';
import Role from '../common/types/role';
import Warrior from '../common/types/warrior';

export default {
  createRole: (role: string): Role => {
    switch (role) {
      case 'warrior':
        return new Warrior();
      case 'marksman':
        return new Marksman();
      default:
        throw new Error('Not exist');
    }
  },
};

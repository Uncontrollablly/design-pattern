import Marksman from 'types/roles/marksman';
import Role from 'types/roles/role';
import Warrior from 'types/roles/warrior';

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

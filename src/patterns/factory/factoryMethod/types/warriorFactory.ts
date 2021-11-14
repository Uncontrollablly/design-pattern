import Role from '../../common/types/role';
import Warrior from '../../common/types/warrior';
import RoleFactory from './roleFactory';

export default class WarriorFactory extends RoleFactory {
  create(): Role {
    return new Warrior();
  }
}

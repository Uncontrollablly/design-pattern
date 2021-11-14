import Marksman from '../../common/types/marksman';
import Role from '../../common/types/role';
import RoleFactory from './roleFactory';

export default class MarksmanFactory extends RoleFactory {
  create(): Role {
    return new Marksman();
  }
}

import Role from 'patterns/factory/common/types/role';

export default abstract class RoleFactory {
  abstract create(): Role;
}

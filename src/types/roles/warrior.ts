import Role from './role';

export default class Warrior extends Role {
  attack(): void {
    console.log('Warrior attack');
  }
  defend(): void {
    console.log('Warrior defend');
  }
}

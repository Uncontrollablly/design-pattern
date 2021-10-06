import Role from './role';

export default class Marksman extends Role {
  attack(): void {
    console.log('Marksman attack');
  }
  defend(): void {
    console.log('Marksman defend');
  }
}

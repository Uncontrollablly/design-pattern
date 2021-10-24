import Equipment from './equipment';

const getDefaultEquipment = (type: string) => ({
  name: `default${type}`,
  attributes: [''],
});

type Optional<T> = T | undefined;
export default abstract class Role {
  abstract attack(): void;
  abstract defend(): void;

  private _HP = 100;
  private _armor: Equipment = getDefaultEquipment('_armor');
  private _trouser: Equipment = getDefaultEquipment('_trouser');
  private _weapon: Equipment = getDefaultEquipment('_weapon');
  private _gloves?: Optional<Equipment> = getDefaultEquipment('_gloves');
  private _helmet?: Optional<Equipment> = getDefaultEquipment('_helmet');

  public get HP(): number {
    return this._HP;
  }
  public set HP(v: number) {
    this._HP = v;
  }

  public get armor(): Equipment {
    return this._armor;
  }
  public set armor(v: Equipment) {
    this._armor = v;
  }

  public get trouser(): Equipment {
    return this._trouser;
  }
  public set trouser(v: Equipment) {
    this._trouser = v;
  }

  public get weapon(): Equipment {
    return this._weapon;
  }
  public set weapon(v: Equipment) {
    this._weapon = v;
  }

  public get gloves(): Optional<Equipment> {
    return this._gloves;
  }
  public set gloves(v: Optional<Equipment>) {
    this._gloves = v;
  }

  public get helmet(): Optional<Equipment> {
    return this._helmet;
  }
  public set helmet(v: Optional<Equipment>) {
    this._helmet = v;
  }
}

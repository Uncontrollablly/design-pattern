import Equipment from './equipment';

export default abstract class Role {
  abstract attack(): void;
  abstract defend(): void;

  private _HP: number;
  private _helmet: Equipment;
  private _armor: Equipment;
  private _trouser: Equipment;
  private _gloves: Equipment;
  private _weapon: Equipment;

  public get HP(): number {
    return this._HP;
  }
  public set HP(v: number) {
    this._HP = v;
  }

  public get helmet(): Equipment {
    return this._helmet;
  }
  public set helmet(v: Equipment) {
    this._helmet = v;
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

  public get gloves(): Equipment {
    return this._gloves;
  }
  public set gloves(v: Equipment) {
    this._gloves = v;
  }

  public get weapon(): Equipment {
    return this._weapon;
  }
  public set weapon(v: Equipment) {
    this._weapon = v;
  }
}

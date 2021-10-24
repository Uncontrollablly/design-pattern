import GlovesB from './glovesB';
import HelmetB from './helmetB';
import EquipmentFactory from './types/equipmentFactory';
import Gloves from './types/gloves';
import Helmet from './types/helmet';

export default class FactoryB implements EquipmentFactory {
  creatGloves(): Gloves {
    return new GlovesB();
  }
  createHelmet(): Helmet {
    return new HelmetB();
  }
}

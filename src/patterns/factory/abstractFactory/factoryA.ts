import GlovesA from './glovesA';
import HelmetA from './helmetA';
import EquipmentFactory from './types/equipmentFactory';
import Gloves from './types/gloves';
import Helmet from './types/helmet';

export default class FactoryA implements EquipmentFactory {
  creatGloves(): Gloves {
    return new GlovesA();
  }
  createHelmet(): Helmet {
    return new HelmetA();
  }
}

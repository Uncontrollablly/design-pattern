import GlovesA from './glovesA';
import HelmetA from './helmetA';
import EquipmentFactory from './equipmentFactory';
import Gloves from './gloves';
import Helmet from './helmet';

export default class FactoryA implements EquipmentFactory {
  creatGloves(): Gloves {
    return new GlovesA();
  }
  createHelmet(): Helmet {
    return new HelmetA();
  }
}

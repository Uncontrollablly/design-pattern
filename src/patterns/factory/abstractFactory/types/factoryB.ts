import GlovesB from './glovesB';
import HelmetB from './helmetB';
import EquipmentFactory from './equipmentFactory';
import Gloves from './gloves';
import Helmet from './helmet';

export default class FactoryB implements EquipmentFactory {
  creatGloves(): Gloves {
    return new GlovesB();
  }
  createHelmet(): Helmet {
    return new HelmetB();
  }
}

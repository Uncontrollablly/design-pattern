import Gloves from './gloves';
import Helmet from './helmet';

export default interface EquipmentFactory {
  creatGloves: () => Gloves;
  createHelmet: () => Helmet;
}

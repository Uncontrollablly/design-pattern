import FactoryA from './types/factoryA';
import FactoryB from './types/factoryB';

export default (): void => {
  const glovesA = new FactoryA().creatGloves();
  const helmetA = new FactoryA().createHelmet();
  const glovesB = new FactoryB().creatGloves();
  const helmetB = new FactoryB().createHelmet();

  console.log(glovesA.name, helmetA.name, glovesB.name, helmetB.name);
};

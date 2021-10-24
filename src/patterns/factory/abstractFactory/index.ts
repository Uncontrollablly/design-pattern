import FactoryA from './factoryA';
import FactoryB from './factoryB';

export default (): void => {
  console.log('abstractFactory demo start: ');

  const glovesA = new FactoryA().creatGloves();
  const helmetA = new FactoryA().createHelmet();
  const glovesB = new FactoryB().creatGloves();
  const helmetB = new FactoryB().createHelmet();

  console.log(glovesA.name, helmetA.name, glovesB.name, helmetB.name);

  console.log('abstractFactory demo finish. \n');
};

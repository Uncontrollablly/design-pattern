import simpleFactory from 'patterns/factory/simpleFactory';
import factoryMethod from 'patterns/factory/factoryMethod';
import abstractFactory from 'patterns/factory/abstractFactory';
import singleton from 'patterns/singleton';
import prototype from 'patterns/prototype';
import decorator from 'patterns/decorator';
import adapter from 'patterns/adapter';

const demos: Record<string, () => void> = {
  simpleFactory,
  factoryMethod,
  abstractFactory,
  singleton,
  prototype,
  decorator,
  adapter,
};

export default demos;

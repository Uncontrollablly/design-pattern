import Component from './component';

export default class ConcreteComponent implements Component {
  public operation(): string {
    return 'ConcreteComponent';
  }
}

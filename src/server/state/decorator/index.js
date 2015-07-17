export default class Decorator {
  constructor(config) {
    this.config = config;
    this.provider = new ProviderDcorator(config);
    this.store = new StoreDecorator(config);
  }
}

export function buildDecorator(loader, decorator) {
  return function decorate(obj) {
    for (let keys of obj) {
      var val = obj[keys];
      obj[keys] = (typeof val === 'string') ? decorator(loader, val) : decorate(val, decorate);
    }
    return obj;
  };
}

export function storeDecorator(loader, value) {
  return loader.fromStore(value);
}

export function providerDecorator(loader, value) {
  return loader.provide(value);
}

export function fixtureDecorator(loader, value) {
  return loader.fixture(value);
}

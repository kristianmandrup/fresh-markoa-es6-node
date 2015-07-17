export buildDecorator function(config, fn) {
  return function decorateWith(obj, decorate) {
    for(let keys of obj) {
      var val = obj[keys];
      if (typeof val === 'string') {
        obj[keys] = decorate(config, val);
      } else {
        return decorateWith(val, decorate);
      }
    }
    return obj;
  }
}

export storeGenerator function(config, value) {
  return config.store[value];
}

export providerGenerator function(config, value) {
  return config.provide(value);
}

export fixtureGenerator function(config, value) {
  return config.fixture(value);
}

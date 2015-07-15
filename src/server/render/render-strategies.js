import Configurator from '../configurator';

var renderStrategies = {
  streamed: function(template, data) {
    marko.load(template).stream(data);
  }
};

export default class RenderStrategies extends Configurator {
  constructor(config) {
    super(config);
    this.renderStrategies = renderStrategies;
    this.renderStrategies.default = renderStrategies.streamed;
  }

  get renderStrategies() {
    return this.config.rendering.strategies;
  }
}

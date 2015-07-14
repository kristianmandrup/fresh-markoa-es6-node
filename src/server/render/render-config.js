import RenderStrategies from './render-strategies';

export default class RenderConfig {
  constructor(config) {
    super(config);
    this.config.rendering.strategies = this.createRenderStrategies();
    this.config.render = this.builder();
  }

  get createRenderStrategies() {
    return new RenderStrategies(this.config);
  }

  get renderStrategies() {
    return config.rendering.strategies;
  }

  get pages() {
    return this.config.views.pages;
  }

  findPageTemplate(name) {
    return this.pages.findTemplate(name);
  }

  builder() {
    return function(response, pageName, pageData) {
      var pageTemplate = this.findPageTemplate(pageName);
      this.log('rendering template, data:', pageTemplate, pageData);
      response.body = this.renderStrategies.default(pageTemplate, pageData);
      response.type = 'text/html';
    };
  }
};

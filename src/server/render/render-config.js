import Configurator from '../configurator';
import RenderStrategies from './render-strategies';

export default class RenderConfig extends Configurator {
  constructor(config) {
    super(config);
    // move this to configure() ?
    this.config.rendering.strategies = this.createRenderStrategies();
    this.config.render = this.builder();
  }

  get createRenderStrategies() {
    return new RenderStrategies(this.config);
  }

  get renderStrategies() {
    return this.config.rendering.strategies;
  }

  get render() {
    return this.config.render;
  }

  get pages() {
    return this.config.views.pages;
  }

  get page() {
    return this.config.page;
  }

  pageConfig(name) {
    return this.page[name] || this.page.default;
  }

  // TODO: test and improve!
  findPageTemplate(name) {
    return this.pageConfig(name).findTemplate(name);
  }

  builder() {
    return function(response, pageName, pageData) {
      var pageTemplate = this.findPageTemplate(pageName);
      this.log('rendering template, data:', pageTemplate, pageData);
      response.body = this.render(pageTemplate, pageData);
      response.type = 'text/html';
    };
  }
}

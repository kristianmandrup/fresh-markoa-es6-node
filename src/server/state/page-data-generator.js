import Configurator from '../configurator';

export default class PageDataGenerator extends Configurator {
  get state() {
    console.log('config', this.config);
    return this.config.state;
  }

  pageData(name) {
    console.log('state', this.state);
    return {
      $global: this.state.globals.getFor(name),
      session: this.state.sessions.getFor(name),
      providers: this.state.providers.getFor(name),
      page: this.state.pages.getFor(name),
      content: this.state.content.getFor(name)
    };
  }
}

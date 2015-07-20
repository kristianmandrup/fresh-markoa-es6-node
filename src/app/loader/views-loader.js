import BaseLoader from './base-loader';
import PathResolver from './views/path-resolver';

// TODO: Clean this up! Simplify!!
export default class StateLoader extends BaseLoader {
  // generalize in Loader
  constructor(config) {
    super(config);
    this.pathResolver = new PathResolver();
    this.paths = config.paths || this.defaultPaths;
  }

  configure() {
    this.views.rootPath = this.resolveViewRootPaths();
    this.resolvePageTemplateRootPaths();
  }

  get defaultPaths() {
    return this.config.default ? this.defaultLoaderPaths : [];
  }

  get defaultLoaderPaths() {
    return this.config.default('views').loader.paths;
  }

  get views() {
    return this.config.views;
  }

  // TODO: should actually be the keys of the mounted apps!?
  get pages() {
    return this.views.pages;
  }

  // configure rootPath for views using server root path
  resolveViewsRootPath() {
    return this.resolvePath(this.rootPath, this.views.root);
  }

  get resolvePath() {
    return this.pathResolver.resolvePath;
  }

  get resolveRoot() {
    return this.pathResolver.rootResolver(this.views, this.views.rootPath);
  }

  get rootPath() {
    return this.config.rootPath;
  }

  get assetTypes() {
    return ['assets', 'pages'];
  }

  // configure rootPath for /assets and /pages folders
  // statics is where static assets live such as:
  // - images, fonts, css etc
  resolveViewRootPaths() {
    for (let name of this.assetTypes) {
      this.resolveRoot(name);
    }
  }

  // should use mounted apps
  resolvePageTemplateRootPaths() {
    // dynamically configure path to each page (in views)
    // allows dev to override by mounting a different path
    for (let page of this.pages.active) {
      this.pages[page].rootPath = this.resolvePath(this.pages.rootPath, page);
    }
  }
}

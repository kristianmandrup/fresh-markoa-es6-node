# The Server Object

```js
server: {
  app: {...} // the Koa application object
  marko: {} // marko templating
  // middleware config
  middleware: {
    compression: {
      mount: fn(server, options)
    },
    csrf: {},
    jwt: {},
    onerror: {},
    router: {},
    scss: {},
    static: {},
    ...
  },
  // render methods
  render: {
    streamed: fn(response, pageTemplateName, pageData)
  } 
  // routing methods
  routes: {
    createBuilder: fn(), // returns route build function
    buildAll: fn() // build all routes
  },
  // start/stop Koa app
  execute: {
    start: fn(server, options),
    stop: fn(server)
  },
  pages: {
    available: ['index', 'prematch', 'live', casino'],
    active: ['index', 'casino']
  }
  page: {
    default: {
      render: fn()

      },
      config: {}
      state: {
        // See Server-State.md
      },
      views: {
        // See Views.md
      }  
    },
    // each page can be set up with individual views and state config
    // pages can also have custom render methods
    index: {

    }
  }
}
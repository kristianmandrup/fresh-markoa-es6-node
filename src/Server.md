# Server overview

The `lib/server` folder contains the file structure for the Koa server.

The Koa-Marko setup is losely based on the screencast [serving-content-in-koajs-with-marko](http://knowthen.com/episode-8-serving-content-in-koajs-with-marko/)

You can include the full server simply by:

`var server = require('./lib/server');`

`app.js` in the project root folder calls `server.setup` to setup the server with initial configuration of middleware.

This includes setting up the routes.

### Setup

`setup.js` is used to setup the Koa server with middleware configurations.

### Config

`config.js` is used to load general server configurations. Currently the list of pages is loaded from the `/config` folder which is used to build the routes dynamically.

### Rendering

`render.js` exports some render functions. 

Server is setup to use `render.streamed` by default.

### Routes

`server/route.js` contains route builder functions...

- `build` builds a standard route

It renders a page, by finding the Marko template for the page and passing the page data to the template.

In the future we will integrate this with `koa-routes` for a better routing solution.

## State

The `/state` folder contains all the various types of stage made available to the app. 

All state is exposed via `data.js` which exports an object where each key is the name of a page. This data object is generated automatically by using server config (list of pages) and by using conventions.

```js
function pageData(name) {
  return {
    $global: state.global[name],
    session: state.session[name]    
    providers: state.providers[name],
    page: state.page[name],
    content: state.content[name]    
  }
}
```

### Providers

`providers.js` contains data providers grouped by page, which are promises that load data asynchronously as the page is rendered. Provider data is typically used in `<async-fragments>` in the marko template.

### Store data

`store.js` contains sets of functions used to retrieve data from a "data store". Store can either use the `retriever` function to simulate an asynchronous data request using a delay, or use some other mechanism to achieve the same effect (ie. make a REST API call etc.).

### Page data

`page.js` contains data specific to each page.

### Global data

`global.js` contains global data that should be available to any page.
The global data should be exposed via the special `$global` key on the template data and made available inside any template via `out.global`.

### Session data

`session.js` contains user session data grouped by user types:
- guest (not logged in)
- basic (logged in)
- admin

Session data can be used to simulate different types of users

### Content

Content is data which is loaded from a static location, such as articles from the CMS.

## Utils

The `/utils` folder contains general purpose utils, such as loading various types of files etc.

## Marko

The `/marko` folder contains the Marko templating configuration for the server. Ideally it could be split into smaller parts...

## Lasso

We need some lasso configuration for bundling assets runtime!!!

TODO

## Middleware

We know more middleware config. This should be placed in `setup` (or rename to middleware?!)

TODO

## Assets bundling (lasso)

Marko asset dependencies can be local or [external](https://github.com/lasso-js/lasso/issues/61)












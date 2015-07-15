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

In the future we will integrate this with `koa-routes` or similar for a better routing solution (see `routes`).

## State

See State.md in `server/defaults/state`

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












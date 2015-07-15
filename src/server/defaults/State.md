## State

The `/state` folder contains all the various types of stage made available to the app.

All state is exposed via `data.js` which exports an object where each key is the name of a page. This data object is generated automatically by using server config (list of pages) and by using conventions.

```js
function pageData(name) {
  return {
    $global: state.global[name],
    session: state.session[name],
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

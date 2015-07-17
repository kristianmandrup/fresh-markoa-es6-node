## State

The `/state` folder contains all the various types of stage made available to the app.

You can subclass and customize these State classes as you like in your own app to suit your needs.

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

### Default data

Each of the state constructors expect to be called with the server `config` object and a `props` object (see `DataConfigurator`).
The `props` object should normally consist of an application `name` and a `data` object.
If the `props` object doesn't have a `data` object it will use the defaults for that type of state.

```js
class DataConfigurator extends Configurator {
  constructor(config, props = {}) {
    super(config);
    this.data = props.data || this.defaultData[props.name] || this.defaultData;
  }
```

### Providing your own default data

For your own app you can easily override any of the `defaultData` getters in the state classes to point to your own default data.

### Decorators

For maximum flexibility it is best to use a declarative (static) style of state definition. Then you can apply whichever Decorator
you like on this state to make it dynamic in nature. The server has some basic decorators built-in (see state/decorator).

To create a custom decorator:

 ```js
function cmsContentDecorator(config, value) {
  return config.cms.retrieve(value);
}

...
var myStateDecorator = buildDecorator(config, cmsContentDecorator);
```



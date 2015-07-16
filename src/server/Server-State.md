# Server State Object

```js
// the app state
{
  // all the app data
  appData: {
    // key for each page in app
    index: {
      $global: {}, // each page has access to global state
      session: {},
      providers: {},
      page: {},
      content: {}
    },
    prematch: {
      ...
    },
    ...
  },
  content: {
    index: {},
    ...
  },
  global: {
    title: "Forvetbet",
    logo: "logo.png",
    ...
  },
  page: {
    index: {},
    ...
  },
  providers: {
    index: {},
    ...
  },
  // user session data
  session: {
    // type of user
    guest: {}, // NOT logged in
    basic: {}, // logged in
    ...
  },
  store: {
    // functions to retrieve data on demand
    cms: {
      articles: fn(),
      ...
    },
    coupons: {
      topTenGames: fn(),
      ...
    }
  }
}
```
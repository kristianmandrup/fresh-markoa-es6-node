var pagesList = [
  'index',
  'prematch',
  'live',
  'casino',
  'account'
]

export default {
  root: 'views',
  statics: {
    // used to build rootPath
    root: 'public'
  },
  pages: {
    root: 'pages',
    available: pagesList
  }
}

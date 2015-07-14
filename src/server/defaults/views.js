var pagesList = [
  'index',
  'prematch',
  'live',
  'casino',
  'account'
]

export default {
  root: 'views',
  static: {
    // used to build rootPath
    root: 'public'
  },
  pages: {
    root: 'pages',
    available: pagesList
  }
}

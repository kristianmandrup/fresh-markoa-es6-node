import state from './index';

export default function pageData(name) {
  return {
    $global: state.globals.getFor(name),
    session: state.sessions.getFor(name),
    providers: state.providers.getFor(name),
    page: state.pages.getFor(name),
    content: state.content.getFor(name)
  };
}

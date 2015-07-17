export default function(conf) {
  return {
    fixture: conf.fileLoader('fixtures'),
    config: conf.fileLoader('config')
  };
}

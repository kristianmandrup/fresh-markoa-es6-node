export default Decorator {
  constructor(obj) {
    this.obj = obj;
  }

  decorate(decoratorFn) {
    return decoratorFn(obj);
  }
}

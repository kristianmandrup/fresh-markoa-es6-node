import Another from './another';
import koa from 'koa';

console.log(koa);

const MyLibrary = {
  anotherFn: Another.anotherFn,
  mainFn() {
    return 'hello';
  }
};

export default MyLibrary;

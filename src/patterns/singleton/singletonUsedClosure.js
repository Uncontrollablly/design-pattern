/* eslint-disable */
function Singleton() {}

Singleton.prototype.show = () => {
  console.log('I am a singleton object.');
};

Singleton.getInstance = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new Singleton();
    }
    return instance;
  };
})();

export default Singleton;

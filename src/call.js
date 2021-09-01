// call()、apply()、bind() 都是用来重定义 this 这个对象的
Function.prototype.myCall = function(context) {
  if(typeof this !== "function") {
    throw new TypeError("error");
  }
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1)
  const result = context.fn(...args);
  delete context.fn;
  return result
}

Function.prototype.myApply = function(context) {
  if(typeof this !== "function" ) {
    throw new TypeError("error");
  }
  constext = context || window;
  context.fn = this;
  let result;
  if(arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}

Function.prototype.myBind = function(context) {
  if(typeof this !== "function") {
    throw new TypeError("error");
  }

  const that = this;
  const args = [...arguments].slice(1);
  return function F() {
    if(this instanceof F) {
      return new that(...args, ...arguments);
    }
    return that.apply(context, args.concat(...arguments));
  }
}

// new实现
function create() {
  let obj = {};
  let Con = [].shift.call(arguments);
  obj._proto_ = Con.prototype;
  let result = Con.apply(obj, arguments);
  return result instanceof Object ? result : obj;
}
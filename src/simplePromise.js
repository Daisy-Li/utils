const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromise(fn) {
  const that = this;
  that.state = PENDING;
  that.value = null;
  that.resolvedCallback = []
  that.rejectedCallback = []

  function resolve(value) {
    if(that.state === PENDING) {
      that.state = RESOLVED;
      that.value = value;
      that.resolvedCallback.map(cb => cb(that.value))
    }
  }

  function reject(value) {
    if(that.state === PENDING) {
      that.state = REJECTED;
      that.value = value;
      that.rejectedCallback.map(cb => cb(that.value))
    }
  }

  try {
    fn(resolve,reject)
  } catch(e) {
    reject(e)
  }
}

MyPromise.prototype.then = function(onFulfilled,onRejected) {
  const that = this;
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : v => v;
  onRejected = typeof onRejected === "function" ? onRejected : r => {
    throw r;
  }

  if(that.state === PENDING) {
    that.resolvedCallback.push(onFulfilled);
    that.rejectedCallback.push(onRejected);
  }
  if(that.state === RESOLVED) {
    onFulfilled(that.value);
  }
  if(that.state === REJECTED) {
    onRejected(that.value);
  }
}
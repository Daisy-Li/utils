function throttle(fn,delay) {
  let lastTime = 0
  
  return function() {
    let now = new Date()
    if(now-lastTime> delay) {
      fn.apply(this)
      lastTime = now
    }
  }
}

document.onscroll = throttle(function() {
  console.log("scroll")
}, 200)

function debounce(fn,delay) {
  let timer = null;

  return function() {
    clearInterval(timer)
    setTimeout(function() {
      fn.apply(this)
    }, delay)
  }
}

document.getElementById("btn").onclick = debounce(function() {
  console.log("click")
}, 1000)
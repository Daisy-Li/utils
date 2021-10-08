

const funcArray = [
  (a) => {
    console.log(a)
  },
  (b) => {
    console.log(b)
  }
]

var arr=[
  function (a) {
    console.log(a);
    console.log("十一假期快乐");
  },
  function () {
    console.log("十一假期开心");
  }
  ,
  function () {
    console.log("十一假期健康");
  }
  ,
  function () {
    console.log("十一假期安全");
  },
  function () {
    console.log("十一假期如意");
  }
];
//回调函数:函数作为参数使用
// arr.forEach(function (ele) {
// ele();
// });
function myPromise(arr) {
  let obj = {
    a: "123"
  }
  const a = "2111"

  arr.forEach((item) => {
    item.apply()
  });
}
myPromise(arr)

console.log('1');
async function async1() {
    console.log('2');
    await async2();
    console.log('3');
}
async function async2() {
    console.log('4');
}

process.nextTick(function() {
    console.log('5');
})

setTimeout(function() {
    console.log('6');
    process.nextTick(function() {
        console.log('7');
    })
    new Promise(function(resolve) {
        console.log('8');
        resolve();
    }).then(function() {
        console.log('9')
    })
})

async1();

new Promise(function(resolve) {
    console.log('10');
    resolve();
}).then(function() {
    console.log('11');
});
console.log('12');


var num = (head,k) = => {
  var result = [];
  while(head) {
    result.unshift(head);
    head = head.next;
  }
  return result[k-1]
}
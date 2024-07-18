class U {
  value = null;
  timer = 0;
  fulfill = false;

  constructor() {}

  p(timer) {
    const that = this;
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        that.fulfill = true;
        resolve();
      }, timer);
    });
  }
  console(val) {
    const that =this;
    this.value.then(function(){
        console.log(val);
        return Promise.resolve();
    })
    return this;
  }
  setTimeout(timer) {
    // this.p(timer).then(function() {
    //   console.log(this.value);
    // });
    // return this;
    const that = this;
    this.value = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
            that.timer = timer;
        },timer);
    });
    return this;
  }
}

const u = new U();
// u.setTimeout(3000)
//   .console(33)
//   .setTimeout(5000)
//   .console(11)
//   .setTimeout(2000)
//   .console(121);

// const a = u.setTimeout(3000).then(function(val) {
//     console.log(33);
//     return u.setTimeout(2000);
//   }).then(function(val) {
//     console.log(22);
//     return u.setTimeout(1000);
//   });

u.setTimeout(5000).console(11).setTimeout(3000).console(22)
  

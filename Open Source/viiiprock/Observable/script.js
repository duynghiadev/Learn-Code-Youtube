class Observable {
  constructor(functionTakesObserver) {
    this._functionTakesObserver = functionTakesObserver;
  }

  subscribe(observer) {
    return this._functionTakesObserver(observer);
  }
}

const myObservable = new Observable((observer) => {
  setTimeout(() => {
    observer.next("got data!");
    observer.complete();
  }, 1000);
});

const observer = {
  next(data) {
    console.log(data);
  },
  error(e) {
    console.log(e);
  },
  complete() {
    console.log("request complete");
  },
};

myObservable.subscribe(observer);

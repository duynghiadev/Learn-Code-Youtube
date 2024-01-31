class StoreImageid {
  constructor() {
    this.id=undefined;
  }
  set(id)
  {
    this.id=id;
  }
  get(){
    return this.id;
  }
}

const Session = new StoreImageid();
export default Session;

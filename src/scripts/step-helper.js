export default class StateHelper {
  buffer = {};

  on(name, callback) {
    if(this.buffer[name]) {
      this.buffer[name] = [...this.buffer[name], callback]
    } else {
      this.buffer[name] = [callback]
    }
  }
  
  go(name, data) {
    console.log(name, data);
    this.buffer[name].forEach(callback => {
      callback(data)
    });
  }
}
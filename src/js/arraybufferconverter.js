export default class ArrayBufferConverter {
    load(buffer) {
      this.buffer = buffer;
    }
    toString() {
      const bufferView = new Uint16Array(this.buffer);
      let str = '';
      for (let i = 0; i < bufferView.length; i++) {
        str += String.fromCharCode(bufferView[i]);
      }
      return str;
    }
  }
  
// TODO: write your code here
export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
}

export default class ArrayBufferConverter {
    static load(data){
        const dataView = new Uint16Array(data);
        return dataView;
    }

    static toString(dataView) {
        let dataString = "";
        for(let i = 0; i < dataView.length; i += 1) {
            dataString += String.fromCharCode(dataView[i])
        }
        return dataString;
    }
}

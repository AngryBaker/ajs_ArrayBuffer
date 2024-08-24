import ArrayBufferConverter, {getBuffer} from '../app';

const bufferizedInfo = getBuffer();

test('should load', () => {
  const result = ArrayBufferConverter.load(bufferizedInfo);

  expect(result).toEqual(new Uint16Array(bufferizedInfo));
});

test('should serialzed', () => {
  const result = ArrayBufferConverter.toString( ArrayBufferConverter.load(bufferizedInfo));
  
  expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

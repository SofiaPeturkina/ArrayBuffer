import getBuffer from "../basic";
import ArrayBufferConverter from "../arraybufferconverter";

test("should return string", () => {
  const newBuff = new ArrayBufferConverter();
  newBuff.load(getBuffer());

  expect(newBuff.toString()).toMatch('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

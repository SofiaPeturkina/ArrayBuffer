import getBuffer from "./basic";
import ArrayBufferConverter from "./arraybufferconverter";

console.log("app worked");

const newBuff = new ArrayBufferConverter();
newBuff.load(getBuffer());
const result = newBuff.toString();

console.log(result);
console.log(typeof result);

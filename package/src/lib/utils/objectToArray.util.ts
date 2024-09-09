import { KeyAble, Name } from "../../types";

export default function objectToArray(obj: KeyAble, keyName: Name = "key", valueName: Name = "value") {
  return Object.keys(obj).map((key) => ({ [keyName]: key, [valueName]: obj[key] }));
}

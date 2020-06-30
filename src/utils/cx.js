function toVal(thing) {
  let key;
  let val;
  let str = "";

  switch (typeof thing) {
    case "string":
      str += thing;
      break;
    case "number":
      str += thing;
      break;
    case "object":
      if (Array.isArray(thing)) {
        for (key = 0; key < thing.length; key++) {
          if ((val = toVal(thing[key]))) {
            str && (str += " ");
            str += val;
          }
        }
      }
      break;
    default:
      for (key in thing) {
        if (thing[key]) {
          str && (str += " ");
          str += key;
        }
      }
      break;
  }
  return str;
}

export default function () {
  let i = 0;
  let tmp;
  let x;
  let str = "";
  while (i < arguments.length) {
    if ((tmp = arguments[i++])) {
      if ((x = toVal(tmp))) {
        str && (str += " ");
        str += x;
      }
    }
  }

  return str;
}

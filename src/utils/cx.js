/* eslint-disable no-cond-assign */
function toVal(mix) {
  let key
  let val
  let str = ""

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (key = 0; key < mix.length; key++) {
        if (mix[key]) {
          if ((val = toVal(mix[key]))) {
            str && (str += " ")
            str += val
          }
        }
      }
    } else {
      for (key in mix) {
        if (mix[key]) {
          str && (str += " ")
          str += key
        }
      }
    }
  }

  return str
}

export default function () {
  let i = 0
  let tmp
  let x
  let str = ""
  while (i < arguments.length) {
    if ((tmp = arguments[i++])) {
      if ((x = toVal(tmp))) {
        str && (str += " ")
        str += x
      }
    }
  }

  return str
}

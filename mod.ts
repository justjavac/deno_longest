/* base on [jonschlinkert/longest](https://github.com/jonschlinkert/longest)
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

/**
  * Get the longest item in an array.
  * @param arr
  */
export default function longest(arr: string[]): string | undefined {
  if (!Array.isArray(arr)) {
    throw new TypeError("expected an array");
  }

  const len = arr.length;
  if (len === 0) {
    return undefined;
  }

  let val = arr[0];
  if (typeof val === "number") {
    val = String(val);
  }

  let longest = val.length;
  let idx = 0;

  while (++idx < len) {
    let ele = arr[idx];
    if (ele == null) {
      continue;
    }

    if (typeof ele === "number") {
      ele = String(ele);
    }

    let elen = ele.length;
    if (typeof elen !== "number") {
      continue;
    }

    if (elen > longest) {
      longest = elen;
      val = ele;
    }
  }

  return val;
}

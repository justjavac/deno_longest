// see https://gDeno.testhub.com/jonschlinkert/longest/blob/7c384a11faeef50c1e38d9bd93b14f18c4cd788d/test.js
import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.65.0/testing/asserts.ts";

import longest from "./mod.ts";

Deno.test("should return null when array is empty", function () {
  assertEquals(longest([]), undefined);
});

Deno.test("should throw an error when value is not an array", function () {
  assertThrows(function () {
    // deno-lint-ignore ban-ts-comment
    // @ts-ignore
    longest();
  });
});

Deno.test("should return the longest Deno.testem in the array", function () {
  assertEquals(longest(["a", "abcde", "abc"]), "abcde");
  assertEquals(longest(["a", "bb", "ccc"]), "ccc");
  assertEquals(longest(["a", "bbbb", "ccc"]), "bbbb");
  assertEquals(longest(["aaaaa", "bbbb", "ccc"]), "aaaaa");
});

Deno.test("should skip over sparse elements", function () {
  assertEquals(
    longest(["a", "abcde", null as unknown as string, undefined as unknown as string, "abc"]),
    "abcde",
  );
});

Deno.test("should skip over elements that do not have a .length property", function () {
  assertEquals(longest(["a", "abcde", {} as unknown as string, "abc"]), "abcde");
});

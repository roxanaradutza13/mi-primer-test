import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { sum } from "./index.js";
import { rest } from "./index.js";
import { multiply } from "./index.js";
import { div } from "./index.js";
import { mod } from "./index.js";

describe("Contenedor de mis test", () => {
  it("Test de suma", () => {
    const result = sum(2, 3);
    assert.strictEqual(result, 5);
  });

  it("Test de resta", () => {
    const result = rest(4, 2);
    assert.strictEqual(result, 2);
  });

  it("Test de multiplicación", () => {
    const result = multiply(4, 2);
    assert.strictEqual(result, 8);
  });

  it("Test de división", () => {
    const result = div(10, 2);
    assert.strictEqual(result, 5);
  });

  it("Test Operador resto", () => {
    const result = mod(5, 2);
    assert.strictEqual(result, 1);
  });
});
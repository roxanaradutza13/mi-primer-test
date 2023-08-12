import { describe, test } from 'node:test';
import assert from "node:assert";
import { add, sub, mul, div, mod } from  " ./app.js " ;

describe("add tests", () => {
    test("add(1, 1) should return 2", () => {
        const a = 1;
        const b = 1;
        assert.strictEqual(add(a, b), 2);
    });

    test("add(1, -1) should return 0", () => {
        const a = -1;
        const b = 1;
        assert.strictEqual(add(a, b), 0);
    });
});

describe("sub tests", () => {
    test("sub should return a - b", () => {
        const a = 1;
        const b = 1;
        assert.strictEqual(sub(a, b), 0);
    });
});

describe("mul tests", () => {
    test("mul should return a * b", () => {
        const a = 2;
        const b = 2;
        assert.strictEqual(mul(a, b), 4);
    });
});

describe("div tests", () => {
    test("div should return a / b", () => {
        const a = 4;
        const b = 2;
        assert.strictEqual(div(a, b), 2);
    });

    test("div(1, 0) should return 0", () => {
        const a = 1;
        const b = 0;
        assert.strictEqual(div(a, b), 0);
    });
});

describe("mod tests", () => {
    test("mod should return a % b", () => {
        const a = 4;
        const b = 2;
        assert.strictEqual(mod(a, b), 0);
    });

    test("mod(1,0) should return 0", () => {
        const a = 1;
        const b = 0;
        assert.strictEqual(mod(a, b), 0);
    });
});
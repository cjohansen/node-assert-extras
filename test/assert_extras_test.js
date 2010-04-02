var assert = require("assert");
var extras = require("assert-extras");

assert.doesNotThrow(function () {
    extras.isNull(null);
    extras.isNull(null, "Some message");

    extras.isNotNull(undefined);
    extras.isNotNull(undefined, "Some message");
    extras.isNotNull({});
    extras.isNotNull({}, "Some message");
    extras.isNotNull([]);
    extras.isNotNull([], "Some message");
    extras.isNotNull("");
    extras.isNotNull("", "Some message");
    extras.isNotNull(0);
    extras.isNotNull(0, "Some message");

    extras.isTypeOf({}, "object");
    extras.isTypeOf([], "object");
    extras.isTypeOf(function () {}, "function");
    extras.isTypeOf(1, "number");
    extras.isTypeOf("", "string");
    extras.isTypeOf(false, "boolean");
    extras.isTypeOf(null, "object");
    extras.isTypeOf(undefined, "undefined");

    extras.isNotTypeOf({}, "undefined");
    extras.isNotTypeOf({}, "function");
    extras.isNotTypeOf({}, "string");
    extras.isNotTypeOf({}, "number");
    extras.isNotTypeOf({}, "boolean");
    extras.isNotTypeOf("", "object");

    extras.isObject({});
    extras.isObject({}, "Some message");
    extras.isObject([]);
    extras.isObject([], "Some message");

    extras.isFunction(function () {});
    extras.isFunction(function () {}, "Some message");

    extras.isString("");
    extras.isString("", "Some message");

    extras.isBoolean(true);
    extras.isBoolean(true, "Some message");

    extras.isBoolean(false);
    extras.isBoolean(false, "Some message");

    extras.isNumber(42);
    extras.isNumber(42, "Some message");

    extras.isUndefined(undefined);
    extras.isUndefined(undefined, "Some message");

    extras.isNotUndefined({});
    extras.isNotUndefined({}, "Some message");
    extras.isNotUndefined([]);
    extras.isNotUndefined([], "Some message");
    extras.isNotUndefined("");
    extras.isNotUndefined("", "Some message");
    extras.isNotUndefined(0);
    extras.isNotUndefined(0, "Some message");
    extras.isNotUndefined(null);
    extras.isNotUndefined(null, "Some message");

    extras.isArray([]);
    extras.isArray([], "Some message");
    extras.isArray([1, 2, 3]);
    extras.isArray([1, 2, 3], "Some message");

    extras.isNaN("string");
    extras.isNaN("string", "Some message");
    extras.isNaN({});
    extras.isNaN({}, "Some message");
    extras.isNaN(undefined);
    extras.isNaN(undefined, "Some message");

    extras.isNotNaN(3);
    extras.isNotNaN(3, "Some message");
    extras.isNotNaN(Infinity);
    extras.isNotNaN(Infinity, "Some message");
    extras.isNotNaN("");
    extras.isNotNaN("", "Some message");
    extras.isNotNaN(null);
    extras.isNotNaN(null, "Some message");

    extras.match("String", /^Str.ng$/);
    extras.match("String", /^Str.ng$/, "Some message");

    extras.noMatch("String", /^Stl.ng$/);
    extras.noMatch("String", /^Stl.ng$/, "Some message");

    extras.isPrototypeOf(Object.prototype, {});
    extras.isPrototypeOf(Object.prototype, {}, "Some message");

    extras.isPrototypeOf(Object.prototype, function () {});
    extras.isPrototypeOf(Object.prototype, function () {}, "Some message");

    extras.isNotPrototypeOf(Array.prototype, {});
    extras.isNotPrototypeOf(Array.prototype, {}, "Some message");

    extras.isNotPrototypeOf({}, {});
    extras.isNotPrototypeOf({}, {}, "Some message");

    var object = Object.create(Object.prototype, {
        isWritable: {
            value: {},
            writable: true
        },

        isNotWritable: {
            value: {},
            writable: false
        },

        isConfigurable: {
            value: {},
            configurable: true
        },

        isNotConfigurable: {
            value: {},
            configurable: false
        },

        isEnumerable: {
            value: {},
            enumerable: true
        },

        isNotEnumerable: {
            value: {},
            enumerable: false
        }
    });

    extras.isWritable(object, "isWritable");
    extras.isNotWritable(object, "isNotWritable");
    extras.isConfigurable(object, "isConfigurable");
    extras.isNotConfigurable(object, "isNotConfigurable");
    extras.isEnumerable(object, "isEnumerable");
    extras.isNotEnumerable(object, "isNotEnumerable");
});

assert.strictEqual(extras.fail, assert.fail);
assert.strictEqual(extras.ok, assert.ok);
assert.strictEqual(extras.equal, assert.equal);
assert.strictEqual(extras.notEqual, assert.notEqual);
assert.strictEqual(extras.deepEqual, assert.deepEqual);
assert.strictEqual(extras.notDeepEqual, assert.notDeepEqual);
assert.strictEqual(extras.strictEqual, assert.strictEqual);
assert.strictEqual(extras.notStrictEqual, assert.notStrictEqual);
assert.strictEqual(extras.throws, assert.throws);
assert.strictEqual(extras.doesNotThrow, assert.doesNotThrow);

assert.throws(function () {
    extras.isTypeOf(function () {}, "object");
}, assert.AssertionError);

assert.throws(function () {
    extras.isNotTypeOf(function () {}, "function");
}, assert.AssertionError);

assert.throws(function () {
    extras.isObject(function () {});
}, assert.AssertionError);

assert.throws(function () {
    extras.isObject("");
}, assert.AssertionError);

assert.throws(function () {
    extras.isFunction({});
}, assert.AssertionError);

assert.throws(function () {
    extras.isFunction([]);
}, assert.AssertionError);

assert.throws(function () {
    extras.isString({});
}, assert.AssertionError);

assert.throws(function () {
    extras.isString(null);
}, assert.AssertionError);

assert.throws(function () {
    extras.isString(undefined);
}, assert.AssertionError);

assert.throws(function () {
    extras.isBoolean({});
}, assert.AssertionError);

assert.throws(function () {
    extras.isBoolean(null);
}, assert.AssertionError);

assert.throws(function () {
    extras.isBoolean(undefined);
}, assert.AssertionError);

assert.throws(function () {
    extras.isBoolean(0);
}, assert.AssertionError);

assert.throws(function () {
    extras.isBoolean("");
}, assert.AssertionError);

assert.throws(function () {
    extras.isNumber({});
}, assert.AssertionError);

assert.throws(function () {
    extras.isNumber(null);
}, assert.AssertionError);

assert.throws(function () {
    extras.isNumber("");
}, assert.AssertionError);

assert.throws(function () {
    extras.isUndefined({});
}, assert.AssertionError);

assert.throws(function () {
    extras.isUndefined(null);
}, assert.AssertionError);

assert.throws(function () {
    extras.isUndefined("");
}, assert.AssertionError);

assert.throws(function () {
    extras.isUndefined(0);
}, assert.AssertionError);

assert.throws(function () {
    extras.isNotUndefined(undefined);
}, assert.AssertionError);

assert.throws(function () {
    extras.isArray(undefined);
}, assert.AssertionError);

assert.throws(function () {
    extras.isArray({});
}, assert.AssertionError);

assert.throws(function () {
    extras.isArray({ length: 1, "0": 42 });
}, assert.AssertionError);

assert.throws(function () {
    extras.isNaN(3);
}, assert.AssertionError);

assert.throws(function () {
    extras.isNaN("");
}, assert.AssertionError);

assert.throws(function () {
    extras.isNaN(Infinity);
}, assert.AssertionError);

assert.throws(function () {
    extras.isNotNaN("string");
}, assert.AssertionError);

assert.throws(function () {
    extras.isNotNaN({});
}, assert.AssertionError);

assert.throws(function () {
    extras.isNotNaN([{}]);
}, assert.AssertionError);

assert.throws(function () {
    extras.match("hey", /HEY/);
}, assert.AssertionError);

assert.throws(function () {
    extras.match("", /a/);
}, assert.AssertionError);

assert.throws(function () {
    extras.match("text", /^tex$/);
}, assert.AssertionError);

assert.throws(function () {
    extras.noMatch("text", /^text$/);
}, assert.AssertionError);

assert.throws(function () {
    extras.noMatch("text", /^.*$/);
}, assert.AssertionError);

assert.throws(function () {
    extras.isPrototypeOf({}, {});
}, assert.AssertionError);

assert.throws(function () {
    extras.isPrototypeOf({}, Object.prototype);
}, assert.AssertionError);

assert.throws(function () {
    extras.isNotPrototypeOf(Object.prototype, {});
}, assert.AssertionError);

assert.throws(function () {
    extras.isNotPrototypeOf(Array.prototype, []);
}, assert.AssertionError);

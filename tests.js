// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it(`should be a defined function`, function() {
        expect(typeof helloWorld).toBe('function');
    });
    it(`should return a string when called`, function() {
        expect(typeof helloWorld()).toBe("string");
    });
    it(`should return the string "Hello, World!" when executed`, function() {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it(`should never return 'undefined' when called`, function() {
        expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function
describe('sayHello', function() {
    it(`should be a defined function`, function() {
        expect(typeof sayHello).toBe('function');
    });
    it(`should return a string when called`, function() {
        expect(typeof sayHello()).toBe('string');
    })
    it(`should return "Hello, Jane!" when passed the string "Jane"`, function () {
        expect(sayHello ("Jane")).toBe("Hello, Jane!");
    });
    it(`should return "Hello, Alex!" when passed the string "Alex"`, function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it(`should return "Hello, Pat!" when passed the string "Pat"`, function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it(`should return "Hello, World!" when passed the string "World"`, function () {
        expect(sayHello("World")).toBe("Hello, World!");
    });
});

// unit tests for the isFive function
describe('isFive', function() {
    it(`should be a defined function`, function () {
        expect(typeof isFive).toBe('function');
    });
    it(`should return a boolean no matter what the input`, function () {
        expect(typeof isFive()).toBe(`boolean`);
    });
    it(`should return true when passed the number 5`, function () {
        expect(isFive(5)).toBe(true);
    });
    it(`should return false when passed the string "5"`, function () {
        expect(isFive("5")).toBe(false);
    });
});

// unit tests for function isEven
describe('isEven', function () {
    it(`should be a defined function`, function () {
        expect(typeof isEven).toBe('function');
    });
    it(`should return a boolean no matter the input`, function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it(`should return true when executed with isEven(2)`, function () {
        expect(isEven(2)).toBe(true);
    });
    it(`should return true when executed with isEven(-4)`, function () {
        expect(isEven(-4)).toBe(true);
    });
    it(`should return false when executed with isEven(3)`, function () {
        expect(isEven(3)).toBe(false);
    });
    it(`should return false when called with isEven("banana")`, function () {
        expect(isEven("banana")).toBe(false);
    });
    it(`should return true when called with isEven("8")`, function () {
        expect(isEven("8")).toBe(true);
    });
    it(`should return false when called with isEven(Infinity)`, function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it(`should return false when called with a boolean input like isEven(true) or isEven(false)`, function () {
        expect(isEven('boolean')).toBe(false);
    });
    it(`should return false when called without an argument like isEven()`, function () {
        expect(isEven()).toBe(false);
    });
});

// unit tests for isVowel function
describe('isVowel', function () {
    it(`should be a defined function`, function () {
        expect(typeof isVowel).toBe('function');
    });
    it(`should return a boolean no matter the input`, function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it(`should return true when executed with isVowel("a")`, function () {
        expect(isVowel("a")).toBe(true);
    });
    it(`should return true when executed with isVowel("A")`, function () {
        expect(isVowel("A")).toBe(true);
    });
    it(`should return false when executed with isVowel("y")`, function () {
        expect(isVowel("y")).toBe(false);
    });
    it(`should return false when called with isVowel(4)`, function () {
        expect(isVowel(4)).toBe(false);
    });
    it(`should return false when called with isVowel(true) or isVowel(false)`, function () {
        expect(isEven('boolean')).toBe(false);
    });
    it(`should return false when called with isVowel("banana") `, function () {
        expect(isVowel("banana")).toBe(false);
    });
    it(`should return false when called without an argument like isVowel()`, function () {
        expect(isVowel()).toBe(false);
    });
});

// unit tests for add function
describe(`add`, function () {
    it(`should be a defined function`, function () {
        expect(typeof add).toBe(`function`);
    });
    it(`should returns 5 when executed as add(2, 3)`, function () {
        expect(add(2, 3)).toBe(5);
    });
    it(`should return -12 when executed as add(-3, -9)`, function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it(`add("5", 6) returns 11`, function () {
        expect(add("5", 6)).toBe(11);
    });
    it(`add("-4", "10") returns 6`, function () {
        expect(add("-4", "10")).toBe(6);
    });
    it(`add("banana", "split") returns NaN`, function () {
        expect(add("banana", "split")).toBeNaN();
    });
    it(`add(2, "apples") returns NaN`, function () {
        expect(add(2, "apples")).toBeNaN();
    });
    it(`add() returns NaN`, function () {
        expect(add()).toBeNaN();
    });
});
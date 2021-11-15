// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('valid phone number', () => {
    expect(functions.isPhoneNumber('818-643-7532')).toBe(true);
});

test('valid phone number 2', () => {
    expect(functions.isPhoneNumber('818-443-2314')).toBe(true);
});

test('invalid phone number', () => {
    expect(functions.isPhoneNumber('yeet')).toBe(false);
});

test('invalid phone number 2', () => {
    expect(functions.isPhoneNumber('ligma')).toBe(false);
});

test('valid email', () => {
    expect(functions.isEmail('khosla@ucsd.edu')).toBe(true);
});

test('valid email 2', () => {
    expect(functions.isEmail('imhungry@gmail.com')).toBe(true);
});

test('invalid email', () => {
    expect(functions.isEmail('poopityscoop.com')).toBe(false);
});

test('invalid email 2', () => {
    expect(functions.isEmail('dondathisdondathatdondaestamyfood@bofa')).toBe(false);
});

test('strong password', () => {
    expect(functions.isStrongPassword('certified')).toBe(true);
});

test('strong password 2', () => {
    expect(functions.isStrongPassword('loverboy')).toBe(true);
});

test('weak password', () => {
    expect(functions.isStrongPassword('12345')).toBe(false);
});

test('weak password 2', () => {
    expect(functions.isStrongPassword('overfifteencharactersyeahhhhhhh')).toBe(false);
});

test('valid date', () => {
    expect(functions.isDate('4/20/2001')).toBe(true);
});

test('valid date 2', () => {
    expect(functions.isDate('1/1/2000')).toBe(true);
});

test('invalid date', () => {
    expect(functions.isDate('321/23/21')).toBe(false);
});

test('invalid date 2', () => {
    expect(functions.isDate('4/20/201')).toBe(false);
});

test('valid hex color', () => {
    expect(functions.isHexColor('8f3d77')).toBe(true);
});

test('valid hex color 2', () => {
    expect(functions.isHexColor('fa1')).toBe(true);
});

test('invalid hex color', () => {
    expect(functions.isHexColor('abcd')).toBe(false);
});

test('invalid hex color 2', () => {
    expect(functions.isHexColor('32')).toBe(false);
});
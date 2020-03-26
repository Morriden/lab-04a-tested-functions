const test = QUnit.test;

function subtract(x, y) {
    return x - y;
}
/*
    In: 14, 6
    Out: 8
*/
test('subtraction function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 14;
    const y = 6;
    const expected = 8;

    //Act 
    // Call the function you're testing and set the result to a const
    const difference = subtract(x, y);
    //Assert
    // Make assertions about what is expected valid result
    // actual, expected
    assert.equal(difference, expected);
});

function add(x, y) {
    return x + y;
}

test('add function', function(assert) {
    // arrange
    const x = 14;
    const y = 6;
    const expected = 20;

    //Act
    const sum = add(x, y);

    //assert
    assert.equal(sum, expected);
});

function multiply(x, y) {
    return x * y;
}

test('multiply function', function(assert) {
    const x = 4;
    const y = 3;
    const expected = 12;
    const total = multiply(x, y);

    assert.equal(total, expected);
});

function divide(x, y) {
    return x / y;
}

test('division function', function(assert) {
    const x = 6;
    const y = 2;
    const expected = 3;
    const into = divide(x, y);

    assert.equal(into, expected);
});

test('division of 0 function', function(assert) {
    const x = 7;
    const y = 0;
    const expected = Infinity;
    const into = divide(x, y);

    assert.equal(into, expected);
});

function isEven(x) {
    if(x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

test('is it even', function(assert) {
    const x = 6;
    const expected = true;
    const isiteven = isEven(x);

    assert.equal(isiteven, expected);
});

test('is it odd', function(assert) {
    const x = 7;
    const expected = false;
    const isitodd = isEven(x);

    assert.equal(isitodd, expected);
});

function getNumbers(someNumber) {
    const myCoolArray = [];
    for(let i = 0; i < someNumber; i++) {
        const itIsEven = i % 2 === 0;
        const itIsNotZero = i !== 0;
        if(itIsEven && itIsNotZero) {
            myCoolArray.push(i);
        }
    }

    return myCoolArray;
};



test('get numbers', function(assert) {
    const someNumber = 9;
    const expected = [2, 4, 6, 8];
    const gottennum = getNumbers(someNumber);

    assert.deepEqual(gottennum, expected);
});
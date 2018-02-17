export const negate = (a) => {
    if (a == true) {
    return false;
    } else {
    return true;
    }
    // returns the opposite of the passed boolean value
    // expect(negate(true)).toBe(false)
};

export const both = (a, b) => {
    if (a && b == true) {
    // logical AND
    return true;
    } else {
    return false;
    }
    // returns true if both of the given values are true
    // expect(both(true, true)).toBe(true)
};

export const either = (a, b) => {
    if (a || b == true) {
    // logical OR
    return true;
    } else {
    return false;
    }
    // returns true if at least one of the given values are true
    // expect(either(true, true)).toBe(true)
};

export const none = (a, b) => {
    if (a || b == true) {
    // logical NOT
    return false;
    } else {
    return true;
    }
    // returns true if neither of the given values are true
    // expect(none(true, true)).toBe(false)
};

export const one = (a, b) => {
    if (a && b == true) {
    // logical NOT
    return false;
    } else if (a || b == true) {
    return true;
    } else{
    return false;
    }
    // returns true if exactly one of the given values are true
    // expect(one(true, true)).toBe(false)
};

export const truthiness = (a) => {
    return !(!a); 
};

export const isEqual = (a, b) => {
    if (a == b) {
        return true;
        } else{
        return false;
        }
    // returns whether the two values are even
    // expect(isEqual(true, false)).toBe(false)
};

export const isGreaterThan = (a, b) => {
    if (a > b) {
        return true;
        } else{
        return false;
        }
    // returns true if the first number is strictly greater than the second
    // expect(isGreaterThan(1, 2)).toBe(false)
};

export const isLessThanOrEqualTo = (a, b) => {
    if (a <= b) {
        return true;
        } else{
        return false;
        }
    // returns true if the first number is less than or equal to the second
    // expect(isLessThanOrEqualTo(1, 2)).toBe(true)
};

export const isOdd = (a) => {
    
    if (a % 2 == 0) {
    return false;
    } else{
        return true;
    }
    // returns whether the number is odd
    // expect(isOdd(5)).toBe(true)
};

//function isOdd(num) { return num % 2;}

export const isEven = (a) => {
    if (a % 2 == 0) {
        return true;
        } else{
            return false;
        }
    // returns whether the number is even
    // expect(isEven(5)).toBe(false)
};

export const isSquare = (a) => {

        for (var i = 0; i < a / 2 + 2; i++)
        {
            if (i * i == a)
            {
                return true;
            }
        }

        return false;



    // returns true if the number is a square
    // expect(isSquare(9)).toEqual(true)
};

export const startsWith = (char, string) => {
if (string.startsWith(char))
{
return true;

} else {
    return false;
}
    // returns whether the given string starts with the given character
    // expect(startsWith('a', 'aardvark')).toBe(true)
};

export const containsVowels = (string) => {
//    for (var i = 0; i < string.length; i++) {
  //      if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u")
    //    {
      //      return true;
        //}

    //}
//return false;

if(string.search(/[aeiou]/i) != -1){
    return true;
}else{
    return false;
}

    // returns whether the given string contains vowels
    // expect(containsVowels('cat')).toBe(true)
};

export const isLowerCase = (string) => {

if(string.search(/[A-Z]/) != -1)
{
    return false;
}else{
    return true;
}
    // it returns true if the given string is lowercase
    // expect(isLowerCase('abc')).toBe(true)
};



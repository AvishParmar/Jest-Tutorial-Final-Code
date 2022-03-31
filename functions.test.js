const { TestWatcher } = require('jest');
const functions = require('./functions');

//toBe: checks for an exact value for PRIMITIVE types
test("Adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
});

//not
test("Adds 2 + 2 to NOT equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

/*
    CHECK FOR TRUTHY & FALSY VALUES
    toBeNull matches only null
    toBeUndefined matches only undefined
    toBeDefined is the opposite of toBeUndefined
    toBeTruthy matches anything that an if statement treats as true 
    toBeFalsy matches anything that an if statement treats as false: 0, undefined, null, ...
*/

//toBeNull
test("Expected value is null", () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test("Expected value is Falsy", () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

//What do you think the output will be?
// test("Expected user is Avish Parmar object", () => {
//     expect(functions.createUser()).toBe({
//         firstName: "Avish", 
//         lastName: "Parmar"
//     });
// });

test("Expected user is Avish Parmar object", () => {
    expect(functions.createUser()).toEqual({
        firstName: "Avish", 
        lastName: "Parmar"
    });
});

//Less than operator

/**
 * toBeGreaterThan
 * toBeGreaterThanOrEqual
 * ...
 */
test("Expected value is less than given", () =>{
    const const1 = 900;
    const const2 = 1000;
    expect(const1+const2).toBeLessThan(2000);
});

test("Expected value is less than or equal given", () =>{
    const const1 = 1000;
    const const2 = 1000;
    expect(const1+const2).toBeLessThanOrEqual(2000);
});

//Regular Expression
test("Given string does not contain the letter A", () => {
    expect("Input").not.toMatch(/A/);
    
});

//Arrays
test("John should be in usernames", () => {
    usernames = ["Kate", "John", "Brandon"];
    expect(usernames).toContain("John");
});

//Asynchrous data -> download Axios with the command "npm install axios" or "npm i axios"

//Promise
test("Fetched user's name must match with Leanne Graham", () => {
    expect.assertions(1); //ensure that an api call does happen.
    //need to return to ensure that the test does not complete before axios response is received
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual("Leanne Graham");
        })
})

//Async Await
test("Fetched user's name must match with Leanne Graham", async() => {
    expect.assertions(1); //ensure that an api call does happen.
    //need to return to ensure that the test does not complete before axios response is received
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");
        
})

test("Expected UserId of fetched TODO is 1", async() => {
    expect.assertions(1);
    const data = await functions.fetchToDo();
    expect(data.userId).toEqual(1);
})

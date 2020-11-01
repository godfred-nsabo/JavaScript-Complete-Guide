# Objects - Common Syntax Gotchas
You learned the correct syntax for creating an object in the last lecture:

const user = {
    name: 'Max',
    age: 30
};
A couple of important things:

You use {} to "group the data" - a semicolon (;) is used after the closing }. On functions, we didn't do that. As a rule of thumb, you can keep in mind that a semicolon is used after {} if the {} are on the right side of the equal sign!

key-value pairs are separated via a comma (,), NOT via a semicolon. Using a semicolon inside of an object (i.e. between {}), would be a syntax error!

Values are assigned to keys/ properties via a colon (:), NOT via an equal sign (=). Using an equal sign inside of an object (i.e. between {}), would be a syntax error!

I.e. this would be WRONG and would throw an error:

const worstPossibleUser = {
    name = 'Max';
    age = 30;
};
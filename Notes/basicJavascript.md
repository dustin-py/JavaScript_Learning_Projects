# JavaScript Fundamentals
---
## Commenting:
- inline comment:        `//` any code bheind and on the same line will be commented out.
- multiple line comment: `/*` anything between these will be commented out `*/`

## Declaring Variables:
-  There are 3 ways to decale a variable in javascript:
    1. **var**
        - Rules of declaring variables with `var`: (**SHOULD BE AVOIDED**)
            - Somewhat similar to `let`, but not exactly.
            - Only there for legacy reasons.
            - Old way of defining variables. 
            - These variables adhere to the Global scope and are available anywere.
            - Can be redeclared but not recommended.
    2. **let** 
        - Rules of decalring variables with `let`:
            - Can Not be Redeclared, but can be reassigned/mutated.
            - Must be declared before use.
            - Can be declared as an empty variable. `let varName;`
            - Have Block Scope.
                - Varaiable declared in a Block `{}` can not be accessed outside of it.
    3. **const**
        - Rules of declaring variables with `const`:
            - Use this one as much as possible, unless you **need** to use `let`.
            - Can Not be Redeclared.
            - Can Not be Reassigned.
            - Has Block Scope.

## Naming Variables:
- The general rules for constructing names for variables (unique identifiers) are:
 - Names can contain letters, digits, underscores, and dollar signs.
 - Names must begin with a letter.
 - Names can also begin with $ and _ (but we will not use it in this tutorial).
 - Names are case sensitive (y and Y are different variables).
 - Reserved words (like JavaScript keywords) cannot be used as names.

## JavaScript KeyWords:
`abstract`    `arguments`   `await*`        `boolean`
`break`	      `byte`	    `case`	        `catch`
`char`	      `class*`	    `const`	        `continue`
`debugger`    `default`     `delete`	    `do`
`double`      `else`	    `enum*`	        `eval`
`export*`     `extends*`	`false`	        `final`
`finally`     `float`	    `for`	        `function`
`goto`	      `if`	        `implements`	`import*`
`in`	      `instanceof`  `int`	        `interface`
`let*`	      `long`	    `native`	    `new`
`null`	      `package`	    `private`	    `protected`
`public`      `return`	    `short`	        `static`
`super*`      `switch`	    `synchronized`	`this`
`throw`	      `throws`	    `transient`	    `true`
`try`	      `typeof`	    `var`	        `void`
`volatile`    `while`	    `with`	        `yield`

## Data Types:
- ### Primative Types (immutable datum represented diractly at the lowest level of the language.)
    - **Boolean**
        - represents a logical entity and can have two values: `true` and `false`.
    - **Null**
        - has exactly one value: `null`.
        - when the `typeof` oporator is called with `null` it returns object though it should return null. This is a bug left alone for legacy reasons.
    - **Undefined**
        - a variable that has not been assigned a value has the value `undefined`.
    - **Number**
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type
    - **BigInt**
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type
    - **String**
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type
    - **Symbol**
        - a **unique** and **immutable** primitive value and may be used as the key of an Object property. In some programming languages, Symbols are called "atoms".
    - **Objects**
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects

## Basic Oporators:
- Oporators allow transform values or combine multiple values.
- ### Arithmetic Operators:
    - Addition: `+`
    - Subtraction: `-`
    - Multiplication: `*`
    - Exponentiation: `**`
    - Division: `/`
    - Modulus (Division Rmainder): `%`
    - Increment: `++`
    - Decrement: `--`
- ### Assignment Operators:
    - `=` 
    - `+=` 
    - `-=` 
    - `*=`
    - `/+`
    - `%=`
    - `**=`
- ### String Operators:
    - Concatination: `+` or `+=`
    - Math with strings: example(multiply "A" 500 times) `let varName = "A"*500`
- ### Comparison Operators:
    - Equal to: `==`
    - Equal value and Equal type: `===`
    - Not Equal: `!=`
    - Not Equal value and Not Equal type: `!==`
    - Greater Than: `>`
    - Less Than: `<`
    - Greater Than or Equal to: `>=`
    - Less Than or Equal to: `<=`
    - Ternary Operator: `?`
- ### Logical Operators:
    - Logical AND: `&&`
    - Logical OR: `||`
    - Logical NOT: `!`
- ### Type Operators:
    - `typeof`: Returns the type of a variabel.
    - `instanceof`: Returns true if an object is an instance of an object type.
- ### Bitwise Operators:
    - AND: `&`
    - OR: `|`
    - NOT: `~`
    - XOR: `^`
    - Zero fill left shift: `<<`
    - Signed right shift: `>>`
    - Zero fill right shift: `>>>`
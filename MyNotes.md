# Unit Testing with Jasmine

- *To run Calculator - run /Section2-JasmineFunctions/simple-calculator.html (not /index.html)*
- *Specs/tests are run in /Section2-JasmineFunctions/spec-runner.html*

## Spec file extensions
- Commonly named like ***.spec.js** or ***.test.js**
- Specs are just tests to be run on the code
- Specs could be Typescript also
- The spec file names are based on the target file name e.g. **calculator.spec.js**
- Spec => Specifications
- Specification are like expectations as in a list of things that we expect
- Expectations are statements whih are assertions e.g. 5 + 5 = 10
- Assertions can be true or false e.g. 5+5 = 10 -vs- 5+5 = 9
- If you have a spec with all passing expectations, then it is a passing spec.
- If one or more expectations fails, then the entire spec fails
- Specs can be disabled. They will be reported as pending & not be executed.
  - Two common cases:
    - When making changes in the code
    - Test Driven Development => when specs written & the code to fulfill them is in development
  - The spec can be disabled by prepending **x** on the **it** method. Viz **it(...)** => **xit(...)**
  - Each / all specs can be disabled if desired, but that can be tedious, so you can disable the entire suite too.
  - Disabled specs are not run & do not fail, but report as "Pending"

## Suites
- Suites are a group of tests / specs 
- Gives us a way to organize the tests
- To disable an entire suite, prepend **x** on the **describe** method, viz **describe(...)** => **xdescribe(...)**
  - Disabled suites **do not** show anything like "pending," they will only be grayed out

## Matchers
- Matches are functions that run a boolean comparison between the expected & actual values
- Matchers report their results to Jasmine. Reports whether it is a passing or failing spec.
- toBe() performs a simple === (strict) comparison of the expected & actual values
- toEqual() performs a deep comparison of keys & values
- Note: {} == {} will return false, because objects are compared by reference to see if they refer to the same memory location
  - So even though they look different, they point to different memory slots & *are not* the same.
  - True for all non-primitives: Array, Date, Object, etc
- A truthy value translates to true when evaluated in a boolean context
  - E.g. !!{}, !!"asd", !!34 are all true 
- A falsey value translates to true when evaluated in a boolean context
  - E.g. !!false, !!0, !!"", !!NaN, !!null, !!undefined are all falsey
- The value **undefined** is a primitive global property that has only been declared
- A **primitive** is data that is *not* an object & has *no* methods.
- The value **null** is a special value that represents the intensional absence of any value.
- The value **NaN** is a global value for Not a number. It is not == itself or === itself, so you cannot detect it that way
- Asymmetric matchers are not equal on each side
- Creating custom matchers is possible, but not recommended due to upkeep requirements
- Third party matchers like jasmine-matchers.js are available to provide an extended suite of test options.


# Organizing Specs
To help with keeping tests organized:
- Keep specs in the same folder as the file they are testing.
- Keep the spec file names symmetric with the file they're testing: e.g. calculator.js + calculator.spec.js
- Always use describe() to create a suite of tests & *describe* what the tests are testing
- Nest suites to group tests into more focused tests

# Setup & Teardown
- Setup is the prereqs for running the tests
- Jasmine has: beforeEach() & beforeAll()
- **beforeEach()** - Executed *before each* spec in which it is called. Will be called once before each of the specs in the suite (*describe()*).
- **beforeAll()** - Executed *one time* before all the specs in a suite (*describe()*).
- Teardown is run after the specs
- Jasmine has:
- **afterEach()** - Executed *after each* spec in the suite.
- **afterAll()** - Executed *one time* after all specs in the suite.

## Note on Arrow Function & 'this'
**Using arrow functions in the 'child' methods changes their context**
**and you have to user the 'shared' parent variable implementation because**
**'this' wont be the correct scope to reference 'element'**


# Spying on Code 
- Spies are needed when there are dependencies & the dependencies, or lack of them, are causing failure reports. 
  Thus, the tests will report failure even though the code is not actually being tested. It may, or may not, be faulty.
- Spies help us to create 'test doubles' to isolate what is being tested.
  - Doubles are objects that stand in for the real objects.
  - This isolates potential failures from a dependency failure so that we know any failure was in the part actually being tested.

## Test Doubles are called Spies in Jasmine
- Can stub any function and tracks calls to it & it arguments
- Spies only exist in the describe() or it() method blocks & removed after each spec
- To share behavior with the spies you can use the before* & after* methods

## Spies have Special Matchers
- The three most common spy methods:
  - toHaveBeenCalled()
  - toHaveBeenCalledWith()
  - toHaveBeenCalledTimes()
  - 

## Automating Tests
- We remove the lib/ folder because it's not actually part of the Calculator & manual updates or the resources is not maintainable
- Instead we install jasmin-core, karma, karma-jasmine, karma-jasmine-matchers with NPM in order to automatic the discovery & running
- 










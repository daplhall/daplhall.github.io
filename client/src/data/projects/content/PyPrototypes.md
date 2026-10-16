### Description

PyPrototypes is a module that allows the user to define a prototype to enforce for an API. This can be useful when designing an API that takes a function as input. It currently supports checking the argument names of a function and their associated types.

Furthermore, it has a fixture system similar to pytest, in which you can define functions that are automatically passed into the input function if an argument name matches a fixture. Examples are provided [here](<https://github.com/daplhall/PyFuncPrototypes?tab=readme-ov-file#examples>).

**note:** I made this before i knew what pydantic was

### Goals

- To define an easy-to-use interface, such that prototypes can be created instantly and changed in response to the project's needs.
- Allow the prototype to be dynamic, such that not every defined parameter is needed in the input function.

### Why?

The strength of Python is its flexibility (coming from its dynamic typing). However, sometimes a hard structure for typing is needed, such as functions passed as arguments into algorithms.

This is needed for my project [dicechanics](https://github.com/daplhall/dicechanics), in which I want to define a strict interface for how the user should write their custom operations, while being able to give them feedback in case they make a mistake.

                        
### Example of usage
The functions input types and names are validated doing creating.

```python
from pyprototypes.prototype import Prototype


@Prototype.typed
def proto(income: int, tax: int, penalities: int):
    pass


@proto.function
def inpt_function(incm: int, tx: int, penalities: float): ...
```
Output:
```python
pyprototypes.exceptions.UnsupportedParameters: 
Error in the signature of 'inpt_function' in <path-to-file>
* Parameter 'incm' is not supported, did you mean:
        - income
* Parameter 'tx' is not supported, did you mean:
        - tax
* Wrong Type - Parameter 'penalities'
         it is 'float' it should be 'int'
```

You can then check if a function belongs to a prototype by
```python
proto.check(inpt_function)
```
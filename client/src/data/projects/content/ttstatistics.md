### Description
TTStatistics is a statistical library for boardgames, it currently includes Dicechancis which is a general statistical calculator for modelling dice mechanics. It allows the user to calculations exact probabilities on arbitrary subsets of a pool of arbitrary dice. It achieves this through a simple to use API that follows a functional paradigm as seen [here](https://daplhall.github.io/dicechanics/usage/DicechanicsPrimer.html). It does this while being equal or faster than rival libraries

The target audience are game designers of any rank
### Goals

- To provide and easy to use interface, such that one can quickly test dice configurations and mechanics
- Calculating complex dice operations should not take longer to complete than getting a cup of coffee.

### Challenges

- Finding an algorithm that allows one to effectively choose a subset of dice, from which operations are applied. To illustrate, imagine you roll 3d6 and get a sorted outcome set of [1,5,6]. You then want to sum the two highest outcomes, here 5 and 6. The problem here is that one needs to account for that one dice rolls 5 or less. Now expand this problem to any combination of possible dice and operations.

### Reflection
The library is at the moment feature complete. The interface is for the most part intuitive and easy to use. However the custom operations needs a bit more workings. For while the algorithm can take an arbitrary input, there is currently no way to set an initial/default state, which means that the function passed down needs to be written awkwardly.

The performance on the selective algorithm is quite good when considering the competition. There are still however optimization than can be done, as when selecting a small subset it still runs through every combinations, and just selects the subset. It should be possible to calculate the missing combinations and only run through selecting up to N sub dice.

I am satisfied with where the library is at, however i am far from done with it and have quite a few ideas for improvement on all fronts.
            
### Future Ideas
- Create a web app that allows someone to use the library without access to a python installation
- Reimplement the library in C, and then extend python with it. Weather or Not the binding will be written through the Python API or by the library [Pybind](https://github.com/pybind/pybind11) is not decided yet.
_There is currently no link to the repo as i am trying to make my own CI/CD pipeline, so will i mess around with that it will be pulled from the public eye._
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

### Example of usage
This first example is the simple case where you roll an amount of six-sided dice (d6) and take the highest value of outcomes
```python
import ttstatistics.dicechanics as ds

d6 = ds.d(6)
pool = 4 @ d6
print(ds.max(pool))
```
Output:
```
Die with mu - 5.24, sigma - 5.98
--------------------------------
1| 0.08%
2| 1.16%
3|## 5.02%
4|##### 13.50%
5|########### 28.47%
6|#################### 51.77%
```

This next example is quite a bit more complex:

Here we count a success on a 4+ while rolling a d6. Then if we roll a 6 we get to reroll the dice and if that is 4+ its a success. If that new dice rolls a success we roll again....

```python
import ttstatistics.dicechanics as ds


def openEnded(outcome):
    if outcome % 6 == 0:
        return outcome // 6
    elif outcome % 4 == 0:
        return 1 + outcome // 6
    elif outcome % 5 == 0:
        return 1 + outcome // 6
    else:
        return 0 + outcome // 6


d6 = ds.d(6)
exploded_d6 = d6.explode(6, depth=3)
print(ds.sum(4 @ exploded_d6.map(openEnded)))
```
Output:
```
Die with mu - 2.40, sigma - 1.37
--------------------------------
 0|#### 6.25%
 1|############## 20.83%
 2|#################### 29.51%
 3|################ 23.77%
 4|######### 12.59%
 5|### 4.95%
 6|# 1.57%
 7| 0.41%
 8| 0.09%
 9| 0.02%
10| 0.00%
11| 0.00%
12| 0.00%
13| 0.00%
14| 0.00%
15| 0.00%
16| 0.00%
```
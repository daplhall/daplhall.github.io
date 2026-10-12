### Description
This program was written for my thesis, which i worked on for a
    year doing covid lockdown. Its a post-processing dust particle
    simulation, for adding a layer of dust to already executed gas
    simulations. The background model was a prestellar core, which is a
    part of the creation of stars and planets.
### Goals

- To see if a post-processing simulation made sense to create.
- To find new knowledge about the concentration of dust when the background model has correct radiative transfer.

### Challanges
- Interpolating within a Lagrangian mesh.
- Interpolating within the time steps/snapshots of the background model.
- Depositing particles into radial cells.
- Creating a simulation from scr

### Reflection
The challenges of interpolating between moving reference points
were extremely fun and satisfying.Though there are quite a few
things that could have been improved given time.Such as weighting
the time interpolation based on the closeness to each background
snapshot.Furthermore The program is trivially parallel, which
could be a way to improve performance, which already isn't
terrible.

The biggest problem with the project lies in its scope, as the
motivation for working on it doing the Danish lockdown took quite a
hit. Furthermore, the nature of the project and its focus point,
made it quite hard to validate the data from actual
measurements.
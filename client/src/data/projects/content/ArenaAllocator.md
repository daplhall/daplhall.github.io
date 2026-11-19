# Description
An Arena Allocator is a linear allocator. That means that we have a block of memeory, and them just slice that block up into pieces and then distribute those when when the caller requests memory. 

This is quite usefull in C as it simplifies the memory allocation, as i can now just release the arena (or clear it for reuse). This results in one alloc and one free per task/lifetime.

(This project is part of a larger learning experience of a graphics project i am slowly chipping away at)

# Goals
- Make an ADT interface as the internals should not be manipulated my the user
- Abillity to Free and Clear the arena.
- Being able to make sub arenas untop of the arena for sub lifetimes.

# Challanges
- Memory management.
- Working around SegFaults, as memeory is stacked next to eachother.
- Making a snapshot system for a dynamic arena.

# Future ideas
I want to arena to use Virutal Memory Addresses such tha the adresses are bounded and reserved for the user. This means we can move the memory with realloc and then the addresses would be the same.

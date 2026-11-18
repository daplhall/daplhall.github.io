_The github link for this project is currently not public as i am still working heavily on everything. I may or may not release it in the future, but i will at somepoint add my c4 and ADRs to this description_
### Description
This project is mostly architecutal in nature. The idea is simple, i want to convert my gaming desktop into a compute note to which i can send GPU jobs. Thus i am able to experiement with computer simulations, AI or really anything i want wihtout being limited my the station on which i write.

The setup consitst of 3 computers.
- My Laptop as the work station 
- Raspberry PI 5 as an api hub 
- Desktop computer as a compute node (Also hosts gitea)

The project uses Slurm to allocated resources for jobs sent through FastAPI. FastAPI functions as the controller (slurmctld) and the desktop the compute node (slurmd). This have the conesquence that every job must go through Slurm to ensure that ressources aren't stolen.

Lastly all 3 computers use NixOS such that the entire project is more or less determinisitc and should easily be converveted to hardware.

#### How its used
When i then want to push a change, Gitea agents will begin the Ci/CD Pipeline. The Pipeline works a such
- Gitea agents sends a request through fask api with the branch and project.
- FastAPI will then allocated resources on Compute
- Compute will clone and execute the Nix flake inside and run tests.
- Compute releases resources and new jobs are picked up (if any).

When i want to experiment with agentic work i simply
- Requrest ollama serivce with FastAPI
- Compute will then allocate GPU for ollama
- The Ollama server is booted up which FastAPI reverse proxies.
- When ollama is inactive for 15 minutes, release the resources and shutdown.

When i want to run a project (Not CI/CD) we do pretty much the same as CI/CD but run the program instead.



### Challanges
- Setting up Slurm
- Defining good APIs for usage from desktop
- Create an interface or CLI to communicate with FastAPI
- Setup NixOS on a raspberry pi

### Reflection
Using my vacation on setting up NixOS and Slurm, makes me really exited for the future of this project. I can soon create CI/CD pipelines in which the endpoint is just my github. Everything will run on my hardware meaning i dont send information outside my ownhome except on a github update. It furthere was a good exercise in leanring Architecutre of larger computational systems.

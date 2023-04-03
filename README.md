### Prerequisites

 - [Recommended IDE (Visual Studio
   Code)](https://code.visualstudio.com/)
 - [Node.js (v14.16.0)](https://nodejs.org/en/)
 - [Yarn](https://yarnpkg.com)

### Launching the project

! important ! install the server first

[https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

-   Fork the repository
-   Clone it on your computer.
-   The  `yarn`  command will allow you to install the dependencies.
-   The  `yarn dev`  command will allow you to run the micro API.

## BACK-END (**with Docker**)

### Prerequisites

-   [Docker Desktop](https://www.docker.com/products/docker-desktop)

### Starting the project

-   The  `docker image build --no-cache -t micro-api .`  command will allow you to build your image.
-   The  `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn`  command will allow you to create your Docker container and run your image on port 3000.
-   The  `docker container stop micro-api`  command will allow you to stop your micro-api.
-   The  `docker container rm micro-api`  command will allow you to delete your micro-api container.


## FRONT-END

clone the repository of SportSee front-end:

`git clone git@github.com:Aurelio-One/p12.git`

Inside this front-end repository, install dependencies using  `npm install`

Launch front-end on port 3001:

`npm start`

Front-end is now rendered at URL  `http://localhost:3001`.





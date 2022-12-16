project name: mern-hospital-app

This project is going to be able to recieve Name, and show an output about there iThe purpose of this application is to create and store patient information pertaining to their name, date of birth, insurance provider, patient identification number and if they have been discharged. This will be useful in terms of holding details for patients. The information for every patient can be updated and deleted for modification purposes. The information will be displayed on a card component, having a home webpage, a webpage to create a patient, & a webpage page to display the patient information. Updating of patient information or deleting of a patient will done on the card component. nformation

BACKEND:

Install backend Dependencies:

nodemon = Nodemon is a popular tool that is used for the development of applications based on node. js. It simply restarts the node application whenever it observes the changes in the file present in the working directory of your project

mongoose = Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment

express = Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. I

cors = Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.

command: npm install mongoose cors express nodemon
![Back End Dependencies](back%20-%20dependencies.jpg)
Create NODE Server to utilize controllers and routes for CRUD operations for URL

test url

usage of post
![URL - POST](back%20-%20post.jpg)

Usage of get
![URL - GET](back-%20get.jpg)

Usage of update
![URL - UPDATE](back-%20update.jpg)

Usage of delete
![URL - DELETE](back-delete.jpg)

FRONT END:

Install frontend dependencies:
create-react-app= an outline to have your coding onto a website
command: npx create-react-app .

react-router-dom@6= is a library for react
command: npm install react-router-dom@6

Axios= it is used to make http requests from node
command: npm install axios

@mui/material @emotion/react @emotion/styled= Addtional library for react
command: npm install @mui/material @emotion/react @emotion/styled

@mui/icons-material @mui/material @emotion/styled @emotion/react= Addtional library for react
command: npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

install and start react server, clear all default react

HomePage placed button that will take you to home page
![Home Page](front%20home.jpg)

AddPatient Page page for user to add addtional patients
![Add Patient](add%20patient.jpg)

PatientInformation Page page that displays patient information
![Patient Info](front%20-%20patient%20info.jpg)

AboutMernHealth Page page that displays information about the webpage
![About page](front-%20about.jpg)
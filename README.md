### Introduction
A Heroku app version of this project is deployed at: https://simple-app-pedrogdf.herokuapp.com
API at: https://simple-app-pedrogdf.herokuapp.com/swagger-ui

This application will run npm on the simple-ionic project generating
the static Angular/Ionic pages in simpleRestful resource folder.

After this is done simpleRestful will be started.

This project is to make it easier to integrate Angular+Springboot 
in a single server but it is not ideal for production.

Development should still run each project on its own.

### Run
This application was built on Maven and SpringBoot.  
Use Maven to compile and run the application.  
Here is an example:

o Run using Maven.
It will create a server on the Port 8080.

	$./mvnw spring-boot:run



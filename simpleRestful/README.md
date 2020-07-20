### Compile, test and run
This application was built on Maven and SpringBoot.  
Use Maven to compile and run the application.  
Here is an example:

To Compile using Maven.

	$./mvnw compile

To Run using Maven.
It will create a server on the Port 8080.

	$./mvnw spring-boot:run

To run the tests.

	$./mvnw test

### Swagger

Swagger: http://localhost:8080/v2/api-docs


### The Database can be accessed via browser
```
http://localhost:8080/h2-console

JDBC URL: jdbc:h2:mem:simpleappdb
User Name: sa
Password: password

```

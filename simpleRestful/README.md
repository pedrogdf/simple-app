## AVENUE CODE API

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

### Use the API

### /product
### GET
Will return a JSON list of Products with the following syntax:
```json
[
  {
    "id": 1,
    "name": "fdsaf",
    "description": "Buy",
    "idProdutoPai": null,
    "imagens": [
      {
        "id": 1,
        "type": "jpg",
        "idProduct": 1
      },
      {
        "id": 2,
        "type": "png",
        "idProduct": 1
      }
    ]
  }
]
```

###POST
Expects the following format.
If an Id was not provided the product will be created, otherwise it will be updated with the current values.
```json
{
    "id": 1,
    "name": "fdsaf",
    "description": "Buy",
    "idProdutoPai": null,
    "imagens": [
      {
        "id": 1,
        "type": "jpg",
        "idProduct": 1
      },
      {
        "id": 2,
        "type": "png",
        "idProduct": 1
      }
    ]
  }
```

###/product/{productId}
###GET
Will return a JSON Products with the following syntax:
```json
  {
    "id": 1,
    "name": "fdsaf",
    "description": "Buy",
    "idProdutoPai": null,
    "imagens": [
      {
        "id": 1,
        "type": "jpg",
        "idProduct": 1
      },
      {
        "id": 2,
        "type": "png",
        "idProduct": 1
      }
    ]
  }
```
  
###DELETE
Will delete the product with the id provided

###/product/only
###GET
Will return a List of Products without its relations with the following syntax:
```json
[
  {
    "id": 1,
    "name": "fdsaf",
    "description": "Buy"
  }
]
```

###/product/only/{productId}
###GET
Will return a Products without its relations with the following syntax:
```json
{
  "id": 1,
  "name": "fdsaf",
  "description": "Buy"
}
```

###/product/relation/children
###GET
Will return a List of Products without its relations with the following syntax:
```json
[
  {
    "id": 2,
    "name": "fdsaf",
    "description": "Buy",
    "productChildrenList": [
      {
        "id": 3,
        "name": "nome",
        "description": "ewe",
        "productChildrenList": []
      }
    ]
  },
  {
    "id": 3,
    "name": "nome",
    "description": "ewe",
    "productChildrenList": []
  }
]
```

###/product/relation/children/{productId}
###GET
Will return a Products without its relations with the following syntax:
```json
{
  "id": 2,
  "name": "fdsaf",
  "description": "Buy",
  "productChildrenList": [
    {
      "id": 3,
      "name": "nome",
      "description": "ewe",
      "productChildrenList": []
    }
  ]
}
```

###/image/product/{productId}
###GET
Will return a list of Images related to the Product ID wit the following format:
```json
[
  {
    "id": 4,
    "type": "png",
    "idProduct": 2
  },
  {
    "id": 3,
    "type": "jpg",
    "idProduct": 2
  }
]
```


### The Database can be accessed via browser
```
http://localhost:8080/h2-console

JDBC URL: jdbc:h2:mem:AVENUE
User Name: sa

```

# Schema

## bpi-request-get-or-delete-no-body-oas3

When designing a **GET** or **DELETE** verbs it must **NOT CONTAIN** the body in the request.

The figure below shows where the body is but in the case of get and delete it will not be created. The idea of the image is just to show where it is.

![bpi-request-get-or-delete-no-body-oas3](https://raw.github.com/bancobpi/style-guide/master/static/bpi-request-get-or-delete-no-body-oas3.jpg)

## bpi-resource-path-depth-max-two

A path must have a maximum of two resources in depth to keep the APIs easier to call. Having more than two resources in depth could bring more validation issues with few benefits.

Below we have two examples, one bad and one good

Path | Obs 
---------|----------|
 /weather-forecasts/{id}/location/{id} | Bad Example 
 /weather-forecasts/{id}/location | Good Example 

## bpi-not-allowed-verbs

At this moment it is only possible to use verbs [get, put, post or delete]. If a different verb is used, an error message will be generated.

## bpi-id-in-verbs

In order to simplify and standardize the id within the path, we decided that it would always be called id and we know that it is always a "child" of the resource to its left. In the case below, for example, the id is part of the weather forecasts.

Path | Obs 
---------|----------|
 /weather-forecasts/{idWeather}/location | Bad Example 
 /weather-forecasts/{id}/location | Good Example 

## bpi-validate-ref-verbs

When designing the paths, we only accept the following http codes [200,201,202,206,400,404,409,500] and every response using these http codes must be a reference to a previously created resource. That is, it will always be a reference.

![bpi-validate-ref-verbs](https://raw.github.com/bancobpi/style-guide/master/static/bpi-validate-ref-verbs.jpg)

## bpi-resource-id-kind

To maintain a standard design for our APIs, it is important to always include the following two attributes (that should be read-only):
- id: should represent the resource's unique identification, with the maximum length defined and a correct example. 
- kind: should represent the resource's full name, with the maximum length defined and a correct example.

Both should be of type string or a reference to a canonical type.

Consider the following example:

![bpi-resource-id-kind](https://raw.github.com/bancobpi/style-guide/master/static/bpi-resource-id-kind.png)

## bpi-boolean-validate

One should try to avoid the boolean type. Most boolean attributes could become an enumerator.

Example:

Field | Type | Values | Obs
---------|----------|---------|---------
 statusInactive | boolean | true or false | BAD example
 status | enumeration | active, inactive, suspended | GOOD example

## bpi-validate-string-type-different-string

Attributes that contain the word "type" must be of type string.

If not, attributes with the word "type" will have values with no clear meaning, like for example a number.

Example:

Attribute | Type | Values | Obs
---------|----------|---------|---------
 storeType | number | 1,2,3,4 | BAD example
 storeType | enum | small,medium,large,extra_large | GOOD example

 With the example above it is clear that the good example is much more user friendly and self-explanatory.

## bpi-validate-string-id-different-string

Attributes that ends with the word "id" must be of type string. Usually this kind of attribute is of type string because it allows for a greater range of values. You can enter only values or only words or a mix of both.

Example:

Attribute | Type | Values | Obs
---------|----------|---------|---------
 storeId | number | 1 | BAD example
 storeId | string | "1" | GOOD example
 storeId | string | AC245 | GOOD example

## bpi-validate-allowed-paths

The paths allowed are: 

***WithId** - When the verb has an id in the middle of the path; <br>
***ById** - When the verb has id at the end of the path;

Verb           | Path Example
---------------|----------
 get           | /stores
 getWithId     | /stores/{id}/accounting-days
 getById       | /accounting-days/{id}
 getAsyncId    | /async/employee-accounts/{id}
 post          | /stores
 postWithId    | /stores/{id}/accounting-days 
 postForSearch | /search-transactions
 postAsync     | /async/employee-accounts
 put           | /products/{id}
 delete        | /accounting-days/{id}

## bpi-deprecated-link-self-body

The type "link-self-body" is currently deprecated and MUST not be used.

![bpi-link-self-body-deprecated](https://raw.github.com/bancobpi/style-guide/main/static/bpi-link-self-body-deprecated.png)

A new object should be created, containing another object called "_links" with a "self" property refering the "link-body" component.

![bpi-link-self-body-new](https://raw.github.com/bancobpi/style-guide/main/static/bpi-link-self-body-new.png)

```yaml
- type: object
    x-stoplight:
      id: yfu5ku09bqko0
    properties:
      _links:
        type: object
        x-stoplight:
          id: ld50wbmyhqvjr
        properties:
          self:
            $ref: 'https://stoplight.io/api/v1/projects/bancobpi/commons-api-definitions/nodes/models/link-body.yaml?mid=3491'
            x-stoplight:
              id: 9fey8fp7shaj3
```

## bpi-audience-validate

In order to define the intended target audience of the API, the attribute "x-fast-audience" must be defined in the info section as it follows:

![bpi-audience-validate](https://raw.github.com/bancobpi/style-guide/main/static/bpi-audience-validate.png)

## bpi-security-scheme-validate

To limit an application's access to a user's account, it is necessary to define scopes. Scopes are defined in the security schema section. FAST has a pre-defined security schema that is defined as it follows and that should be included under the components section:

```
securitySchemes:
  bpiOAuth2:
    type: oauth2
    flows:
      clientCredentials:
        tokenUrl: /oauth2/token
        refreshUrl: ''
        scopes:
          petstore.consult: consult access to pet information
          petstore.create: create access to pet information
      authorizationCode:
        authorizationUrl: /oauth2/authorize
        tokenUrl: /oauth2/token
        refreshUrl: ''
        scopes:
          petstore.consult: consult access to pet information
          petstore.create: create access to pet information
```

![security-schemes-stoplight](https://raw.github.com/bancobpi/style-guide/main/static/security-schemes-stoplight.png)

## bpi-security-individual-operations

Each operation must reference the created security schema to apply the corresponding scope as it follows:

```
paths:
  /pets:
    get:
      summary: Get a pet
      operationId: get-pets
      security:
        - bpiOAuth2:
            - petstore.consult
    post:
      summary: Add a new pet
      operationId: post-pets
      security:
        - bpiOAuth2:
            - petstore.create
```

![scopes-stoplight](https://raw.github.com/bancobpi/style-guide/main/static/scopes-stoplight.png)

## bpi-enum-type-validation

Every enum attribute must have its type defined. Currently, when defining an enum, Stoplight is not automatically defining the type, so it has to be done manually via the Code view, instead of the Form view. It should be done as it follows:

![bpi-enum-type-validation](https://raw.github.com/bancobpi/style-guide/main/static/bpi-enum-type-validation.png)

## bpi-validate-api-extensions

This rule ensures that the defined API contains the mandatory extensions needed in order to describe the necessary additional information of the API:
- x-fast-api-metadata
- x-domains-metadata

![bpi-validate-api-extensions](https://raw.github.com/bancobpi/style-guide/main/static/bpi-enum-type-validation.png)
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

## bpi-resource-common-body

To maintain a standard design for our APIs, there are two main type of resources to reference. The ones at the top left are the global ones, and the ones at the bottom left are the pagination ones. All global resources must be an allOf and the first object be the reference to designLibrary/common-body

![bpi-resource-common-body](https://raw.github.com/bancobpi/style-guide/master/static/bpi-resource-common-body.jpg)

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

Attributes that contain the word "id" must be of type string. Usually this kind of attribute is of type string because it allows for a greater range of values. You can enter only values or only words or a mix of both.

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

Verb        | Path Example
---------   |----------
 get        | /stores
 getWithId  | /stores/{id}/accounting-days
 getById    | /accounting-days/{id}
 post       | /stores
 postWithId | /stores/{id}/accounting-days 
 put        | /products/{id}
 delete     | /accounting-days/{id}


# Fill Rules Specification

## bpi-resource-attributes-description 

All attributes SHOULD have a description even if it is summarized. 

Descriptions are intended to give more context to the attribute, making the API more intuitive and user-friendly.

**Exception:** object types.

![image.png](https://stoplight.io/api/v1/projects/cHJqOjEyNTMyNw/images/NYHJ6WgE0pM)

## bpi-resource-attributes-examples

All attributes SHOULD have a example if the type is string, integer or number.

When we put the real examples and use the mocks, we can get a real view of the API we are designing.

Descriptions are intended to give more context to the attribute, making the API more intuitive and user-friendly.

![image.png](https://stoplight.io/api/v1/projects/cHJqOjEyNTMyNw/images/3d2vL21HQAE)

## bpi-validate-content-in-response-body

Currently we only allow http codes [200,201,202,206,400,404,409,500]. When these codes are mapped, they must contain description and content.

![02.png](https://stoplight.io/api/v1/projects/cHJqOjEyNTMyNw/images/jkiAEjyZqv4)

## bpi-query-parameters-pagination

In the case of Lists, it is necessary that there always exist queryParameters, even if only the paging ones.

To support pagination, these two attributes are needed in the queryParameters.

![image.png](https://stoplight.io/api/v1/projects/cHJqOjEyNTMyNw/images/xApnhCXRiHY)

## bpi-validate-operation-id

We decided to create a pattern for the operationId. To ensure this pattern, we create a javascript function that returns the value to be filled.

![image.png](https://stoplight.io/api/v1/projects/cHJqOjEyNTMyNw/images/aHkCwc4CWsg)

## bpi-resource-attributes-max-lenght

Due to some restrictions, we decided that all strings must have maxLenght.

![image.png](https://stoplight.io/api/v1/projects/cHJqOjEyNTMyNw/images/c4yAeG2yWm4)

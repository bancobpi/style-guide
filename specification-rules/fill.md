# Fill Rules Specification

## bpi-resource-attributes-description

All attributes SHOULD have a description even if it is summarized. 

Descriptions are intended to give more context to the attribute, making the API more intuitive and user-friendly.

**Exception:** object types.

![bpi-resource-attributes-description](https://raw.github.com/bancobpi/style-guide/master/static/bpi-resource-attributes-description.jpg)

## bpi-resource-attributes-examples

All attributes SHOULD have a example if the type is string, integer or number.

When we put the real examples and use the mocks, we can get a real view of the API we are designing.

Descriptions are intended to give more context to the attribute, making the API more intuitive and user-friendly.

![bpi-resource-attributes-examples](https://raw.github.com/bancobpi/style-guide/master/static/bpi-resource-attributes-examples.jpg)

## bpi-validate-content-in-response-body

Currently we only allow http codes [200,201,202,206,400,404,409,500]. When these codes are mapped, they must contain description and content.

![bpi-validate-content-in-response-body](https://raw.github.com/bancobpi/style-guide/master/static/bpi-validate-content-in-response-body.jpg)

## bpi-query-parameters-pagination

In the case of Lists, it is necessary that there always exist queryParameters, even if only the paging ones.

To support pagination, these two attributes are needed in the queryParameters.

![bpi-query-parameters-pagination](https://raw.github.com/bancobpi/style-guide/master/static/bpi-query-parameters-pagination.jpg)

## bpi-validate-operation-id

We decided to create a pattern for the operationId. To ensure this pattern, we create a javascript function that returns the value to be filled.

![bpi-validate-operation-id](https://raw.github.com/bancobpi/style-guide/master/static/bpi-validate-operation-id.jpg)

## bpi-resource-attributes-max-lenght

Due to some restrictions, we decided that all strings must have maxLenght.

![bpi-resource-attributes-max-lenght](https://raw.github.com/bancobpi/style-guide/master/static/bpi-resource-attributes-max-lenght.jpg)

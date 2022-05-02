# Fill

## bpi-resource-attributes-description

All attributes SHOULD have a description even if it is summarized. 

Descriptions are intended to give more context to the attribute, making the API more intuitive and user-friendly.

**Exception:** object types.

![bpi-resource-attributes-description](https://raw.github.com/bancobpi/style-guide/main/static/bpi-resource-attributes-description.jpg)

## bpi-resource-attributes-examples

All attributes SHOULD have a example if the type is string, integer or number.

When we put the real examples and use the mocks, we can get a real view of the API we are designing.

![bpi-resource-attributes-examples](https://raw.github.com/bancobpi/style-guide/main/static/bpi-resource-attributes-examples.jpg)

## bpi-validate-content-in-response-body

Currently we only allow http codes [200,201,202,206,400,404,409,500]. When these codes are mapped, they must contain description and content.

![bpi-validate-content-in-response-body](https://raw.github.com/bancobpi/style-guide/main/static/bpi-validate-content-in-response-body.jpg)

## bpi-query-parameters-pagination

In the case of Lists, it is necessary that there always exist queryParameters, even if only the paging ones.

To support pagination, these two attributes are needed in the queryParameters.

![bpi-query-parameters-pagination](https://raw.github.com/bancobpi/style-guide/main/static/bpi-query-parameters-pagination.jpg)

## bpi-validate-operation-id

Each operation must have an operationId that is its path, with - instead of / and starting with the verb. This operationId is important for internal processes

![bpi-validate-operation-id](https://raw.github.com/bancobpi/style-guide/main/static/bpi-validate-operation-id.jpg)

## bpi-resource-attributes-max-lenght

In order to limit the size of the payload, every string attribute and format other than date, time, date-time and enumeration, must have a max length validation.

![bpi-resource-attributes-max-lenght](https://raw.github.com/bancobpi/style-guide/main/static/bpi-resource-attributes-max-lenght.jpg)

## bpi-enumeration-attributes-size

To bring a better description of the attributes, suggesting that it has more than one character. Preferably it is a description and not just numbers.

BAD Example | GOOD Example
---------|----------
 ![BadExampleEnum.jpg](https://stoplight.io/api/v1/projects/cHJqOjY2NDEz/images/RXgN6QEsKxg)  | ![GoodExampleEnum.jpg](https://stoplight.io/api/v1/projects/cHJqOjY2NDEz/images/oPZ9mpg8wes) 

## bpi-validate-exception-word-flag

The word FLAG should be avoided in the composition of attributes. This and other words can end up indicating something that is not.

Example: 

Attribute:irsExemptionFlag <br>
Type: Enumeration <br>

The word **FLAG** gives a boolean indication and not an enum, as is the attribute type.






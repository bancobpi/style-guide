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

Each operation must have an operationId that is its path, with - instead of / and starting with the verb. This operationId is important for internal processes. This rule also ensures that the combination of this operationId with the securityId is less than or equal to 43 characters.

![bpi-validate-operation-id](https://raw.github.com/bancobpi/style-guide/main/static/bpi-validate-operation-id.jpg)

## bpi-resource-attributes-max-length

In order to limit the size of the payload, every string attribute (without format defined), must have a max length validation.

![bpi-resource-attributes-max-length](https://raw.github.com/bancobpi/style-guide/main/static/bpi-resource-attributes-max-length.jpg)

## bpi-enumeration-attributes-size

Enumerators should be clear about its meaning. This rule validates that it has more than one character. Preferably it is a description and not just numbers.

BAD Example | GOOD Example
---------|----------
 ![BadExampleEnum.jpg](https://stoplight.io/api/v1/projects/cHJqOjY2NDEz/images/RXgN6QEsKxg)  | ![GoodExampleEnum.jpg](https://stoplight.io/api/v1/projects/cHJqOjY2NDEz/images/oPZ9mpg8wes) 

## bpi-validate-exception-word-flag

The word FLAG should be avoided in the composition of attributes. This, and other words, can end up indicating something that is not.

Example: 

Attribute:irsExemptionFlag <br>
Type: Enumeration <br>

The word **FLAG** gives the idea of a boolean and not an enumerator as in the example above.

## bpi-path-parameter-example

All path parameters SHOULD have an example that is not an empty string.

When we include a real anonymous example for the path parameter, we can get a real view of what information the path parameter should contain, clarifying on how to call the API.

![bpi-path-parameter-example](https://raw.github.com/bancobpi/style-guide/main/static/bpi-path-parameter-example.png)

## bpi-query-parameter-example

All query parameters SHOULD have an example that is not an empty string.

When we include a real anonymous example for the query parameter, we can get a real view of what information the query parameter should contain, clarifying on how to call the API.

![bpi-query-parameter-example](https://raw.github.com/bancobpi/style-guide/main/static/bpi-query-parameter-example.png)

## bpi-resource-attributes-format-max-length

When creating an attribute of type string (with format defined different than uri), the field maxLength must not be filled, because it will throw an error on the code generator.

![bpi-resource-attributes-enum-max-length](https://raw.github.com/bancobpi/style-guide/main/static/bpi-resource-attributes-enum-max-length.png)

## bpi-attribute-name-id-suggestion

When creating an attribute that starts with the keyword id, the rule will suggest to use the keyword Id at the end of the name of the attribute, to be compliant with the defined rules.

![bpi-attribute-name-id-suggestion](https://raw.github.com/bancobpi/style-guide/main/static/bpi-attribute-name-id-suggestion.png)

## bpi-audience-possible-values

In order to define the intended target audience of the API, the attribute "x-fast-audience" must be defined in the info section as it follows:

![bpi-audience-validate](https://raw.github.com/bancobpi/style-guide/main/static/bpi-audience-validate.png)

x-fast-audience attribute must be filled based on this set of possible values:

![bpi-audience-possible-values](https://raw.github.com/bancobpi/style-guide/main/static/bpi-audience-possible-values.png)

## bpi-resource-title-length

The title of each resource defined under the components or models folder must be less than or equal to 50 characters.

## bpi-security-id-length

The securityId field defined in the x-fast-api-metadata extension must be less than or equal to 20 characters.

![bpi-security-id-length](https://raw.github.com/bancobpi/style-guide/main/static/bpi-audience-possible-values.png)

## bpi-validate-scopes

This rule ensures that the created scopes under the securitySchemes component is compliant with the following rules:
- It follows the defined naming convention: <securityId>.<access-mode>
- Ensures that <securityId>.<access-mode> is less than or equal to 43 characters.
- Validates that <securityId> is equal to the one defined in the x-fast-api-metadata extension.
- Guarantees that <access-mode> is compliant with the following regex: /^[a-zA-Z0-9]+$/
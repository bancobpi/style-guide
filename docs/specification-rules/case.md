# Case

We will basically use three types of styles: camelCase, snake_case and kebab-case.

## camelCase 
Camel case combines words by capitalizing all words following the first word and removing the space, example:
Raw: Accounting Days, Customer Address, Customer Contacts.
Camel Case: accountingDays, customerAddress, customerContacts.

## snake_case
Snake case combines words by replacing each space with an underscore (_) and, in the all caps version, all letters are capitalized, example:
Raw: Accounting Days, Customer Address, Customer Contacts.
Snake Case: accounting_days, customer_address, customer_contacts.

## kebab-case
Kebab case combines words by replacing each space with a dash (-), example:
Raw: Accounting Days, Customer Address, Customer Contacts.
Kebab Case: accounting-days, customer-address, customer-contacts.

## bpi-resource-name-kebab-case

In OpenAPI terms, a Path is an endpoint of a REST API that you can call and operations are the HTTP methods used to manipulate these paths, such as GET, PUT, POST or DELETE.

The kebab case approach became popular in Web URIs because search engines knew that the hyphen meant separate words and could index the URI properly.

It is recommended to use the kebab-case (which is highlighted by RFC3986), this case is used by Google, PayPal, and other big companies.

![bpi-kebab-case-resource-name](https://raw.github.com/bancobpi/style-guide/main/static/bpi-resource-name-kebab-case.jpg)

## bpi-resources-kebab-case

We adopted the kebab-case pattern to be between the resource and the path, since for the path it is more common to use kebab-case because it is the composition of the API endpoint.

It is recommended to use the kebab-case (which is highlighted by RFC3986), this case is used by Google, PayPal, and other big companies.

![bpi-resources-kebab-case](https://raw.github.com/bancobpi/style-guide/main/static/bpi-resources-kebab-case.jpg)

## bpi-resource-attributes-camel-case

We adopted the standard used by [Google](https://google.github.io/styleguide/jsoncstyleguide.xml?showone=Property_Name_Format#Property_Name_Format) which says that the attributes must be in camelCase.

"_links" attribute is the exception at BPI.

![bpi-resource-attributes-camel-case](https://raw.github.com/bancobpi/style-guide/main/static/bpi-resource-attributes-camel-case.jpg)

## bpi-parameters-camel-case

Following the same pattern of the attributes, we decided that the parameters must be in camelCase.

![bpi-parameters-camel-case](https://raw.github.com/bancobpi/style-guide/main/static/bpi-parameters-camel-case.jpg)

## bpi-enum-snake-case

Following what seems to be one of the main standards, enumeration entries must be in snake_case

![bpi-enum-snake-case](https://raw.github.com/bancobpi/style-guide/main/static/bpi-enum-snake-case.jpg)
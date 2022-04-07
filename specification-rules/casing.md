# Casing Rules Specification

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

## bpi-kebab-case-resource-name

In OpenAPI terms, a Path is a endpoint of a REST API that you can call and operations are the HTTP methods used to manipulate these paths, such as GET, PUT, POST or DELETE.

The kebab case approach became popular in Web URIs because search engines knew that the hyphen meant separate words and could index the URI properly.

It is recommended to use the kebab-case (which is highlighted by RFC3986), this case is used by Google, PayPal, and other big companies.

![image.png](https://stoplight.io/api/v1/projects/cHJqOjEyNTMyNw/images/MqVZZke6TaI)

## bpi-resources-kebab-case

We adopted the kebab-case pattern to be between the resource and the path, since for the path it is more common to use kebab-case because it is the composition of the API endpoint.

It is recommended to use the kebab-case (which is highlighted by RFC3986), this case is used by Google, PayPal, and other big companies.

![image.png](https://stoplight.io/api/v1/projects/cHJqOjEyNTMyNw/images/N8p5jhreO8Y)

## bpi-resource-attributes-camel-case

We adopted the standard used by [Google](https://google.github.io/styleguide/jsoncstyleguide.xml?showone=Property_Name_Format#Property_Name_Format) which says that the attributes must be in camelCase.

"_links" attribute is the exception at BPI.

![image.png](https://stoplight.io/api/v1/projects/cHJqOjEyNTMyNw/images/sPnCPs8wQf8)

## bpi-parameters-camel-case

Following the same pattern of the attributes, we decided that the parameters followed as camelCase.

![image.png](https://stoplight.io/api/v1/projects/cHJqOjEyNTMyNw/images/xApnhCXRiHY)

## bpi-enum-snake-case

With enumerations, we had some doubts because there are several different approaches. And in our case after doing a research we decided as snake-case.

![Untitled.png](https://stoplight.io/api/v1/projects/cHJqOjEyNTMyNw/images/OUl4Z1Ba1o8)
# sphere-json-schemas

[![Build Status](https://travis-ci.org/hajoeichler/sphere-json-schemas.svg?branch=master)](https://travis-ci.org/hajoeichler/sphere-json-schemas)

This repository contains a set of [JSON schemas](http://json-schema.org/) used as standard data format for importing and updating your ecommerce data in your SPHERE.IO project. Find these schemas in the `schema` directory.

Further this repository contains for each schema a bunch of example files for easier understanding of the desired format. The examples are located in the folder `examples/<schema-type>`.

Last but not least there is a small automation script that ensures that the provided examples are validated against their corresponding schema.
To run those validation, please ensure you have nodejs installed (version 0.10 or above). Then simply run:
```
npm install
npm test
```

### Feedback during processing

We are providing those JSON schemas in order to use stream processing while talking to the SPHERE.IO API. Thus, we don't know what the actuall amount of the data is which we process. In order to provide feedback during processing about the current status, we recommend to fill the `total` with the right number. We assume that the value is equal to the length of the array.

```JavaScript
{
  "total": 3
  "categories": [
    { ... },
    { ... },
    { ... }
  ]
}
```

### Minimum required values vs API requirements

Some proprties defined in the JSON schema are optional whereas the same property in the API is required. One example is the `slug` of categories. If the `slug` isn't provided the importer will generate a slug using a `slugify` method while ensuring that all slugs will be unique.

On the other hand, the `sku` of variants is required in the JSON schema. The `sku` is a crutial identifier to link a variant to its inventory as well as pricing information.
# sphere-json-schemas

[![Build Status](https://travis-ci.org/hajoeichler/sphere-impex-json-schemas.svg?branch=master)](https://travis-ci.org/hajoeichler/sphere-impex-json-schemas)

This repository contains a set of [JSON schemas](http://json-schema.org/) used as standard data format for importing and updating your ecommerce data in your SPHERE.IO project.

Further this repository contains for each schema a bunch of example files for easier understanding of the desired format.

Last but not least there is a small automation script that ensures that the provided examples are validated against their corresponding schema.
To run those validation, please ensure to have nodejs installed (version 0.10 or above). Then simply do:
```
npm install
npm test
```

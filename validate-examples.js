var fs = require('fs');
var Validator = require('jsonschema').Validator;
var val = new Validator();
var currentDir = __dirname;

var types = fs.readdirSync(currentDir + '/examples');

// TODO: add verbose / quite options
for (var i = 0; i < types.length; i++) {
  type = types[i];
  // read schema definition
  var schemaFileName = currentDir + '/schema/' + type + '.schema.json';
  console.log('Reading schema: ' + schemaFileName);
  var schema = require('' + schemaFileName);

  // read examples related to current schema
  var targetDir = currentDir + '/examples/' + type;
  var examples = fs.readdirSync(targetDir);
  if (!examples) {
    console.warn('No files found in directory: ' + targetDir);
  }
  for (var j = 0; j < examples.length; j++) {
    var exampleFileName = currentDir + '/examples/' + type + '/' + examples[j];
    console.log('Reading example: ' + exampleFileName);
    var example = require('' + exampleFileName);

    // validate example against schema
    result = val.validate(example, schema);
    if (result.errors.length > 0) {
      console.error('Validation FAILED: ', result.errors);
      process.exit(1);
    } else {
      console.log('Ok');
    }
  }
}

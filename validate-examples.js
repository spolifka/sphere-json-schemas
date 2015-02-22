var fs = require('fs');
var Validator = require('jsonschema').Validator;

var val = new Validator();
var instance = 4;

types = fs.readdirSync('examples');

for (i = 0; i < types.length; i++) {
  type = types[i];
  examples = fs.readdirSync('examples/' + type);

  schemaFile = 'schema/' + type + '.schema.json';
  console.log('Reading schema: ' + schemaFile);
  s = fs.readFileSync(schemaFile).toString();
  console.log('Parsing schema: ', s);
  schema = JSON.parse(s);

  for (j = 0; j < examples.length; j++) {
  	exampleFile = 'examples/' + type + '/' + examples[j];
  	console.log('Reading example: ' + exampleFile);
    e = fs.readFileSync(exampleFile).toString();
    console.log('Parsing example: ', e);
    example = JSON.parse(e);

    result = val.validate(example, schema);
    if (result.errors.length > 0) {
      console.error('Validation FAILED: ', result.errors);
      process.exit(1);
    }
  }
}
const model = require('./model.js');

model.methods(['get', 'post', 'put', 'delete']);
model.updateOptions({ new: true, runValidators: true });

module.exports = model;
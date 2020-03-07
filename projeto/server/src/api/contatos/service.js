const model = require('./model.js');

model.methods(['get', 'post']);
model.updateOptions({ new: true, runValidators: true });

module.exports = model;
// membuat UserException
function UserException(message) {
  this.message = message;
  this.name = 'Tomi';
}


UserException.prototype.toString = function() {
  return this.name + ': "' + this.message + '"';
}

throw new UserException('Value too high');
function MessageBuilder(lemma_id){
  this.lemma_id = lemma_id;
}

MessageBuilder.prototype.event = function(name, value){
 var output = []
 output.push("event");
 output.push(this.lemma_id);
 output.push(name);
 output.push(value);
 return JSON.stringify(output);
};

MessageBuilder.prototype.register = function( plays,  hears, device_id, system_version){
  var output =[]
  output.push('register');
  output.push(this.lemma_id);
  output.push(0);
  output.push(plays);
  output.push(hears);
  output.push(device_id);
  output.push(system_version);
  return JSON.stringify(output);
};
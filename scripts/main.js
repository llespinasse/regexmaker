$('button').click(function() {
  var outputs = [];
  // USER INPUTS
  var string = $('#string').val();
  var inputRegex = $('#regex').val();
  var phpMask = $('#phpMask').val();
  // TAKE LINE ONE BY ONE
  var returnRegex = new RegExp('(.+)+', "g");
  var lines = string.match(returnRegex);
  console.info(lines);
  var variables = phpMask.match(/(\$.)/g);
  console.info(variables);
  // TAKE ELMTS IN EACH LINE
  for(var nbOfLine = 0; nbOfLine < lines.length; nbOfLine++) {
    console.info(nbOfLine);
    var elmts = lines[nbOfLine].match(inputRegex);
    console.info(elmts);
    var res = phpMask;
    // REPLACE EACH $
    for(var nbOf$ = 0; nbOf$ < variables.length; nbOf$++) {
      var $regex = new RegExp('(\\$'+ (nbOf$ + 1) +')', "g");
      res = res.replace($regex, elmts[nbOf$ + 1]);
    }
    outputs.push(res);
  }
  console.info(outputs);
  $('#output').val(outputs);
  $('#output').show();
});

document.getElementById("regex").onclick = function() {
    this.select();
    document.execCommand('copy');
    alert('Regex copied to clipboard!');
}

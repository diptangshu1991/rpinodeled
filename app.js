var express = require('express');

var app = express();

var flag;

app.use(express.static('./'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {

   // Prepare output in JSON format
      var response = {
       value1:req.query.value1
       
   };
   console.log(req.query.value1);
   flag=Number(req.query.value1);

on(flag);

   console.log(flag.toString());
  // Prepare output in JSON format

   console.log(res);
   res.end(JSON.stringify(response));
})

var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

function on(a1){



var gpio=require('rpi-gpio');
gpio.setup(7, gpio.DIR_OUT, write);
function write(){
var f;
if(a1==4)
{
f=true;
}
else{
f=false
}
	gpio.write(7, f, function(err){
		if(err)  throw err;
console.log('written to pin');

});
}
}

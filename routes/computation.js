var express = require('express');
var router = express.Router();
var x =Math.floor(Math.random() * 20);

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.x!= null && req.query.x!=undefined) {
    x= req.query.x
  }
 var y = Math.acosh(x);
    var y1 = Math.log1p(x);
    var y2 = Math.tan(x);
    var y3 = Math.sqrt(x);
    res.send("Math.acosh() applied to "+x+" is "+y+"<br></br>"+"Math.log1p() applied to "+x+" is "+y1+"<br></br>"+
                "Math.tan() applied to "+x+" is "+y2+"<br></br>"+
                "Math.sqrt() applied to "+x+" is "+y3);
});

module.exports = router;
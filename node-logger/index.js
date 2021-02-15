
 const express = require("express");
 app = express();
 const bodyParser = require('body-parser');
 app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  //used to parse body of post request
app.use(bodyParser.json())

const SimpleNodeLogger = require('simple-node-logger'),
    opts = {
        logFilePath:'./mylogfiles/mylogfile.log',
        timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
    },
log = SimpleNodeLogger.createSimpleLogger( opts ); 
log.setLevel('debug');

//Simple logger api to log data to file
app.post("/logData", (req, res, next) => {
    var reqData = req.body;
    log.debug(reqData);
    res.send({'message' : 'data logged successfully'})
});

app.listen(4200);
var express = require("express");

var bodyParser = require("body-parser");

var path = require('path');

var mysql = require('mysql');

var port = process.env.PORT || 3000;

var app = express();

var db_config = require("./mysql");

var conn;
function handleDisconnect() {
    conn = mysql.createConnection(db_config);
    conn.connect(function(err) {
        if(err){
            console.log("���ж�������" + new Date());
            setTimeout(handleDisconnect,2000);
            return;
        }
        console.log("���ӳɹ�");
    });
    conn.on('error' , function(err) {
        console.log('db error' , err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    })
}
handleDisconnect();

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));  //express.bodyParser()   Ӧ��Ϊ�������м�� bodyParser
app.use(express.static(path.join(__dirname , 'public')));
app.listen(port);
console.log("Server start on port " + port);

module.exports.appExpress = app;
//var application = require
var express = require("express");

var application1 = new express();

application1.listen(3001);

var application2 = new express();
application2.listen(3002);
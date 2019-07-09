/*jshint esversion: 6 */
/*
 Copyright 2017 Orange

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
/* jshint node: true */
/*jshint sub:true*/

"use strict";

var logger = require("tracer").console({
    level: global.debug ? "log" : "warn"
});

require("colors");
var TAG = "DIALSERVER ".green;

var constants = require("./constants");

const DIAL_URN = "urn:cast-ocast-org:service:cast:1";

exports.search = function () {
    function analyseApplication(url) {
        var request = require("request");
        request(url, { method: "GET" }, function (err, res) {
            logger.log(
                TAG + "New application url found ! : " + res.headers["application-url"]
            );
        });
    }
    var Client = require("node-ssdp").Client;
    var client = new Client();

    client.on("response", function (headers, statusCode, rinfo) {
        var location = headers["LOCATION"];
        logger.log(TAG + "Analyse new Location ", location, statusCode, rinfo);
        analyseApplication(location);
    });

    // search for a service type
    logger.log(TAG + "Search : " + DIAL_URN);
    client.search(DIAL_URN);

    setTimeout(function () {
        client.stop();
    }, 10000);
};

exports.launchApp = function (appId) {
    logger.log(TAG + "Launch application : " + appId);
    var url = 'http://' + constants.DONGLE_IPADDRESS + ':8008/apps/' + appId;
    var request = require("request");
    request(url, { method: "POST" }, function (error, res) {
        logger.log(TAG + "res: " + JSON.stringify(res));
    });
};

exports.stopApp = function (appId) {
    logger.log(TAG + 'Stop application : ', appId);
    var url = 'http://' + constants.DONGLE_IPADDRESS + ':8008/apps/' + appId;
    var request = require("request");
    request(url, { method: "DELETE" }, function (error, res) {
      logger.log(TAG + "res: " + JSON.stringify(res));
    });
};

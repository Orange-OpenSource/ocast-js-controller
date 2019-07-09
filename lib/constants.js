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

const LOCALHOST = "127.0.0.1";
const DONGLE_IPADDRESS = process.env.DONGLE_IPADDRESS || LOCALHOST;
const WEBSOCKET_PROTOCOL = "wss://";
const WEBSOCKET_PORT = 4433;
const WEBSOCKET_PATH = "/ocast";
const ORANGECAST_NAMESPACE = "org.ocast.media";

exports.DONGLE_IPADDRESS = DONGLE_IPADDRESS;
exports.WEBSOCKET_PROTOCOL = WEBSOCKET_PROTOCOL;
exports.WEBSOCKET_PORT = WEBSOCKET_PORT;
exports.WEBSOCKET_PATH = WEBSOCKET_PATH;
exports.ORANGECAST_NAMESPACE = ORANGECAST_NAMESPACE;

#! /usr/bin/env node

'use strict';

if ((require.main === module)) {
    global.debug = true;
}

var client = require('./lib/client');
var dialserver = require('./lib/dialserver');
var params = require('commander');
var logger = require('tracer').console({level: global.debug?'log':'warn' });
require('colors');

var pjson = require('./package.json');

params.command('version')
    .description('Display version')
    .action(function () {
        console.log("d2r_version : "+pjson.version);
    });
params.command('send <message>')
    .description('Send message')
    .option('-n, --namespace <namespace>', 'Override default namespace')
    .action(function (cmd, options) {
        client.sendMessage(JSON.parse(cmd) , options.namespace)
    });

params.command('prepare <url> <type>')
    .description('Prepare a new media with type video|image|sound')
    .action(function (url, type) {
        client.prepare(url, type);
    });
params.command('volume <position>')
    .description('Change Volume')
    .action(function (volume) {
        client.volume(volume);
    });
params.command('pause')
    .description('Pause media ')
    .action(function () {
        client.pause();
    });
params.command('mute <bOnOff>')
    .description('Mute media ')
    .action(function (bOnOff) {
        client.mute(bOnOff);
    });
params.command('stop')
    .description('Stop media')
    .action(function () {
        client.stop();
    });
params.command('close')
    .description('Close media')
    .action(function () {
        client.close();
    });
params.command('resume')
    .description('Resume media')
    .action(function () {
        client.resume();
    });
params.command('seek position')
    .description('Seek  position')
    .action(function (position) {
        client.seek(position);
    });
params.command('track <type> <trackId> <bOnOff>')
    .description('Update track of type audio|text|video with id true|false')
    .action(function (type, trackId, bOnOff) {
        client.track(type, trackId, bOnOff);
    });
params.command('getPlaybackStatus')
    .description('Get Playback Status')
    .action(function () {
        client.getPlaybackStatus();
    });
params.command('getMetadata')
    .description('Get Metadata')
    .action(function () {
        client.getMetadata();
    });

params.command('listen')
    .description('Listen command Websocket for debugging')
    .action(function () {
        client.listen();
    });

params.command('search')
.description('Search Dial TV Receivers')
.action(function () {
        dialserver.search();
    });

params.command('test <sample_name>')
    .description('Load a test sample ( smooth|mp4|mp3|jpg|gif  )')
    .action(function (sample) {
        var type = null;
        var url = null;
        switch (sample) {
            case "smooth": url="http://amssamples.streaming.mediaservices.windows.net/683f7e47-bd83-4427-b0a3-26a6c4547782/BigBuckBunny.ism/manifest"; type="video"; break;
            case "mp4": url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4";type="video"; break;
            case "jpg": url="http://placekitten.com/g/800/600";type="image"; break;
            case "gif": url="https://thumbs.gfycat.com/OptimisticIndelibleConch-size_restricted.gif";type="image"; break;
            case "mp3": url="http://datashat.net/music_for_programming_15-dan_adeyemi.mp3";type="audio"; break;
            default: logger.error("Sample "+sample+" not found !"); exit();
        }
        client.prepare(url,type);
    });
params.parse(process.argv);

exports.client = client;

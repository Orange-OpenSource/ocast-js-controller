# ocast-dongle-controller

The ocast-dongle-controller is a helper tool to check and test communication and cast with devices compatible with [OCast SDK](https://github.com/Orange-OpenSource/OCast-JS).

It can be used to:

- perform devices search and application launch using DIAL protocol
- send commands to devices

This tool can also be used to test receiver web applications running on desktop device and reachable through [Dongle TV simulator](https://github.com/Orange-OpenSource/ocast-dongletv-simulator).

## Prerequisites

[Nodes.js®](https://nodejs.org/en/)

---

### License

All code in this repository is covered by the [Apache-2.0 license](http://www.apache.org/licenses/LICENSE-2.0). See LICENSE file for copyright details.

## Installation

`npm install -g`

Check installation:

```
    ocastc --help
    ocastc version
```

Edit `constant.js` to setup your configuration such as the dongle (or simulator) IP address.

The dongle IP address can also be setup in your environment variables:

`export DONGLE_IPADDRESS=<dongle_ip_address>`

---

## Commands and examples (see index.js)

### Launch application

    ocastc launchApp <appId>

You can launch the application samples that are provided in the [ocast-receiver-samples](https://github.com/Orange-OpenSource/ocast-receiver-samples) project.
The following applications can be launched:
- OCast-Sample-MediaReceiver: Media receiver using native HTML5 <video> element 
- OCast-Sample-MSEMediaReceiver: Media receiver using the [dash.js](https://github.com/Dash-Industry-Forum/dash.js) MSE/EME based HTML5 player

### Stop application

    ocastc stopApp <appId>
    
### Search Dial TV Receivers

    ocastc search

### Load a video and autoplay

    ocastc load http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4 video

### Other examples

```
    ocastc test mp4
    ocastc test dash
    ocastc pause
    ocastc volume 0.4
    ocastc close
```

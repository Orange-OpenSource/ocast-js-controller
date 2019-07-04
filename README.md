# ocast-dongle-controller
## Usages
> * send command to your web application locally
> * no-secure websockets
## Prerequisites

install node package manager for Windows/Linux/MacOs

1. Download the Windows installer from the Nodes.js® web site.
https://nodejs.org/download/

2. Run the installer (the .msi or .pkg file you downloaded in the previous step.)

3. Follow the prompts in the installer

4. Test Node. To see if Node is installed, open the Windows Command Prompt and type node -v

***

### License

All code in this repository is covered by the [Apache-2.0 license](http://www.apache.org/licenses/LICENSE-2.0). See LICENSE file for copyright details.

## Installation
`npm install -g`

Check installation:
```
    d2r --help
    d2r version
```
Edit `constant.js` according your needs
***
## Commands and examples (see index.js)
### Search Dial TV Receivers
    d2r search
### Load a video and autoplay
    d2r load http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4 video
### Other examples
```
    d2r load mp4
    d2r test smooth
    d2r pause
    d2r volume 0.4
    d2r listen
    d2r close
```
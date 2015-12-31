# amazon-dash-automation

Getting inspired from the articles [here](https://medium.com/@edwardbenson/how-i-hacked-amazon-s-5-wifi-button-to-track-baby-data-794214b0bdd8#.miawncw8h) I decided to try that out using my own [Raspberry PI](https://www.raspberrypi.org/products/model-b)

I chose to automate task of printing school form with a button press. I have [Brother HL-2280DW](http://www.brother-usa.com/Printer/ModelDetail/1/hl2280dw) printer.

## Pre requisites

### Node Modules
The node modules used are
* [node-dash-button NPM module](https://github.com/hortinstein/node-dash-button)
* [node-syslog NPM module](https://github.com/schamane/node-syslog)

### Printer setup.
Please follow the instructions [here](http://www.howtogeek.com/169679/how-to-add-a-printer-to-your-raspberry-pi-or-other-linux-computer) to setup the printer on Raspberry PI.

Use the following driver from the list of drivers "Brother HL-2170W Foomatic/hpijs-pci5e"


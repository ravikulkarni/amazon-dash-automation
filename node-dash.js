dash_button = require('node-dash-button');
var dash = dash_button("f0:27:2d:24:2d:92"); //address of Amazon Dash button.
var exec = require('child_process').exec;
var printout_sent = false;

dash.on("detected", function (){
	console.log("Dash button pressed");
	if(!printout_sent) {
	    var Syslog = require('node-syslog');
	    Syslog.init("node-syslog", Syslog.LOG_PID | Syslog.LOG_ODELAY, Syslog.LOG_LOCAL0);
	    Syslog.log(Syslog.LOG_INFO, "Node Syslog Module output " + new Date());
	    printout_sent = true;
	    Syslog.log(Syslog.LOG_INFO, "Printing School Bus pass.");
	    var cmd = '/usr/bin/lpr /home/pi/BusPass.pdf';
	    Syslog.log(Syslog.LOG_INFO, "Running Command:" + cmd);
	    exec(cmd, function(error, stdout, stderr) {
		    Syslog.log(Syslog.LOG_INFO, stdout);
		});
	    setTimeout(function () {
		    Syslog.log(Syslog.LOG_INFO, "Ready to take in more print commands.");
		    printout_sent = false;
		    Syslog.close();
		}, 30*1000)

		}
    });

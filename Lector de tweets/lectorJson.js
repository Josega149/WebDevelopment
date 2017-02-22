var fs = require('fs');
var obj;





module.exports = {
    imprimir: function (res){
    	var fs = require('fs');
		var obj = JSON.parse(fs.readFileSync('jsonWithTweets', 'utf8'));
	  	res.set('Content-Type', 'text/html');

	  	var tweets = "";
	  	for(var i=0; i<obj.length;i++)
	  	{
	  		tweets += "<div class='col-md-4' >"
	  										   +"<img src='"+ obj[i].user.profile_image_url_https+"'>"
	  										   +" Nombre: "+ obj[i].user.name
	  										   +" Tweet: "+ obj[i].text

	  			   +"</div>";
	  	}

		res.send(new Buffer(tweets));
		}
	};


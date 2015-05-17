var npm=require('npm'),
	debug=require('debug')('npmai');

npm.load({}, function(err, npm) {
	debug("searching");
	npm.commands.search("", function(err, results) {
		if(err) throw err;
		debug("%j", results);
	});
});

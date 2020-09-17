const fs = require('fs'); 
module.exports = async (client) => {
fs.readdir('./events/', (err, files) => { 
	if (err) return console.error(err); 
	files.forEach(file => {
		const eventFunction = require(`./events/${file}`); 
		if (eventFunction.disabled) return;

		const event = eventFunction.event || file.split('.')[0]; 
		const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client; 
		const once = eventFunction.once; 

	
		try {
			emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(...args)); 
		} catch (error) {
			console.error(error.stack); 
		}
	});
});
}
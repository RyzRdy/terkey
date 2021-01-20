const color = require('./lib/color');
var figlet = require('figlet');
var lolcatjs = require('lolcatjs');

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

console.log('------------------------------------------------')
lolcatjs.fromString(color(figlet.textSync('ELAINA BOT', { horizontalLayout: 'full' })))
console.log('------------------------------------------------')
lolcatjs.fromString('[DEV] NAZWAS')
lolcatjs.fromString('[SERVER] TerKey Started!')
console.log('')

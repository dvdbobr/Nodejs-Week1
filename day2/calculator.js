const yargs = require('yargs')
let argv = yargs.argv
switch (yargs.argv._[0]) {
    case 'add':
        yargs.command({

            command: 'add',
            describe: 'calculator addition',
            handler: function () {
                console.log(yargs.argv._[1] + yargs.argv._[2]);
            }
        })
        break;
    case 'sub':
        yargs.command({
            command: 'sub',
            describe: 'calculator subtraction',
            handler: function () {
                console.log(yargs.argv._[1] - yargs.argv._[2]);
            }
        })
        break;
    case 'mult':
        yargs.command({
            command: 'mult',
            describe: 'calculator multiplication',
            handler: function () {
                console.log(yargs.argv._[1] * yargs.argv._[2]);
            }
        })
        break;
    case 'pow':
        yargs.command({
            command: 'pow',
            describe: 'calculator power of',
            handler: function () {
                console.log(yargs.argv._[1] * yargs.argv._[1]);
            }
        })
        break;
    default:
        break;
}

yargs.argv
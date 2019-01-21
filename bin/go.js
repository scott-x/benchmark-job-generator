const fs = require('fs-extra');
var chalk = require('chalk');
var inquirer = require('inquirer');
var path = require('path')

inquirer
	  .prompt([
	    /* Pass your questions in here */
	    {
            type: 'rawlist',
            name: 'kind',
            message: `${chalk.magenta(' 哪种类型的？')}`,
            choices: ['USA','CAN','LNC','Print','非WMT','Photography'],
            default: 'USA'
        }
	  ])
	  .then(answers => {
	    // Use user feedback for... whatever!!
	       switch (answers.kind){
	       	case 'USA':
	          fs.copy(path.resolve(__dirname,'../templates/WMT_xxxxxx_xxx 做稿'),path.resolve(__dirname,'../templates/temp/WMT_xxxxxx_xxx 做稿'))
	             .then(()=>console.log('success'))
	             .catch(err => console.error(err))
	       	  break;
	       	case 'CAN':
	       	  break;
	       	case 'LNC':
	       	  break;
	       	case 'Print':
	       	  break;  
	       	case "非WMT":
	       	  break;
	       	case 'Photography':
	       	  break;  
	       }
});

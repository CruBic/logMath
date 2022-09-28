# LogMath
### Test task script that calculates simple formua and logs results.

### Libraries used
 - [Decimal.js](https://www.npmjs.com/package/decimal.js)
 - [Dotenv](https://www.npmjs.com/package/dotenv)

#### How to run
- Install [Node.Js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm)
- Run ```npm install``` in project root folder
- Add ```.env``` file to project root folder.
- Run ```npm run start``` to run script.
 
### Example of ```.env``` file content
```
peccalaValue=2.012345678912345678
logPath=./log.csv
envParamKey=peccalaValue
threshold=120000
```
### Parameters description:
 - ```peccalaValue``` stores input value. This parameter name is configurable and can be chanded, see ```envParamKey```
 - ```logPath``` path to desired logfile. If file doesn't exist, it will be created
 - ```envParamKey``` sets name for desired input value. It means that "peccalaValue" can be changed to any desired name.
 - ```threshold``` sets time interval tim in milliseconds.

### Log example
For given input values
```
threshold=2000
peccalaValue=2.012345678912345678
```

we will have listed logs:
```
{value: 2.012345678912345678, date: 9/28/2022, 12:53:22 PM},
{value: 0.736625514376625514, date: 9/28/2022, 12:53:24 PM},
{value: 0.396433470500433470, date: 9/28/2022, 12:53:26 PM},
{value: 0.305715592133448925, date: 9/28/2022, 12:53:28 PM},
{value: 0.281524157902253047, date: 9/28/2022, 12:53:30 PM},
{value: 0.275073108773934146, date: 9/28/2022, 12:53:32 PM},
{value: 0.273352829006382439, date: 9/28/2022, 12:53:34 PM},
{value: 0.272894087735035317, date: 9/28/2022, 12:53:36 PM},
{value: 0.272771756729342751, date: 9/28/2022, 12:53:38 PM},
{value: 0.272739135127824734, date: 9/28/2022, 12:53:40 PM},
{value: 0.272730436034086596, date: 9/28/2022, 12:53:42 PM},
{value: 0.272728116275756426, date: 9/28/2022, 12:53:44 PM},
{value: 0.272727497673535047, date: 9/28/2022, 12:53:46 PM},
{value: 0.272727332712942679, date: 9/28/2022, 12:53:48 PM},
{value: 0.272727288723451381, date: 9/28/2022, 12:53:50 PM}
```

### Possible places for improvement
Log shows history of input change. This means that after script termination last log entry and actual value would be different.
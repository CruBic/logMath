import * as dotenv from 'dotenv'
import * as os from 'os'
import Decimal from 'decimal.js';
import { promises as fs, existsSync } from 'fs';

dotenv.config({override: true});

const envPath = './.env';
const threshold = process.env.threshold;
const logPath = process.env.logPath;
const envParamKey = process.env.envParamKey

const writeLog = (log) => {
  const log = getLogString(process.env[envParamKey]);
  if (!existsSync(logPath)) {
    fs.writeFile(logPath, log);
    return;
  } 

  fs.appendFile(logPath, `,${os.EOL}${log}`);
};

const getLogString = (value) => {
  const time = new Date();
  return `{value: ${value}, date: ${time.toLocaleString()}}`;
}

const updateEnvValue = async (result) => {
  if (existsSync(envPath)) {
    const envVariables = (await fs.readFile(envPath, "utf-8")).split(os.EOL);
    const targetIndex = envVariables.indexOf(`${envParamKey}=${process.env[envParamKey]}`);
    envVariables[targetIndex] = `${envParamKey}=${result}`;
    fs.writeFile(envPath, envVariables.join(os.EOL));
    process.env[envParamKey] = result;
  } 
}

const calculate = async () => {
  writeLog();
  /**
   * Had to use decimal.js library to handle floats with high precision. 
   * Technicallly, I'm using toPrecision(18) to cut precision because it uses 20 places, not 18
   */
  const result = Decimal(process.env[envParamKey]).times(2).plus('1.5').dividedBy('7.5').toPrecision(18);
  await updateEnvValue(result);
}


/**
 * using calculate();setInterval(calculate, threshold); is not most elegant solution but is the silplest one.
 * Considering, that I'm using clearInterval later I can't see major downfals of this solution
 */
calculate();
const interval = setInterval(calculate, threshold);
console.log("Calculating... Press Ctrl+C to stop");

/**
 * We need to clear interval on termination
 */
process.on('SIGINT', () => {
  clearInterval(interval) 
  console.log('Calculating was terminated.');
  process.exit();
});

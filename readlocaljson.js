// https://www.npmjs.com/package/file-system
const file = require('file-system');

var runningDir = process.cwd();
var ourDataFile = runningDir + "/ssRaf.json";
const data = file.readFileSync(ourDataFile1, 'utf8');
var varProfile = JSON.parse(data);

varProfile.profiles[i].variableName;
#Find Files#

a simple search utility that will return any file whose name includes the provided search term

###Install With npm###

npm install findFiles

###require it in node###

```
var finder = require('find-files');
```

###Use it###

```
finder(value, options, callback);
```

####where####
* value - string
  + your search term as a string, findFiles will convert your string to a regex for testing against file names so 'colou?r' would match any files that had either the English or American spelling of the word colour.

* options - Object 
```
   {
       root:        'string' // root of search
       requireExts: array    // Optional - only return files which match extensions contained in array
       ignoreDirs:  array    // Optional - don't include directories contained in array
   }
```

* callback - Function - the callback is passed one argument which is an array of objects as below
```
   [{
       name: fileName,
       filepath: absolute path of the file including filename
   }]
```

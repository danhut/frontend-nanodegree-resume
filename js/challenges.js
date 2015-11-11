// Challenge number 1
function getRelationship(x,y) {
  var bad = [];
  if (typeof x != 'number') {
    bad.push(x);
  }
  if (typeof y != 'number') {
    bad.push(y);
  }
  if (bad.length === 1) {
    return "Can't compare relationships because " + bad[0] +
      " is not a number.";
  }
  if (bad.length === 2) {
    return "Can't compare relationships because " + bad[0] +
      " and " + bad[1] + " are not numbers.";
  }
  if (x > y) {
      return 'x>y';
  }
  else if (y > x) {
      return 'y>x';
  }
  else if (x === y) {
      return 'x=y';
  }
}

var rel = getRelationship('dog');
console.log(rel);

// Challenge number 2
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

// Challenge number 2
function alphabetizer(names) {
  var newnames = [];
  for (var name in names) {
    var nameList = names[name].split(/ /);
    newnames.push(nameList[1] + " " + nameList[0]);
  }
  newnames.sort;
  return newnames;
}

console.log(alphabetizer(moonWalkers));

// Challenge number 3
var psiResults = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidBadRequests": {
    "localizedRuleName": "Avoid bad requests",
    "ruleImpact": 0.0
   },
   "MinifyJavaScript": {
    "localizedRuleName": "Minify JavaScript",
    "ruleImpact": 0.1417,
    "urlBlocks": [
     {
      "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
}

function totalBytes(psiResults) {
  var totalBytes = 0;
  var keys = Object.keys(psiResults.pageStats);
  for (entry in keys) {
    if(/Bytes/i.test(keys[entry])) {
      totalBytes += Number(psiResults.pageStats[keys[entry]]);
    }
  }
  return totalBytes;
}

function ruleList(psiResults) {
  var results = [];
  for (var item in psiResults) {
    if (psiResults[item]['localizedRuleName']) {
      results.push(psiResults[item]['localizedRuleName']);
    }
  }
  return results;
}

console.log(totalBytes(psiResults));
console.log(ruleList(psiResults.formattedResults.ruleResults));

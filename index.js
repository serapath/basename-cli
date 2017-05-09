#! /usr/bin/env node
var basename = require('basename')
var path = require('path')

var filepath = process.argv.splice(process.execArgv.length + 2)[0]
var filename = path.basename(filepath)
var extension = path.extname(filepath)
if (extension) filename = filename.split(extension)[0]

console.log(filename)

"use strict";
var setupPage = function(){
var title = document.createElement('title');
var titleString = 'I say some words and stuff'
var titleText = document.createTextNode(titleString);
title.appendChild(titleText);
//var body = document.getElementsByTagName('body');
//var head = document.getElementsByTagName('head');
//var body = document.getElementsByTagName('body');
document.head.insertAdjacentElement('afterbegin',title);
var viewport = document.createElement('canvas');
viewport.width = 700;
viewport.height = 500;
viewport.style = 'border: 1px solid black';
viewport.id = 'viewport';
window.ctx = viewport.getContext('2d');
document.body.insertAdjacentElement('afterbegin',viewport);
var paragraph = document.createElement('p');
paragraph.id = 'paragraph';
var pString = 'This is a string I will set down right here';
var pText = document.createTextNode(pString);
paragraph.appendChild(pText);
document.body.insertAdjacentElement('beforebegin',paragraph);
console.log(viewport);
return setupPage=true;
}


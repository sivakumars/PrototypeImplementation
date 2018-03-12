/*
* Implementation of Object.isPrototypeOf method 
* Using Object.getPrototypeOf(item) to get an item's prototype.
* This function recurses/climbs up the prototype chain to compare the prototype of 
  an Object
*/
function isPrototypeOf(prototype, item){
 var isPrototype = false;
 /*Throw an error if the prototype object is Falsy*/
 if(prototype === null || prototype === undefined){
 	throw new Error('prototype cannot be null or undefined');
 }
 /*Get the Prototype of the item*/
 var prototypeOfItem = Object.getPrototypeOf(item);
 /*If the prototype of the item is Valid, compare the item and the prototype variable,
   If equal , then it's a prototype, otherwise, Recurse through the prototype chain.*/
 if(prototypeOfItem){
 	if(prototype === prototypeOfItem){
 	 isPrototype = true;
  }else{
 	 isPrototype = isPrototypeOf(prototype, prototypeOfItem);
  }
 }
 return isPrototype;
};
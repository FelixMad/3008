'use strict';

var $element = document.getElementById("control-event");

$element.addEventListener("click", toogleActiveClass, false); 

function toogleActiveClass() {
    var value = "active";
    this.className = toogleTest(this.className.split(' '),value).toString().replace(",", " ");
}

function toogleTest(array,value){
  if(testValue(array,value)){
    array = removeValue(array,value)
  }else{
    array.push(value)
  }
  return array
}

function testValue(array,value){
    for(var i = 0; i < array.length; i++){
        if(array[i] === value) return true
    }
    return false
}

function removeValue(array,value){
  for(var i = 0; i < array.length; i++){
      if(array[i] === value) array.splice(i, 1)
  }
  return array
}

'use strict';
var $active = "active";
var $control_event = document.getElementById("control-event");
$control_event.addEventListener("click",touch,false);

function touch() {
    var $className = this.className;
    var $arrayClassName = $className.split(' ');

    if($test($className,$active)){
        $arrayClassName = $removeClass($arrayClassName,$active);
    }else{
        $arrayClassName.push($active);
    }
    this.className = $arrayClassName.toString().replace(",", " ");
}

function $test(data,value){
    var $array = data.split(' ');
    for(var i = 0; i < $array.length; i++){
        if($array[i] == value){
           return true 
        }
    }
    return false
}

function $removeClass($array,value){
    for(var i = 0; i < $array.length; i++){
        if($array[i] == value){
            return $array = $array.splice(i, 1);
        }
    }
}

var rover= {
  direction: "N",
  x: 0,
  y: 0,
   }
  function goForward(rover){
    switch(rover.direction){
      case "N":
        [rover.x][rover.y++];
        break;
      case "S":
        [rover.x][rover.y--];
        break;
      case "E":
        [rover.x++][rover.y];
        break;
        case"W":
        [rover.x--][rover.y];
        break;
    }

  }
 function turnRight(rover){
  if (rover.direction==="N"){
    rover.direction="E";

  }
  else if(rover.direction==="E"){
    rover.direction="S";

  }
  else if(rover.direction==="S"){
    rover.direction="W";

  }
  else{
    rover.direction="N";
  }
    }
  function turnLeft(rover){
    if(rover.direction==="N"){
      rover.direction="W";
    }
    else if(rover.direction==="W"){
      rover.direction="S";

    }
    else if(rover.direction==="S"){
      rover.direction="E";
    }
    else{
      rover.direction="N";
    }
  }



var j=0;
for(var i="rffrfflfrff";i.charAt(j);j++){
  // console.log(i.charAt(j));
  if(i.charAt(j)==="f"){
     goForward();
  }else if(i.charAt(j)==="r"){
    turnRight();
  }else if(i.charAt(j)==="l"){
    turnLeft();
  }
}
rover.travelLog.push(rover.x , rover.y);

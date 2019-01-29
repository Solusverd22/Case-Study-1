function RectangleDrawTool(){
	this.icon = "assets/rectTool.png";
	this.name = "RectTo";
	//the starting x position of the line
	var startMouseX = -1;
	//the starting y position of the line
	var startMouseY = -1;
	//whether or not the user is currently drawing
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
				//sets the start position to the current mouse coordinates
				startMouseX = mouseX;
				startMouseY = mouseY;
				//starts drawing
				drawing = true;
				//makes sure only one line gets drawn while the mouse is down by saving the canvas state when the mouse is first pressed down
				loadPixels();
			}

			else{
				//makes sure only one line gets drawn while the mouse is down by overwriting last frame with the previously saved canvas
				updatePixels();
				//removes inner rectangle
				noFill();
				//draws rectangle between starting mouse position and current mouse position
				rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY- startMouseY);
			}

		}

		//resets the start mouse position for next time the mouse goes down
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
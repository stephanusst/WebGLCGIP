var dark = 0; // 0 means ada/tidak sumbu

// Function called periodically to draw the scene
function draw()
{
  // Tests if canvas should be refreshed
  if(!running || !gl)
    return;
    
  // Gets control value angles from HTML page via DOM
  var ax = parseInt(document.getElementById('ax').innerHTML, 10);
  var ay = parseInt(document.getElementById('ay').innerHTML, 10);
  var az = parseInt(document.getElementById('az').innerHTML, 10);
  
  // Use increments via DOM to update angles (still in degrees)
  ax = (ax + parseInt(document.getElementById('dx').value, 10) + 360) % 360;
  ay = (ay + parseInt(document.getElementById('dy').value, 10) + 360) % 360;
  az = (az + parseInt(document.getElementById('dz').value, 10) + 360) % 360;
  
  // Update HTML page with new values
  document.getElementById('ax').innerHTML = ax.toString();
  document.getElementById('ay').innerHTML = ay.toString();
  document.getElementById('az').innerHTML = az.toString();
  
  // Convert values to radians
  ax *= 2*Math.PI/360; ay *= 2*Math.PI/360; az *= 2*Math.PI/360; 

  // Gets reference on the "uniform" 4x4 matrix transforming coordinates
  var amvp = gl.getUniformLocation(program, "mvp");
  if(amvp == -1){
	  alert('Error during uniform address retrieval');
	  running=false;
	  return;
  }  

  // Creates matrix using rotation angles
  var mat = getTransformationMatrix(ax, ay, az);
  
  // Sets the model-view-projections matrix in the shader
  gl.uniformMatrix4fv(amvp, false, mat);

  // Sets clear color to non-transparent dark blue and clears context
  gl.clearColor(0.0, 0.0, 0.5, 0.5);
  gl.clear(gl.COLOR_BUFFER_BIT);
  

   // Draws the object
  if (dark==0)
	gl.drawArrays(gl.LINE_STRIP, 0, vertices.length/3);
  else 
	gl.drawArrays(gl.LINE_STRIP, 21, vertices.length/3-21);
	
  gl.flush();
}

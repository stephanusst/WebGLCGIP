
// Global variables
//-----------------------
var gl = null; // GL context
var program; // The program object used in the GL context
var running = true; // True when the canvas is periodically refreshed


// Function called by onload handler
function start()
{
  // Gets canvas from the HTML page
  var canvas = document.getElementById('glcanvas');

  // Creates GL context
  try {gl = canvas.getContext('experimental-webgl');}
  catch(e) {alert('Exception catched in getContext: '+e.toString());return;}
  
  // If no exception but context creation failed, alerts user
  if(!gl) {alert('Unable to create Web GL context');return;}
  
  
  //---------------- end of part 1 -----------------
  
  // Creates fragment shader (returns white color for any position)
  var fshader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fshader, fragmentShaderCode);
  gl.compileShader(fshader);
  if (!gl.getShaderParameter(fshader, gl.COMPILE_STATUS)) 
	{alert('Error during fragment shader compilation:\n' + gl.getShaderInfoLog(fshader)); return;}

  // Creates vertex shader (converts 2D point position to coordinates)
  var vshader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vshader, vertexShaderCode);
  gl.compileShader(vshader);
  if (!gl.getShaderParameter(vshader, gl.COMPILE_STATUS)) 
	{alert('Error during vertex shader compilation:\n' + gl.getShaderInfoLog(vshader)); return;}

  // Creates program and links shaders to it
  program = gl.createProgram();
  gl.attachShader(program, fshader);
  gl.attachShader(program, vshader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) 
	{alert('Error during program linking:\n' + gl.getProgramInfoLog(program));return;}

  // Validates and uses program in the GL context
  gl.validateProgram(program);
  if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) 
	{alert('Error during program validation:\n' + gl.getProgramInfoLog(program));return;}
  gl.useProgram(program);

  // Gets address of the input 'attribute' of the vertex shader
  var vattrib = gl.getAttribLocation(program, 'ppos');
  if(vattrib == -1)
	{alert('Error during attribute address retrieval');return;}
  gl.enableVertexAttribArray(vattrib);

  // Initializes the vertex buffer and sets it as current one
  var vbuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);

  // Puts vertices to buffer and links it to attribute variable 'ppos'
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  gl.vertexAttribPointer(vattrib, 3, gl.FLOAT, false, 0, 0);

  //------------------ end of part 2 -------------------------------
  
  // Creation of function draw and code moved there
  
  // The function draw() will be called every 40 ms
  setInterval("draw();", 40);  
}


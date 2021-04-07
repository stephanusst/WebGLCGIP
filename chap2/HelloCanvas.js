// HelloCanvas.js
function main() {
	//Retrieve <canvas> element
	var canvas = document.getElementById('webgl');

	// Get the rendering context for WebGL
	var gl = canvas.getContext('webgl');
	if (!gl) {
		console.log('Failed to get the rendering context for WebGL');
		return;
	}
	// Specify the color for clearing <canvas>
	gl.clearColor(0.50, 0.50, 0.50, 1.0);

	// Clear <canvas>
	gl.clear(gl.COLOR_BUFFER_BIT);
}
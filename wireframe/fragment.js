
// GLSL ES code to be compiled as fragment shader
fragmentShaderCode=
'void main(void) {'+
'  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);'+
'}';

// GLSL ES code to be compiled as vertex shader
vertexShaderCode=
'attribute vec3 ppos;'+
'uniform mat4 mvp;'+
'void main(void) {'+
'  gl_Position = mvp * vec4(ppos.x, ppos.y, ppos.z, 1.0);'+
'}';

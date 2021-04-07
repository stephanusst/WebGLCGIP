// Gets a transformation matrix given the rotation angles
function getTransformationMatrix(rx, ry, rz)
{
  // Pre-computes trigonometric values (mainly for better readability)
  var cx = Math.cos(rx), sx = Math.sin(rx);
  var cy = Math.cos(ry), sy = Math.sin(ry);
  var cz = Math.cos(rz), sz = Math.sin(rz);

  // Returns matrix
  return new Float32Array([cy*cz, (sx*sy*cz-cx*sz), (sx*sz+cx*sy*cz), 0,
                           cy*sz, (sx*sy*sz+cx*cz), (cx*sy*sz-sx*cz), 0,
                           -sy,   sx*cy,            cx*cy,            0,
                           0,     0,                0,                1]);
}

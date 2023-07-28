const wireFrame = false
const original_push = Array.prototype.push;
Array.prototype.push = function(...args) {
original_push.apply(this, args);
if (args[0] && args[0].material && args[0].type == "SkinnedMesh") {
if(wireFrame) {args[0].material.wireframe = false}
args[0].material.alphaTest = 1;
args[0].material.depthTest = false;
args[0].material.fog = true;
args[0].material.color.r = 1;
args[0].material.color.g = 1;
args[0].material.color.b = 0;
console.log(args[0])
}
}

precision mediump float;

uniform sampler2D texture;
uniform float time;
uniform float intensity;

varying vec2 vUv;

void main(){
  vec2 uv=vUv;
  uv.x+=(sin(uv.y*10.+time*2.)*.5+sin(uv.x*10.+time*3.))*intensity;
  uv.y+=(sin(uv.x*10.+time*2.)*.5+sin(uv.y*10.+time*3.))*intensity;
  gl_FragColor=texture2D(texture,uv);
}
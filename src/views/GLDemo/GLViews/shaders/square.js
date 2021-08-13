const square = `
  uniform vec2 u_resolution;
  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.0);
    
    float left = step(0.2, st.x);
    float bottom = step(0.2, st.y);
    
    color = vec3(left * bottom);
    gl_FragColor = vec4(color, 1.0);
  }
`
export default square;

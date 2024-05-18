let video;

function preload() {}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  clear(); //?? (컬러 버퍼를 지운다) 순서 이렇게 됨.
  blendMode(ADD) // 가산 혼합, 특수 효과
  background(0); 
  // 웹캠이미지의 픽셀(컬러값)을 읽어온다
  video.loadPixels();

  // 그리드를 만든다
  for (let y = 0; y < 48; y = y + 1) {
    for (let x = 0; x <64; x = x + 1) {
      let c = getVideoColor(x * 10, y * 10);
      let r = red(c);
      let g = green(c);
      let b = blue(c);
      textSize(10);
      fill(255);
      if (r < 32){
      text("🐈‍⬛", x * 10, y *10);} 
      if (r >= 32 && r < 64){
      text("👾", x * 10, y *10);}
      if (r >= 64 && r < 98){
      text("🛰️", x * 10, y *10);}
      if (r >= 98 && r < 130){
      text("🛸", x * 10, y *10);}
      if (r >= 130 && r < 162){
      text("🔭", x * 10, y *10);}
      if (r >= 162 && r < 195){
      text("🐈", x * 10, y *10);}
      if (r >= 195 && r < 227){
      text("😻", x * 10, y *10);}
       if (r >= 227){
      text("🐱", x * 10, y *10);}
    }
  }
}





// 웹캠이미지(x,y)의 컬러값을 가져온다
function getVideoColor(x, y) {
  let i = (x + y * video.width) * 4;
  let c = color(0, 0, 0);
  let r = video.pixels[i];
  let g = video.pixels[i + 1];
  let b = video.pixels[i + 2];
  if (r > 0) c = color(r, g, b);
  return c;
}

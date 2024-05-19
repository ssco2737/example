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
      let bri = (r + g + b) / 3;
      
      textSize(10);
      fill (204,148,208);
      if (bri > 233.75 && bri <= 255) {
      text("🇳", x * 10, y *10);
      }
      if (bri > 212.5 && bri <= 233.75) {
      text("𝕘", x * 10, y *10); 
      }
      if (bri > 191.25 && bri <= 212.5) {
      text("✮", x * 10, y *10);
      }
      if (bri > 170 && bri <= 191.25) {
      text("ⓞ", x * 10, y *10);
      }
      if (bri > 158.75 && bri <= 170) {
      text("Ⓐ", x * 10, y *10);
      }
      if (bri > 127.5 && bri <= 158.75) {
      text("✴︎", x * 10, y *10);
      }
      if (bri > 106.25 && bri <= 127.5) {
      text("𝓴", x * 10, y *10);
      }
      if (bri > 85 && bri <= 106.25) {
      text("🅈", x * 10, y *10);
      }
      if (bri > 63.75 && bri <= 85) {
      text("✥", x * 10, y *10);
      }
      if (bri > 42.25 && bri <= 63.75) {
      text("❅", x * 10, y *10);
      }
      if (bri > 21.25 && bri <= 42.25) {
      text("🅽", x * 10, y *10);
      }
      if (bri <= 21.25) {
      text("🅺", x * 10, y *10);}
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
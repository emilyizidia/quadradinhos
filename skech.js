function setup() {
    createCanvas(600, 600);
    background("white")
  }
  
  function draw() {
    stroke("#9C27B0");
    fill("#2196F3");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  
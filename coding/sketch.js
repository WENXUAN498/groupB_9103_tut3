let size =100
let angleOffset =30
let bianchang
function setup() {
	createCanvas(windowWidth, windowHeight);
	background('green');
	bianchang =  sqrt(3)*size
	let num=Math.floor((width/bianchang)*2+1)
	print(num)
	angleMode(DEGREES); 
	
		for(let o =0;o<=num;o++){
	for(let i =0;i<=num;i++){
		let cx =i*bianchang/2
		let h = sqrt(3) / 2 * bianchang-size;
		let cy =100
		if(i%2 !==0){
			angleOffset =30,
				fill('red'),
				cy=100
		}else{
				angleOffset =90,
						fill('pink'),
				cy=100-h
			}
		
		beginShape();
  for (let j = 0; j < 3; j++) {
    let angle = angleOffset + j * 120; // 每隔120°
    let x = cx + cos(angle) * size;
    let y = cy + sin(angle) * size;
		
    vertex(x, y);
}
  
  endShape();
				fill('green')
		circle(cx, cy, 20);
	}
}
}
function draw() {
	circle(mouseX, mouseY, 20);
}

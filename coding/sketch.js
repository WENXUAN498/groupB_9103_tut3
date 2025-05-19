let degree=45
let a=0
let yuanshiR =100
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	  angleMode(DEGREES);
	//------------------------------------------
		translate(width/2,height/2)
	//------------------------------------------
	// noStroke()
	for(let j=0;j<3;j++){
	push()
	 strokeWeight(1)
	noFill()
	circle(0,0,j*yuanshiR*1.6)
	pop()}
	//------------------------------------------
	for(let j=0;j<8;j++){
			for(let i=0;i<6;i++){
		let b =random(50)
	push()
	 strokeWeight(1)

	let x1 = cos(degree*j- 67.5-i*random(3))*yuanshiR/3+0
		let y1 = sin(degree*j- 67.5-i*random(3))*yuanshiR/3+0
		line(0,0,x1*b,y1*b)
	pop()
			}
	}
		//------------------------------------------
	for(let j=0;j<360;j++){
			for(let i=0;i<6;i++){
		let c = map(i,0,5,50,25)
	push()
	 noStroke()
		fill(255)

	let x1 = cos(j*3)*yuanshiR/1.3*(4-i/10)+0
		let y1 = sin(j*3)*yuanshiR/1.3*(4-i/10)+0
		circle(x1,y1,yuanshiR/c)
	pop()
			}
	}
	
//------------------------------------------	
	drawStar(0,0,50)

}

function draw() {
	
	
}


function drawStar(starX,starY,starSize){
	fill(255)
//星星
for(let j=0;j<3;j++){
			let r =map(j,0,2,starSize,starSize/3)
				beginShape()
	for(let i=0;i<=8;i++){
if(i==0||i==4||i==8){
	a=starSize/3
}else{
		a=0
	}
		let x = cos(degree*i- 90)*(r+a)*3/2+starX
		let y = sin(degree*i- 90)*(r+a)*3/2+starY
		
		let x1 = cos(degree*i- 67.5)*r/3+starX
		let y1 = sin(degree*i- 67.5)*r/3+starY
		// line(0,0,x1*width,y1*width)
		vertex(x,y)
		vertex(x1,y1)
		
		
	
	}
		endShape()}
}



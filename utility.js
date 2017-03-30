function i2xy(index, mapWidth) {
	var x = index % mapWidth;
	var y = Math.floor(index/mapWidth);
	return [x,y];
};

function xy2i(x, y, mapWidth) {
	return y * mapWidth + x;
};

function DisableScrollbars() {
	document.documentElement.style.overflow = "hidden";
	document.body.scroll = "no"; //IE
};

function colorFill(x,y,width,hight,color) {
	Context.context.beginPath();
	Context.context.rect(x,y,width,hight);
	Context.context.fillStyle = color;
	Context.context.fill();
};

function drawLine(x1,y1,x2,y2,color) {
	Context.context.beginPath();
	Context.context.moveTo(x1,y1);
	Context.context.lineTo(x2,y2);
	Context.context.strokeStyle = color;
	Context.context.stroke();
};

function drawCircle(x,y,r,angle1,angle2,color){
	Context.context.beginPath();
	Context.context.arc(x, y, r, angle1, angle2);
	Context.context.fillStyle = color;
	Context.context.fill();
};
var keyboard = function() {
	this.left = false;
	this.right = false;
	this.up = false;
	this.down = false;
	this.w = false;
	this.a = false;
	this.s = false;
	this.d = false;
};

var KEY_LEFT = 37;
var KEY_RIGHT= 39;
var KEY_UP = 38;
var KEY_DOWN = 40;

var W = 87;
var A = 65;
var S = 83;
var D = 68;

var isShift = false;
window.key = null;

function InitializeKeyboard() {
	window.key = new keyboard();
	$(document).keydown(function(e) {
		if (e.keyCode == 16) { isShift = true; }
		if (e.keyCode == KEY_LEFT) { key.left = true; }
		if (e.keyCode == KEY_RIGHT) { key.right = true; }
		if (e.keyCode == KEY_UP) { key.up = true; }
		if (e.keyCode == KEY_DOWN) { key.down = true; }
		if (e.keyCode == W) { key.w = true; }
		if (e.keyCode == A) { key.a = true; }
		if (e.keyCode == S) { key.s = true; }
		if (e.keyCode == D) { key.d = true; }
	});
	$(document).keyup(function(e) {
		if (e.keyCode == 16) { isShift = false; }
		if (e.keyCode == KEY_LEFT) { key.left = false; }
		if (e.keyCode == KEY_RIGHT) { key.right = false; }
		if (e.keyCode == KEY_UP) { key.up = false; }
		if (e.keyCode == KEY_DOWN) { key.down = false; }
		if (e.keyCode == W) { key.w = false; }
		if (e.keyCode == A) { key.a = false; }
		if (e.keyCode == S) { key.s = false; }
		if (e.keyCode == D) { key.d = false; }
	});
};
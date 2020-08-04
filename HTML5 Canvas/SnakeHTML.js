(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFECCIAAhJQg0hRghhjQAAgOAQgKQAPgKAVAAQAcAAANAKQAOAKAJAZQAQAwAPBJIAdiXQANgOAkAAQAyAAAAAiQAAAugiBCQgeA4gTANIAABHQAAAcg2AAQg1AAAAgcgAiZCeQgsAAgTgPQgPgLAAgZIAAjnQAAgbA1AAQA1AAAAAbIgBDOIBDAAQALAIAAAVQAAAvg4AAgAoBCCIAAjuQAAgdAZgKQAYgJBAAAQBDAAAnAhQAnAhAAA5QgBA3ggAgQghAfg7AAQgOAAgKgCIAAAvQAAAcg2AAQg3AAAAgcgAmVARIAJAAQAlAAAAgsQABgrgvAAgACGCTQgLgJgDgXIgCgLIg8AAIgCAKQgFArgwAAQgaAAgNgNQgGgGgBgGQAcihAYhOQAPgwBHAAQBIAAAOAwQAxCUAABNQAAAng3AAQgcAAgNgKgABNgrIgFAhIgFAvIAoAAIgGgvIgEghQgEgXgGAAQgGAAgEAXg");
	this.shape.setTransform(-5.15,3.725);

	this.text = new cjs.Text("", "47px 'iCielCadena'", "#00CC00");
	this.text.textAlign = "center";
	this.text.lineHeight = 67;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(657.85,96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:3.725}}]}).to({state:[{t:this.shape,p:{y:3.725}}]},1).to({state:[{t:this.shape,p:{y:6.225}},{t:this.text}]},1).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AwHFxIAArhMAgPAAAIAALhg");
	this.shape_1.setTransform(-0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AwHFxIAArhMAgPAAAIAALhg");
	this.shape_2.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-36.8,813.1,199.89999999999998);


(lib.SnakePart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AizC0IAAlnIFnAAIAAFng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SnakePart, new cjs.Rectangle(-18,-18,36,36), null);


(lib.Replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJMC8QAAgdAagUIhbj6QAAgHAGgJQANgQAhAAQAsAAAQAnQAQAjARCIIAYi8QAMgVAngBQAfAAANAJQALAIAAAUQAAAmhlEaQgRATgpAAQgzAAAAgtgAjEDMIAAk9QAAgdA5gBQA5ABAAAdIAAAOQAMgsA2AAQBaAAAACTQAABOgkAoQghAlgygBQgXABgOgHIAAA0QAAAdg4AAQg6AAAAgdgAhSgwIAACKQAXAGAOgZQAMgXAAgkQAAgkgJgOQgIgMgTAAQgIAAgFACgAm/B6QgjgnAAg/QAAhPAngrQAmgpBBAAQA3ABAeAdQAeAdAAA0QAAAngPAVIiFAEQAHAvAzAAQAhAAAcgPQAWAIAAAdQAAAagYAQQgdATg4AAQhFAAglgogAl2gPIA4gFQACgGAAgHQAAgYgXAAQgegBgFArgAGOCIQgbAXgjgBQgpABgXgWQgUgTAAghQAAgnAbgSQAggVBOAAIABgbQAAgYgaAAQgMAAgVAJQgVAJgNAAQgsAAAAgxQAAgbAJgQQA2gZA6AAQBCABAdAWQAgAaAABBQAAAXgEAlIgEAsQAAAOAWgCQAIASgEARQgIAlg2gBQgrABgQgXgAFbA9QgDAGAAALQAAAVAWgBQALAAAIgIIAAgDIACgfQghADgHACgABmBXIAAkjQAAgcA4AAQA5AAAAAcIAAEYQAAANAWgCQAHASgEARQgHAlg3gBQhMAAAAhHgAplCPQgSgSgQg/IgZgBIAABBQAAAhg+gBQg/ABAAghIAAkRQAAghAegLQAbgLBJAAQBRgBAsAmQApAkAAA/QAAA6gkAiIAoBeQAAAJgJALQgQASgmAAQgmAAgPgPgAqggMIAJAAQAsAAAAgzQAAgug1AAg");
	this.shape.setTransform(0.325,0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJMC9QAAgeAagUIhbj6QAAgHAGgIQANgRAhABQAsgBAQAmQAQAlARCHIAYi8QAMgWAnABQAfAAANAIQALAIAAAUQAAAmhlEaQgRATgpAAQgzAAAAgsgAjEDNIAAk/QAAgcA5AAQA5AAAAAcIAAAQQAMgsA2AAQBaAAAACSQAABOgkAoQghAkgyAAQgXAAgOgFIAAA0QAAAcg4AAQg6AAAAgcgAhSgwIAACLQAXAEAOgYQAMgXAAgkQAAgkgJgOQgIgMgTAAQgIAAgFACgAm/B5QgjglAAhAQAAhQAngqQAmgoBBAAQA3AAAeAcQAeAeAAA0QAAAogPAUIiFAEQAHAwAzAAQAhAAAcgQQAWAJAAAbQAAAbgYAQQgdAUg4AAQhFgBglgpgAl2gQIA4gEQACgFAAgJQAAgYgXAAQgeAAgFAqgAGOCIQgbAWgjAAQgpAAgXgVQgUgUAAggQAAgnAbgSQAggVBOAAIABgaQAAgZgaAAQgMAAgVAJQgVAJgNAAQgsAAAAgxQAAgbAJgPQA2gZA6AAQBCgBAdAXQAgAaAABBQAAAXgEAkIgEAtQAAAOAWgCQAIASgEARQgIAkg2AAQgrAAgQgWgAFbA+QgDAFAAAMQAAATAWABQALgBAIgHIAAgEIACggQghAEgHADgABmBXIAAkjQAAgcA4AAQA5AAAAAcIAAEYQAAANAWgCQAHASgEARQgHAkg3AAQhMAAAAhHgAplCPQgSgSgQg+IgZgBIAABBQAAAfg+AAQg/AAAAgfIAAkTQAAggAegLQAbgMBJAAQBRABAsAlQApAkAAA/QAAA6gkAiIAoBeQAAAKgJAJQgQAUgmgBQgmAAgPgPgAqggNIAJABQAsAAAAgzQAAgtg1AAg");
	this.shape_1.setTransform(0.325,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AwmHbIAAu1MAhNAAAIAAO1g");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AwmHbIAAu1MAhNAAAIAAO1g");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.3,-47.5,212.6,95.1);


(lib.Food = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah/B/Qg0g0AAhLQAAhJA0g1QA2g1BJAAQBLAAA0A1QA1A1AABJQAABLg1A0Qg0A1hLAAQhJAAg2g1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Food, new cjs.Rectangle(-18,-18,36,36), null);


(lib.UI = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.btnPlay = new lib.start();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(-4.35,96.3);
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 2);

	this.text = new cjs.Text("Rắn săn mồi", "bold 74px 'iCiel Cadena'");
	this.text.textAlign = "center";
	this.text.lineHeight = 104;
	this.text.lineWidth = 419;
	this.text.parent = this;
	this.text.setTransform(-5.4,-131.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("EgxPgbDMBifAAAMAAAA2HMhifAAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AwHlwMAgPAAAIAALhMggPAAAg");
	this.shape_1.setTransform(-4.375,96.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgxPAbEMAAAg2HMBifAAAMAAAA2HgAwzU0MAgPAAAIAAriMggPAAAg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.btnPlay}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-317.6,-175.7,1023.1,435.09999999999997), null);


(lib.LoseUI = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.btnReplay = new lib.Replay();
	this.btnReplay.name = "btnReplay";
	this.btnReplay.setTransform(-5,88.8);
	new cjs.ButtonHelper(this.btnReplay, 0, 1, 2);

	this.txtLose = new cjs.Text("You lose!", "bold 74px 'iCiel Cadena'", "#FF0000");
	this.txtLose.name = "txtLose";
	this.txtLose.textAlign = "center";
	this.txtLose.lineHeight = 104;
	this.txtLose.parent = this;
	this.txtLose.setTransform(-3.75,-135.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(5,1,1).p("EgxPgbDMBifAAAMAAAA2HMhifAAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgxPAbEMAAAg2HMBifAAAMAAAA2HgAxYVTMAhNAAAIAAu2MghNAAAg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.txtLose},{t:this.btnReplay}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LoseUI, new cjs.Rectangle(-317.6,-175.7,635.3,351.5), null);


// stage content:
(lib.SnakeHTML = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		speed = 20;//speed of the snake
		var score;
		var vx;
		var vy;
		var gFood;
		var head;
		var SnakeDirection;
		var snake;
		var root = this;
		var isPlaying = false;
		
		this.loseUI.visible = false;
		
		
		function init() {
			console.log("init");
			root.UI.visible = false;
			//Initialize everything!
			vx = 1; vy = 0;
			score = 0;
			snake = new Array();
			SnakeDirection = "";
			//add food to the stage
			addFood();
			//add snakes head to the stage
			head = new lib.SnakePart();
			head.x = stage.canvas.clientWidth/2;
			head.y = stage.canvas.clientHeight/2;
			snake.push(head);
			root.addChild(head);
			isPlaying = true;
			
			window.onkeydown = userPressed.bind(this);
			createjs.Ticker.addEventListener("tick" , onEnterFrame);
			//ENTER_FRAME listener is attached to main class and not to the stage directly
		}
		
		this.UI.btnPlay.on("click", init);
		
		//init();
		
		//This function will add food to the stage
		function addFood() {
			gFood = new lib.Food();
			gFood.x = 36 + Math.random()*(stage.canvas.clientWidth-100);
			gFood.y = 36 + Math.random()*(stage.canvas.clientHeight-100);
			root.addChild(gFood);
		}
		//this function will reset the game
		this.loseUI.btnReplay.on("click", reset);
		
		function reset() {
			root.removeChild(gFood);
			addFood();
			head.x = stage.canvas.clientWidth/2;
			head.y = stage.canvas.clientHeight/2;
			vx = 1;vy = 0;
			
			for(var i = snake.length-1;i>0;--i){
				root.removeChild(snake[i]);
				snake.splice(i,1);
			}
			isPlaying = true;
			root.loseUI.visible = false;
		}
		function userPressed(event) {
			console.log("press", event);
			if(event.code == "ArrowLeft") {
			   SnakeDirection = "left";
			} else if (event.code == "ArrowRight") {
			   SnakeDirection = "right";
			} else if (event.code == "ArrowUp") {
				SnakeDirection = "up";
			} else if (event.code == "ArrowDown") {
				SnakeDirection = "down";
			}
		}
		function onKeyDown(event){
			if(event.code == "ArrowLeft"){
			   SnakeDirection = "left";
			} else if (event.code == "ArrowRight") {
			   SnakeDirection = "right";
			} else if (event.code == "ArrowUp") {
				SnakeDirection = "up";
			} else if (event.code == "ArrowDown") {
				SnakeDirection = "down";
			}
		}
		function onKeyUp(event) {
			if(event.code == "ArrowLeft"){
				SnakeDirection = "";
			}else if(event.code == "ArrowRight") {
				SnakeDirection = "";
			}else if(event.code == "ArrowUp") {
				SnakeDirection = "";
			}else if(event.code == "ArrowDown") {
				SnakeDirection = "";
			}
		}
		function onEnterFrame(event) {
			if(!isPlaying) return;
			console.log("enter frame");
			//setting direction of velocity
			if(SnakeDirection == "left" && vx != 1) {
				vx = -1;
				vy = 0;
			}else if(SnakeDirection == "right" && vx != -1) {
				vx = 1;
				vy = 0;
			}else if(SnakeDirection == "up" && vy != 1) {
				vx = 0;
				vy = -1;
			}else if(SnakeDirection == "down" && vy != -1) {
				vx = 0;
				vy = 1;
			}
			
			//collison with stage
			if(head.x - head.nominalBounds.width/2 <= 0){
				score = 0;
				isPlaying = false;
				root.loseUI.visible = true;
			}
			if(head.x + head.nominalBounds.width/2 >= stage.canvas.clientWidth){
				score = 0;
				isPlaying = false;
				root.loseUI.visible = true;
			}
			if(head.y - head.nominalBounds.height/2 <= 0){
				score = 0;
				isPlaying = false;
				root.loseUI.visible = true;
			}
			if(head.y + head.nominalBounds.height/2 >= stage.canvas.clientHeight){
				score = 0;
				isPlaying = false;
				root.loseUI.visible = true;
			}
			//move body of the snake
			for(var i = snake.length-1;i>0;--i){
				snake[i].x = snake[i-1].x;
				snake[i].y = snake[i-1].y;
			}
			//changing the position of snake's head
			head.x += vx*speed;
			head.y += vy*speed;
			//collision with tail
			for(var j = snake.length-1;j>=1;--j){
				if(snake[0].x == snake[j].x && snake[0].y == snake[j].y){
					isPlaying = false;
					root.loseUI.visible = true;
					break;
				}
			}
			//collision with food
			var p = head.localToLocal(0,0,gFood);
			if(head.hitTest(p.x, p.y)){
				score += 1;
				root.removeChild(gFood);
				addFood();
				var bodyPart = new lib.SnakePart();
				bodyPart.x = snake[snake.length - 1].x;
				bodyPart.y = snake[snake.length - 1].y;
				snake.push(bodyPart);
				root.addChild(bodyPart);
			}
			//display scores
			root.txtScore.text = score.toString();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Lose
	this.loseUI = new lib.LoseUI();
	this.loseUI.name = "loseUI";
	this.loseUI.setTransform(486.55,403.95);

	this.timeline.addTween(cjs.Tween.get(this.loseUI).wait(1));

	// UI
	this.UI = new lib.UI();
	this.UI.name = "UI";
	this.UI.setTransform(486.55,403.95);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

	// Score
	this.txtScore = new cjs.Text("", "bold 32px 'Arial Black'");
	this.txtScore.name = "txtScore";
	this.txtScore.textAlign = "center";
	this.txtScore.lineHeight = 47;
	this.txtScore.lineWidth = 105;
	this.txtScore.parent = this;
	this.txtScore.setTransform(929.5,32);

	this.timeline.addTween(cjs.Tween.get(this.txtScore).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(680.9,414,303.1,165.70000000000005);
// library properties:
lib.properties = {
	id: '0587C52DC99B7349838EBC61F42FF10E',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0587C52DC99B7349838EBC61F42FF10E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
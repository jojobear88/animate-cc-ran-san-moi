# [Animate CC] - Hướng dẫn làm game rắn săn mồi trên HTML5 Canvas

###### tags: `AnimateCC`, `HTML5 Canvas`

Link bài viết https://hackmd.io/DrhJ0JmTRUajYsiKoVRBzQ

Chào các bạn, hôm nay mình sẽ hướng dẫn các bạn làm một game rắn săn mồi đơn giản bằng AnimateCC trên HTML5 Canvas.

![Hình ảnh trò chơi](https://i.imgur.com/QNcg8En.png)

Về game rắn săn mồi, chắc mọi người đều đã từng một lần chơi qua rồi, một game thân thuộc với những game thủ nokia cục gạch. 

Nhưng chúng ta hãy cùng phân tích nhỏ nó ra nhé, game này có gì nào? Đó là 1 viên thức ăn và 1 con rắn sẽ dài ra mỗi khi nó được ăn (ez phải không nào?). Giờ hãy tạo 2 đối tượng này trên Animate CC nhé.

Về viên thức ăn, chúng ta hãy tạo một hình tròn màu đỏ, kích thước 36x36 và nhấn F8 (Export to symbol) để chuyển nó thành Movie clip. Ok, mình sẽ gọi cái này là 'Food'.
![](https://i.imgur.com/yDuJQDb.png)

Tiếp theo tạo một chú rắn nhỏ, vẽ một hình vuông màu xanh kích thước 36x36 và nhấn F8. Cái này mình sẽ đặt tên là 'SnakePart'.
![](https://i.imgur.com/RcUQDx6.png)

Thế là xong 2 đối tượng của trò chơi. Bây giờ chúng ta sẽ viết code để chúng thực hiện trò chơi nhé.

Tại cửa sổ Timeline, tạo 1 layer mới đặt là 'Main'. Sau đó nhấn F9 để mở cửa sổ Actions, ta sẽ code tại đây.
![](https://i.imgur.com/DcIECyh.png)

Trước tiên, hãy khai báo các đối tượng cần sử dụng cho trò chơi này đó chính là viên thức ăn và con rắn của chúng ta. 
```
var root = this;

var speed = 20; // speed of the snake
var vx, vy; // snake position
var gFood;
var head;
var SnakeDirection;
var snake;
```

Khá là tường mình ha. Tiếp theo chúng ta sẽ khởi tạo trạng thái ban đầu cho trò chơi bằng cách viết hàm init().
```
function init() {
    // Initialize everything!
    vx = 1; vy = 0;
    snake = new Array();
    SnakeDirection = "";
}

init(); // call init function
```

Ok, vậy là chúng ta đã có hàm init(), nhưng nó chưa thực hiện được gì mấy bởi vì cả rắn và thức ăn đều chưa có. Cùng viết hàm thêm thức ăn vào màn chơi nào.
```
function addFood() {
    gFood = new lib.Food(); // Call Food Movieclip from library
    root.addChild(gFood);
}
```

Nhớ gọi addFood() trong hàm init() để thêm cục thịt kia khi load màn nhé.
```
function init() {
    ...
    // Add food to stage
    addFood();
}
```

Rồi, vậy là cục thịt đã xuất hiện trên màn hình, nhưng nó nằm tít trên góc màn hình sao mà chơi, phải cho nó hiện random mới đúng tinh thần rắn săn mồi chứ nhỉ. Hãy bổ sung vào addFood tọa độ của viên thịt nào.
```
function addFood() {
    gFood = new lib.Food();
    gFood.x = 36 + Math.random()*(stage.canvas.clientWidth-100);
    gFood.y = 36 + Math.random()*(stage.canvas.clientHeight-100);
    root.addChild(gFood);
}
```

Số 36 ở đây chính là kích thước của viên thịt nha mọi người.

Sau khi đã thêm viên thịt thì ta cần thêm con rắn vào màn chơi. Viết hàm addSnake().
```
function addSnake() {
    head = new lib.SnakePart();
    head.x = stage.canvas.clientWidth/2;
    head.y = stage.canvas.clientHeight/2;
    snake.push(head);
    root.addChild(head);
}
```

Và gọi addSnake trong init().
```
function init() {
    ...
    // Add snake to stage
    addSnake();
}
```

Tiếp theo là thêm chuyển động cho con rắn. Chúng ta viết hàm onEnterFrame() và gán vào lắng nghe của ticker để hàm được gọi liên tục.

Tại hàm khởi tạo init() ta bổ sung vào cuối đoạn code
```
function init() {
    ...
    createjs.Ticker.addEventListener("tick" , onEnterFrame);
}
```

Và bắt đầu viết funtion onEnterFrame(). Trong hàm này chúng ta cần phải định nghĩa các luật chơi bao gồm: cách di chuyển của rắn, hành động khi rắn chạm tường, khi rắn ăn thức ăn. Hãy bắt đầu với thiết lập di chuyển của rắn.

Màn chơi được hình thành bởi 2 trục x và y. Và để xác định rắn sẽ đi theo chiều nào, chúng ta thiết lập như sau.
```
function onEnterFrame() {
    //setting direction of velocity
    if(SnakeDirection == "left" && vx != 1) {
        vx = -1;
        vy = 0;
    } else if(SnakeDirection == "right" && vx != -1) {
        vx = 1;
        vy = 0;
    } else if(SnakeDirection == "up" && vy != 1) {
        vx = 0;
        vy = -1;
    } else if(SnakeDirection == "down" && vy != -1) {
        vx = 0;
        vy = 1;
    }
}
```

Tiếp theo để di chuyển rắn, chúng ta hiểu rằng, con rắn khi tiến thêm 1 bước thì sẽ tạo thêm 1 cái đầu ở vị trí trước mặt, và xóa đi 1 đơn vị ở phần đuôi. Vậy ta có đoạn code sau.
```
function onEnterFrame() {
    ...
    //move body of the snake
    for(var i = snake.length-1; i>0; --i){
        snake[i].x = snake[i-1].x;
        snake[i].y = snake[i-1].y;
    }
    //changing the position of snake's head
    head.x += vx*speed;
    head.y += vy*speed;
}
```

Hãy định nghĩa cho việc rắn đập đầu vào tường.
```
function onEnterFrame() {
    //collison with stage
    if(head.x - head.nominalBounds.width/2 <= 0){
        reset();
    }
    if(head.x + head.nominalBounds.width/2 >= stage.canvas.clientWidth){
        reset();
    }
    if(head.y - head.nominalBounds.height/2 <= 0){
		reset();
	}
    if(head.y + head.nominalBounds.height/2 >= stage.canvas.clientHeight){
        reset();
	}
}
```

Okay, vậy là cứ đập vào tường là game reset. Hãy tiếp tục với sự kiện rắn cắn vào đuôi tương tự nhé.
```
function onEnterFrame() {
    ...
    //collision with tail
    for(var j = snake.length-1;j>=1;--j){
        if(snake[0].x == snake[j].x && snake[0].y == snake[j].y){
            reset();
            break;
		}
	}
}
```

Để xác định được khi nào rắn ăn được thức ăn, chúng ta phải xác định vị trí của rắn và thức ăn tại thời điểm đó trùng hoặc đè lên nhau. CreateJS hỗ trợ chúng ta một hàm mặc định đó là hitTest để xác định nếu 2 object có 'hit' nhau không? Nhưng hàm này cần phải xác định tọa độ của 1 object rồi so sánh nó với vật thể được chọn, vậy nên chúng ta cần tìm vị trí của 2 vật thể thông qua hàm localToLocal() trước.
```
function onEnterFrame() {
    ...
    //collision with food
    var p = head.localToLocal(0,0,gFood);
    if(head.hitTest(p.x, p.y)){
        root.removeChild(gFood);
        addFood();
        var bodyPart = new lib.SnakePart();
        bodyPart.x = snake[snake.length - 1].x;
        bodyPart.y = snake[snake.length - 1].y;
        snake.push(bodyPart);
        root.addChild(bodyPart);
	}
}
```

Vậy là đã xong việc khai báo luật chơi, giờ tới lúc chúng ta định nghĩa cho hàm reset() mà ta đang để trống bên trên rồi. Reset tức là tạo một viên thịt mới và cho con rắn về lại hình dạng 1 mẩu ban đầu của nó.
```
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
}
```

Gần xong rồi đó. Việc cuối cùng chính là cấu hình input từ bàn phím cho trò chơi.

Tại hàm init() ta thêm đoạn code này ở cuối hàm.
```
function init() {
    ...
    window.onkeydown = userPressed.bind(this);
}
```

Và viết hàm userPressed() để xử lý nó thôi.
```
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
```

Vậy là game rắn săn mồi đã hoàn thiện. Cùng chơi thử để thưởng thức thành quả thôi nào!

Bonus: các bạn có thể thêm UI thắng cuộc, thua cuộc và điểm số để trò chơi thêm sinh động nhé.

// 获取玩家和bgm的DOM节点，定义节流锁
var bgm = document.getElementsByTagName("audio")[0];
var player = document.getElementById("game-player");
var lock = true;

// 地图初始化，绘制地板
function mapInit() {
    var map;
    var floorBlocks = document.getElementsByClassName("game-floor");
    var gameWindow = document.getElementById("game-window");
    var floorBlockArr = [];
    for (let i = 0; i < gameWindow.offsetWidth % floorBlocks[0].offsetWidth; i++) {
        floorBlockArr.push(floorBlocks[0].cloneNode());
        gameWindow.appendChild(floorBlockArr[i]);
    }
}

// 定义玩家类
function Player() {
    this.LIFE = 1;
        this.X;
        this.speed = 10;
        this.dom;
        this.init();
        this.move();
}

// 定义玩家初始化方法
Player.prototype.init = function () {
    if (this.LIFE) {
        this.dom = player;
        this.X = 0;
    }
}

// 定义玩家移动方法
Player.prototype.move = function () {
    var self = this;

    document.onkeydown = function (event) {
        if (lock) {
            if (event.keyCode == 37) {
                if (self.X == 0) {
                    self.X = 0;
                } else {
                    self.X -= self.speed;
                    self.dom.style.left = self.X + "px";
                }
            } else if (event.keyCode == 39) {
                if (self.X == 570) {
                    self.X = 570;
                    var deadTime = new Date();
                    lock = false;
                    bgm.src = "music/死亡.mp3";
                    bgm.loop = "";
                    setTimeout(
                        function () {
                            player.style.left = "0px";
                            self.X = 0;
                            lock = true;
                            var reStartTime = new Date();
                            console.log(reStartTime - deadTime);
                            bgm.src = "music/近藤浩治 - 地上BGM.mp3";

                        }, 5000
                    )
                } else {
                    self.X += self.speed;
                    self.dom.style.left = self.X + "px";
                }
            }
        }
    }

}

// 地图初始化
mapInit();

// 创建玩家实例
new Player();




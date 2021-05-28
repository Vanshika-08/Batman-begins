var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30;
var man, manImg;
var thunder, thunderImg;
function preload(){
    manImg = preload(walking_1.png);
    thunderImg = preload(1.png, 2.png, 3.png, 4.png);
}

function setup(){
   createCanvas(1000, 1000);
   man.addImage = manImg;
man = createSprite(150, 1000, 5, 10);
}

function draw(){
    background("black");

    d1.display();
    d2.display();
    d3.display();
    d4.display();
    d5.display();
    d6.display();
    d7.display();
    d8.display();
    d9.display();
    d10.display();
    d11.display();
    d12.display();
    d13.display();
    d14.display();
    d15.display();
    d16.display();
    d17.display();
    d18.display();
    d19.display();
    d20.display();
    d21.display();
    d22.display();
    d23.display();
    d24.display();
    d25.display();
    d26.display();
    d27.display();
    d28.display();   
    d29.display();  
    d30.display();   

    if(this.rain.position.y > height){
        MutationObserver.body.setPosition(this.rain, {x : random(0, 400), y : random(0, 400)}
    }

    rand = Math.round(random(1, 4));
        if(frameCount%===0){
            thunderCreatedFrame = frameCount;
            thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
            switch (rand){
                case1 : thunder.addImage(thunder1);
                break;
                case2 : thunder.addImage(thunder2);
                break;
                default : break;
            }
            thunder.scale = random(0.3, 0.6);
        }
    
    drawSprites(); 
}   
 

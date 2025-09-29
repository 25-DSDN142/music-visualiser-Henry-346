function draw_one_frame(words, vocal, drum, bass, other, counter) {

   //Slider bar 
var vocalMap =map(vocal, 0,10,30,90);
var lengthOfLine = 140;
var lineStart = 525;
var lineEnd = lineStart+lengthOfLine;

 // disc
 background(20)
 let sunY = 350;
 let sunX = 250;
 let sunSize; 
 sunSize = map(drum, 10 , 100,200,500);

 // disc 
 fill(50)// grey
 ellipse(sunX,sunY,sunSize);

   //right side of screen 
   fill(50);
   rect(500,0,1000,720);

      //black rectangle 
      fill(10);
      rect(520,10,150,690);
      
        //grey rectangle
        fill(100);
        rect(690,530,570,170);

           //black rectangle inside of grey one
           fill(10);
           //rect(700,540,550,150);

//right rectangle rainbow 
let rectSize;
rectSize =map(bass, 20 ,100,100,500);
fill(10);
rect(700,540,550,150);

// squares on the right 
fill(100);
square(730,20,150,10)
square(900,20,150,10)
square(1070,20,150,10)

square(730,190,150,10)
square(900,190,150,10)
square(1070,190,150,10)
 
square(730,360,150,10)
square(900,360,150,10)
square(1070,360,150,10)



colorMode(HSB, 100);
strokeWeight(5);
stroke(drum,80,80);
for(var i =1; i <= vocalMap; i++){
  var lineStep = i+10;
  line(lineStart, lineStep, lineEnd, lineStep);
  }

}
//
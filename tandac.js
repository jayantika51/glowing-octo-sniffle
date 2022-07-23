status"";
img="";
objects="";

function preload()
{
img= loadImg('tv and ac.jpeg');
}

function setup()
{
    canvas = createCanvas(640, 420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHtml = "status:detecting objects";
}

function modelLoaded()
{
console.log("Model Loaded!");
status = true;
objectDetector.detect(image, gotResult);
}

function gotResult(error, result)
{
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
       
}

image(image, 0, 0, 380, 380);
   
    if(status !="")
    {
     r= random(255);
     g= random(255);
     b= random(255);
        objectDetector.detect(video,gotResult);
for(i = 0; i <objects.length; i++)
{
    document.getElementById("status").innerHTML="STATUS:object detected";
     document.getElementById("number_objects").innerHtml=""
    fill(r,g,b);
    percent=floor(objects[i].confidence * 100);
    text(objects[i].label+""+ percent +"%", objects[i].x + 15, objects[i].y +15);
    noFill();
    stroke("#e6177a");
    rect(objets[i].x, objects[i].width, objects[i].height);
}
    }
  
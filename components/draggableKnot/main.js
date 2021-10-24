var content = document.getElementById("content");
var knob = document.getElementById("knob");
var maxScroll = content.scrollHeight - content.offsetHeight;
var sections = 9;

//create a tween to scroll the content
var scrollTween = TweenMax.to(content, 5, {scrollTo:maxScroll, paused:true});

Draggable.create(knob, {
  type:"rotation",
  bounds:{minRotation:0, maxRotation:360},
  onDrag: function() {
    //use current rotation (a value between 0 and 360) to generate a value between 0 and 1 to pass to the progress of the scrollTween
    var progress = normalize(this.rotation, 0, 360);
    console.log("progress = ", progress);
    scrollTween.progress(progress);
  }
});

//returns a value between 0 and 1
//normalize(180, 0, 360) // returns 0.5
function normalize(value, min, max) {
  return (value - min) / (max - min);
}


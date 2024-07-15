AFRAME.registerComponent("play-on-click", {
  schema: {
    isPlaying: { type: "boolean", default: false }
  },

  init: function() {
    this.videoEl = this.el.getAttribute("material").src;
    this.onClick = this.onClick.bind(this);    
  },

  play: function() {
 //Task 2 add a event listener to play video
 window.addEventListener("click", this.onClick);

  },
  onClick: function(evt) {
//TAsk 3 add the code here
if (!this.videoEl) {
  return;
}

var isPlaying = this.el.getAttribute("play-on-click").isPlaying;

this.el.object3D.visible = true;

if (!isPlaying) {
  this.el.setAttribute("play-on-click", {
    isPlaying: true
  });
  this.videoEl.play();
} else {
  this.el.setAttribute("play-on-click", {
    isPlaying: false
  });
  this.videoEl.pause();

}
  }
});


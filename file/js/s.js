var slideshow = document.getElementById("slideshow"),
  imgs = slideshow.getElementsByTagName("img"), //得到图片们
  current = 0;
imgs[current].className = "active";

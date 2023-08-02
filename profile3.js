function checkVisibility() {
    var images = document.querySelectorAll(".img");
    images.forEach(function (image) {
      var imageTop = image.getBoundingClientRect().top;
      var imageBottom = image.getBoundingClientRect().bottom;
      var windowHeight = window.innerHeight;
  
      if (imageTop < windowHeight && imageBottom > 0) {
        image.classList.add("visible");
      } else {
        image.classList.remove("visible");
      }
    });
  }
  
  // スクロールイベントのリスナー
  window.addEventListener("scroll", checkVisibility);
  
  // 初回ロード時にもチェック
  checkVisibility();
  
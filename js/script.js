var currentImage = 0;
            var images = document.getElementsByClassName('carousel-image');
        
            function showImage(index) {
              if (index < 0) {
                index = images.length - 1;
              } else if (index >= images.length) {
                index = 0;
              }
        
              for (var i = 0; i < images.length; i++) {
                images[i].style.transform = 'translateX(' + ((i - index) * 100) + '%)';
              }
        
              currentImage = index;
            }
        
            function previousImage() {
              showImage(currentImage - 1);
            }
        
            function nextImage() {
              showImage(currentImage + 1);
            }
        
            showImage(currentImage); 
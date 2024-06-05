document.addEventListener('DOMContentLoaded', function() {
  var headers = document.querySelectorAll('.accordion-header');

  console.log("DOMContentLoaded event fired");
  console.log("Number of accordion headers found:", headers.length);

  headers.forEach(function(header, index) {
    console.log("Adding click event listener to accordion header", index);
    header.addEventListener('click', function() {
      var content = this.nextElementSibling;
      var toggleImage = this.querySelector('.toogleImage');

      content.classList.toggle('hidden');

      if (content.classList.contains('hidden')) {
        toggleImage.src = 'images/icon-plus.svg';
      } else {
        toggleImage.src = 'images/icon-minus.svg';
      }
    });
  });
});

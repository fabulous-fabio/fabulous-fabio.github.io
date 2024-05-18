const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

$(document).ready(function() {
  $('.carousel-container').each(function() {
    var $carousel = $(this).find('.about-me__img');
    var $items = $carousel.find('.item');
    var $nextBtn = $(this).find('.next-btn');

    // Initial set the first item as active
    $items.first().addClass('active');

    $nextBtn.on('click', function() {
      var $current = $items.filter('.active');
      var $next = $current.next('.item');

      // If there is no next item, start from the first item
      if ($next.length === 0) {
        $next = $items.first();
      }

      $current.removeClass('active');
      $next.addClass('active');
    });
  });
});

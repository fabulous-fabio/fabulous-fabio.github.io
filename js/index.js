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
    var $prevBtn = $(this).find('.prev-btn');
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

    $prevBtn.on('click', function() {
      var $current = $items.filter('.active');
      var $prev = $current.prev('.item');

      // If there is no next item, start from the first item
      if ($prev.length === 0) {
        $prev = $items.last();
      }

      $current.removeClass('active');
      $prev.addClass('active');
    });

  });


  $('.skill').each(function() {
    var $prevBtn = $(this).find('.extend-button');
    var $text = $(this).find('.skills-info');

    $prevBtn.on('click', function() {
      // Toggle 'active' class on the text element
      $text.toggleClass('active');

      if ($text.hasClass('active')) {
        $prevBtn.text('^');  // Change button text to '^' when text is visible
        $(this).css({
          "padding": "10px",
          "background-color": "var(--clr-light)",
          "border-radius": "11px",
          "box-shadow": "var(--bs)",
          "display": "grid",
          "grid-template-areas": `
            'title button'
            'text text'
          `,
          "grid-template-columns": "80% 1fr",
          "grid-column-gap": ".5em",
          "grid-row-gap": ".4em"
        });
      } else {
        $prevBtn.text('v');  // Change button text to 'v' when text is hidden
        $(this).css({
          "padding": "10px",
          "background-color": "var(--clr-light)",
          "border-radius": "11px",
          "box-shadow": "var(--bs)",

          "display": "grid",
          "grid-template-areas":
            'title button',
          "grid-template-columns": "80% 1fr",
          "grid-column-gap": ".5em",
          "grid-row-gap": ".4em"
        });
      }
    });
  });
});

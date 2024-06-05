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

function getDistanceToTop(element) {
  // Get the bounding rectangle of the element
  var rect = element.getBoundingClientRect();
  // Calculate the distance from the top of the viewport to the top of the element
  var distance = rect.top + window.scrollY;
  return distance;
}

$(document).ready(function() {


  // scroll propertys
  function windowScroll() {
    var st = $(document).scrollTop();
    let C = 70;
    console.log(st);
    
    

    let windowHeight = $(window).height();

    let destinyAdaption = windowHeight / 2;;;

    let C1 = $(".timeline-1").offset().top;
    let C2 = $(".timeline-2").offset().top;
    let C3 = $(".timeline-3").offset().top;
    let C4 = $(".timeline-4").offset().top;
    let C5 = $(".timeline-5").offset().top;

    let objectlist = [C1, C2, C3, C4, C5]

    for (let i = 0; i < objectlist.length; i++) {
      if (i%2 == 0) {
        if (0 >= -.5 * (objectlist[i] - destinyAdaption - st)){
          $(".timeline-"+ (i+1)).css({"margin-left": -.5 * (objectlist[i] - destinyAdaption - st) + "px"});
        }
      } else {
        if (-10 >= -.5 * (objectlist[i] - destinyAdaption - st)){
          $(".timeline-"+ (i+1)).css({"margin-right": -.5 * (objectlist[i] - destinyAdaption - st) + "px"});
        }
      }
    }
    
    


  }
  $(document).scroll(function(){
    windowScroll();
  })




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

    $('ul').on('click', '.filter-item:not(.active)', function() {
      console.log("not active");

      // Entfernt die 'active' Klasse von allen Listenelementen
      $('.filter-item').removeClass('active');
      $('.cancel-filter').removeClass('active');
      $(".project").removeClass('active');

      // Fügt die 'active' Klasse dem geklickten Listenelement hinzu
      $(this).addClass('active');

      // Liest das data-item Attribut aus
      var dataItem = $(this).data('item');

      // Entfernt die 'allvisible' Klasse von allen Projekten
      $(".project").removeClass('allvisible');

      // Fügt die 'active' Klasse den entsprechenden Projekten hinzu
      $(".project." + dataItem).addClass('active');

      // Zeigt das cancel-filter Element an
      $('.cancel-filter.' + dataItem).addClass('active');
  });

  // Event-Delegation für das Deaktivieren eines active filter-item
  $('ul').on('click', '.filter-item.active', function() {
      console.log("deactivate...")

      // Entfernt die 'active' Klasse vom geklickten Listenelement
      $(this).removeClass('active');
      if ( $('.filter-item.active').length === 0) {
        $('.project').addClass('allvisible');
      }
      // Liest das data-item Attribut aus
      var dataItem = $(this).data('item');

      // Entfernt die 'active' Klasse von den entsprechenden Projekten
      $(".project." + dataItem).removeClass('active');

      // Entfernt die 'active' Klasse vom cancel-filter Element
      $('.cancel-filter.' + dataItem).removeClass('active');
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
    var $skill = $(this);
    console.log("skill: " + $skill)
    $prevBtn.on('click', function() {
      // Toggle 'active' class on the text element

      $text.toggleClass('active');

      if ($text.hasClass('active')) {
        $prevBtn.text('^');  // Change button text to '^' when text is visible
        $skill.css({
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
          "grid-row-gap": ".4em",
          "max-height": "350px"
        });
      } else {
        $prevBtn.text('v');  // Change button text to 'v' when text is hidden
        $skill.css({
          "padding": "10px",
          "background-color": "var(--clr-light)",
          "border-radius": "11px",
          "box-shadow": "var(--bs)",

          "display": "grid",
          "grid-template-areas":
            'title button',
          "grid-template-columns": "80% 1fr",
          "grid-column-gap": ".5em",
          "grid-row-gap": ".4em",
          "max-height": "25px"
        });
      }
    });
  });
});


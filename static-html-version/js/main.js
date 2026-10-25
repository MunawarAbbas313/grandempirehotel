// Grand Empire Hotel — site scripts
(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Fade-in sections as they scroll into view
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Gallery lightbox
  var box = document.querySelector('.lightbox');
  if (box) {
    var boxImg = box.querySelector('img');
    document.querySelectorAll('.gallery a').forEach(function (a) {
      a.addEventListener('click', function (ev) {
        ev.preventDefault();
        boxImg.src = a.getAttribute('href');
        boxImg.alt = a.querySelector('img').alt;
        box.classList.add('open');
      });
    });
    box.addEventListener('click', function (ev) {
      if (ev.target !== boxImg) box.classList.remove('open');
    });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') box.classList.remove('open');
    });
  }

  // Booking form -> sends the details to WhatsApp (no server needed)
  var form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var f = form.elements;
      var msg = 'Assalam o Alaikum, I want to book at Grand Empire Hotel.%0A' +
        '*Name:* ' + encodeURIComponent(f.name.value) + '%0A' +
        '*Phone:* ' + encodeURIComponent(f.phone.value) + '%0A' +
        '*Stay type:* ' + encodeURIComponent(f.stay.value) + '%0A' +
        '*Check-in:* ' + encodeURIComponent(f.checkin.value || '-') + '%0A' +
        '*Check-out:* ' + encodeURIComponent(f.checkout.value || '-') + '%0A' +
        '*Guests:* ' + encodeURIComponent(f.guests.value) + '%0A' +
        '*Message:* ' + encodeURIComponent(f.message.value || '-');
      window.open('https://wa.me/923199193124?text=' + msg, '_blank');
    });
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

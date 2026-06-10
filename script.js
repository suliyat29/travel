const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// hamburger toggle
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// mobile dropdown toggle
document.querySelectorAll(".nav-item.has-dropdown > a").forEach(link => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.parentElement.classList.toggle("active");
    }
  });
});




const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});



// ================= MAP =================

    const map = L.map('map').setView([39.7392, -104.9903], 5);

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; OpenStreetMap contributors'
      }
    ).addTo(map);

    let marker;

    // ================= SEARCH LOCATION =================

    async function searchLocation(){

      const destination =
        document.getElementById('destinationInput').value;

      if(destination === '') return;

      try{

        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${destination}`
        );

        const data = await response.json();

        if(data.length === 0){

          alert('Location not found');
          return;
        }

        const lat = data[0].lat;
        const lon = data[0].lon;

        map.setView([lat, lon], 11);

        if(marker){
          map.removeLayer(marker);
        }

        marker = L.marker([lat, lon])
          .addTo(map)
          .bindPopup(destination)
          .openPopup();

      }

      catch(error){

        console.log(error);
        alert('Something went wrong');

      }

    }

    document
      .getElementById('searchBtn')
      .addEventListener('click', searchLocation);



      // Discoveries Slider


      const track = document.getElementById("track");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

const cards = document.querySelectorAll(".card");

nextBtn.addEventListener("click", () => {

    if(currentIndex < cards.length - 3){

        currentIndex++;

        track.style.transform =
        `translateX(-${currentIndex * 405}px)`;
    }

});

prevBtn.addEventListener("click", () => {

    if(currentIndex > 0){

        currentIndex--;

        track.style.transform =
        `translateX(-${currentIndex * 405}px)`;
    }

});

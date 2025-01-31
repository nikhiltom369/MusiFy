document.addEventListener("DOMContentLoaded", () => {
  const welcomePage = document.getElementById("welcome-page");
  const musicPage = document.getElementById("music-page");
  const getStartedBtn = document.getElementById("get-started");
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");  // Added About link reference
  const musicContainer = document.getElementById("music-container");
  const aboutSection = document.getElementById("about-section"); // Added About section reference

  const musicData = [
      {
          artist: "Kapil Kapilan & Sanah Moidutty",
          title: "Edan Poove",
          releaseDate: "07-June-2024",
          album: "Little Hearts",
          image: "love.jpeg",
          youtube: "https://www.youtube.com/watch?v=gAcw4WUqHnQ",
          spotify: "https://open.spotify.com/search/edan%20poove",
          jiosaavn: "https://www.jiosaavn.com/search/song/edan%20poove",
      },
      {
        artist: "Sushin Shyam & Dabzee",
        title: "Illuminati",
        releaseDate: "11-April-2024",
        album: "Aavesham",
        image: "iluminati.jpg",
        youtube: "https://www.youtube.com/watch?v=gAcw4WUqHnQ",
        spotify: "https://open.spotify.com/track/1a1xLj9W8libnO9PvJf6ao",
        jiosaavn: "https://www.jiosaavn.com/song/illuminati/ByoMciVhaAU",
    },
    {
      artist: "Electronic Kili",
      title: "Eyy Banane",
      releaseDate: "15-October-2024",
      album: "Vaazha",
      image: "vazha.jpg",
      youtube: "https://www.youtube.com/watch?v=e1BHIY9p2WU",
      spotify: "https://open.spotify.com/search/ey%20banane",
      jiosaavn: "https://www.jiosaavn.com/song/eyy-banane/BQc4UxJIX1o",
  },
      {
          artist: "KS Harisankar",
          title: "Kiliye",
          releaseDate: "12-September-2024",
          album: "ARM",
          image: "images.jpeg",
          youtube: "https://www.youtube.com/watch?v=B2UBMTA57JI",
          spotify: "https://open.spotify.com/search/kiliye",
          jiosaavn: "https://www.jiosaavn.com/song/kiliye/Ai8SBR4IB3k",
      },
  ];

  function showMusicPage() {
      welcomePage.classList.add("hidden");
      musicPage.classList.remove("hidden");
      aboutSection.classList.add("hidden"); // Hide About section if shown
  }

  function showWelcomePage() {
      musicPage.classList.add("hidden");
      welcomePage.classList.remove("hidden");
      aboutSection.classList.add("hidden"); // Hide About section if shown
  }

  function showAboutSection() {
      musicPage.classList.add("hidden");
      welcomePage.classList.add("hidden");
      aboutSection.classList.remove("hidden"); // Show the About section
  }

  getStartedBtn.addEventListener("click", showMusicPage);
  homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      showWelcomePage();
  });

  aboutLink.addEventListener("click", (e) => {
      e.preventDefault();
      showAboutSection();
  });

  function createMusicBox(music) {
      const musicBox = document.createElement("div");
      musicBox.className = "music-box";
      musicBox.innerHTML = `
              <img src="${music.image}" alt="${music.title}">
              <h3>${music.title}</h3>
              <p>Artist: ${music.artist}</p>
              <p>Release Date: ${music.releaseDate}</p>
              <p>Album: ${music.album}</p>
              <button class="btn listen-now">Listen Now</button>
          `;

      const listenNowBtn = musicBox.querySelector(".listen-now");
      listenNowBtn.addEventListener("click", () => showModal(music));

      return musicBox;
  }

  function showModal(music) {
      const modal = document.createElement("div");
      modal.className = "modal";
      modal.innerHTML = `
              <div class="modal-content">
                  <span class="close">&times;</span>
                  <h2>Choose a platform</h2>
                  <button class="platform-btn youtube">YouTube</button>
                  <button class="platform-btn spotify">Spotify</button>
                  <button class="platform-btn jiosaavn">JioSaavn</button>
              </div>
          `;

      document.body.appendChild(modal);
      modal.style.display = "block";

      const closeBtn = modal.querySelector(".close");
      closeBtn.onclick = () => {
          modal.style.display = "none";
          modal.remove();
      };

      window.onclick = (event) => {
          if (event.target == modal) {
              modal.style.display = "none";
              modal.remove();
          }
      };

      const youtubeBtn = modal.querySelector(".youtube");
      const spotifyBtn = modal.querySelector(".spotify");
      const jiosaavnBtn = modal.querySelector(".jiosaavn");

      youtubeBtn.onclick = () => window.open(music.youtube, "_blank");
      spotifyBtn.onclick = () => window.open(music.spotify, "_blank");
      jiosaavnBtn.onclick = () => window.open(music.jiosaavn, "_blank");
  }

  musicData.forEach((music) => {
      const musicBox = createMusicBox(music);
      musicContainer.appendChild(musicBox);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const musicsData = [
    {
      name: "Forró dos Gays",
      artist: "Caçarola",
      image: "./img/musica-caçarola.jpg",
    },
    {
      name: "Boyola",
      artist: "Caçarola",
      image: "./img/musica-caçarola.jpg",
    },
    {
      name: "Umbú Azêdo",
      artist: "Caçarola",
      image: "./img/musica-caçarola3.jpg",
    },
    {
      name: "Nossa Canção / Pão Com Chá",
      artist: "Caçarola",
      image: "./img/musica-caçarola2.jpg",
    },
    {
      name: "A Masoquista",
      artist: "Caçarola",
      image: "./img/musica-caçarola3.jpg",
    },
    {
      name: "Pipoca com Sal",
      artist: "Caçarola",
      image: "./img/musica-caçarola4.jpg",
    },
    {
      name: "Junimos",
      artist: "Moki",
      image: "./img/musica-moki.jpg",
    },
  ];

  const artistsData = [
    { name: "Palhaço Caçarola", image: "./img/artista-caçarola.jpg" },
    { name: "DJ Caçarola", image: "./img/artista-dj-caçarola.jpg" },
    { name: "Palhaço Caçarock", image: "./img/artista-caçarock.jpg" },
    { name: "Padre Caçarola", image: "./img/artista-padre-caçarola.jpg" },
    { name: "MC Caçarola", image: "./img/artista-mc-caçarola.jpg" },
    { name: "Nego Caçarola", image: "./img/artista-nego-caçarola.jpg" },
    { name: "Moki", image: "./img/artista-moki.jpg" },
  ];

  const albumsData = [
    {
      name: "Ói Eu Aqui de Novo",
      artist: "Caçarola",
      image: "./img/album-oi-eu-aqui-de-novo.jpg",
    },
    {
      name: "O Clone",
      artist: "Caçarola",
      image: "./img/album-o-clone.jpg",
    },
    {
      name: "O Incopiável",
      artist: "Caçarola",
      image: "./img/album-incopiavel.jpg",
    },
    {
      name: "Picadeiro do Caos - Vol. 1",
      artist: "Palhaço Caçarock",
      image: "./img/album-picadeiro-do-caos.jpg",
    },
    {
      name: "Deus Abençôa o Mandrake",
      artist: "MC Caçarola",
      image: "./img/album-abençôa-o-mandrake.jpg",
    },
    {
      name: "O Evangelho do Sucesso",
      artist: "Padre Caçarola",
      image: "./img/album-louvores-caçarola.jpg",
    },
    {
      name: "Wealthy Farmers - Life Style",
      artist: "Moki & BaBaK",
      image: "./img/album-moki.png",
    },
  ];

  const artistGrid = document.querySelector(".artists-grid");
  const albumsGrid = document.querySelector(".albums-grid");
  const musicsGrid = document.querySelector(".musics-grid");
  console.log(musicsGrid);

  artistsData.forEach((artist) => {
    const artistCard = document.createElement("div");
    artistCard.classList.add("artist-card");

    artistCard.innerHTML = `
    <img src="${artist.image}" alt="imagem do ${artist.name}">
    <button class="play-button">
    <i class="fa-solid fa-play"></i>
    </button>
    <div>
      <h3>${artist.name}</h3>
      <p>Artista</p>
    </div>
    `;
    artistGrid.appendChild(artistCard);
  });

  albumsData.forEach((album) => {
    const albumCard = document.createElement("div");
    albumCard.classList.add("album-card");

    albumCard.innerHTML = `
    <img src="${album.image}" alt="imagem do ${album.name}">
    <button class="play-button">
    <i class="fa-solid fa-play"></i>
    </button>
    <div>
      <h3>${album.name}</h3>
      <p>${album.artist}</p>
    </div>
    `;
    albumsGrid.appendChild(albumCard);
  });

  musicsData.forEach((music) => {
    const musicCard = document.createElement("div");
    musicCard.classList.add("music-card");

    musicCard.innerHTML = `
    <img src="${music.image}" alt="imagem do ${music.name}">
    <button class="play-button">
    <i class="fa-solid fa-play"></i>
    </button>
    <div>
      <h3>${music.name}</h3>
      <p>${music.artist}</p>
    </div>
    `;
    musicsGrid.appendChild(musicCard);
  });

  const sucessoButton = document.querySelector("#sucesso");
  const sucessoAudio = new Audio("./botao-sucesso.mp3");

  sucessoButton.addEventListener("click", () => {
    sucessoAudio.currentTime = 0;
    sucessoAudio.play();
  });

  const abrirModal = document.querySelector("#abrirModal");
  const fecharModal = document.querySelector("#fecharModal");
  const modalSaibaMais = document.querySelector("#modalSaibaMais");

  abrirModal.addEventListener("click", () => {
    modalSaibaMais.classList.add("ativo");
  });
  fecharModal.addEventListener("click", () => {
    modalSaibaMais.classList.remove("ativo");
  });
});

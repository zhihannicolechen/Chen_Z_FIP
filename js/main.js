(() => {
  const icon = document.querySelectorAll('.iconContainer'),
        photos = document.getElementById('images1'),
        beerName = document.querySelector('#name'),
        beerInfo = document.querySelector('.beerInfo');

    let currentPerson = '';

  const beerText = [
    `Gas-X contains dimethicone, which breaks down air bubbles in the digestive tract. This can quickly relieve symptoms of gas and bloating. It breaks up air bubbles in the stomach by allowing them to clump together more easily for easier passage and quicker relief. Simethicone provides quick relief from many symptoms of gas and bloating, such as fullness, stress, and of course, gas. Gas-X helps break down air bubbles in your digestive tract, so your body can process gas naturally, rather than other products that need to be actively taken before gas occurs.`,

    `Everyone’s biochemistry is a little different, so speed of gas relief may vary by person. But, in general, Gas-X relieves pressure, bloating, fullness and discomfort caused by excess stomach and intestinal gas in minutes. If you have prolonged discomfort, it’s best to consult with your doctor, just in case.`

  ]


  function animatePhotos() {

    photos.style.right = `${this.dataset.offset * 700}px`;
    getMemberText(this.classList, this.dataset.offset);

    currentPerson = this.classList[1];
  }

  function getMemberText(person, index) {
    console.log(person[1]);

    beerName.textContent = `${person[1]}`;

    beerInfo.textContent = beerText[index];
  }

  icon.forEach(icon => icon.addEventListener('click', animatePhotos));


})();

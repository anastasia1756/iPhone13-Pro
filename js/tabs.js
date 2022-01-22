const tabsFunc = () => {
  const tabsRef = document.querySelectorAll('.card-detail__change');
  const tabsTitleRef = document.querySelector('.card-details__title');
  const priceRef = document.querySelector('.card-details__price');
  const imgRef = document.querySelector('.card__image_item');
  const titleRef = document.querySelector('title');

  const tabsOptions = [
    {
      name: 'Graphit',
      memory: '128',
      price: 60000,
      image: 'img/iPhone-graphite.webp',
    },
    {
      name: 'Silver',
      memory: '256',
      price: 65000,
      image: 'img/iPhone-silver.webp',
    },
    {
      name: 'Sierra Blue',
      memory: '512',
      price: 70000,
      image: 'img/iPhone-sierra_blue.webp',
    },
  ];

  const changeContent = idx => {
    const { memory, name, price, image } = tabsOptions[idx];

    tabsTitleRef.textContent = `Смартфон Apple iPhone 13 Pro ${memory}GB ${name}`;
    priceRef.textContent = `${price}₽`;
    imgRef.setAttribute('src', image);
    titleRef.textContent = `${name} iPhone`;
  };

  changeActiveTabs = idxClickedTab => {
    tabsRef.forEach((tab, idx) => {
      tab.classList.remove('active');

      if (idx === idxClickedTab) {
        tab.classList.add('active');
      }
    });

    changeContent(idxClickedTab);
  };
  tabsRef.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      changeActiveTabs(idx);
    });
  });
  changeContent(0);
};

tabsFunc();

const accordeon = () => {
  const itemsRef = document.querySelectorAll('.characteristics__item');

  itemsRef.forEach(item => {
    const buttonRef = item.querySelector('.characteristics__title');
    const descRef = item.querySelector('.characteristics__description');
    buttonRef.addEventListener('click', () => {
      if (descRef.classList.contains('open')) {
        descRef.style.height = '';
      } else {
        descRef.style.height = descRef.scrollHeight + 'px';
      }
      descRef.classList.toggle('open');
      buttonRef.classList.toggle('active');
    });
  });
};
accordeon();

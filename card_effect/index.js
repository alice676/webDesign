function flipCard(card) {
    if (card.classList.contains('flip')) {
      card.classList.remove('flip');
    } else {
      card.classList.add('flip');
    }

    const cardInner = card.querySelector('.card-inner');
    const cardBack = card.querySelector('.card-back');

    if (card.classList.contains('flip')) {
      cardInner.style.transform = 'rotateY(180deg)';
      cardBack.style.display = 'block';
    } else {
      cardInner.style.transform = 'rotateY(0)';
      cardBack.style.display = 'none';
    }
  }

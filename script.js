const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});


const drinksData = [
    {
      photo: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Caramel Macchiato',
      price: '$4.99'
    },
    {
      photo: 'https://images.unsplash.com/photo-1520031607889-97ba0c7190ff?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Iced Mocha',
      price: '$5.49'
    },
    {
      photo: 'https://images.unsplash.com/photo-1683122925249-8b15d807db4b?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Vanilla Latte',
      price: '$4.29'
    },
    {
      photo: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Espresso Con Panna',
      price: '$3.99'
    },
    {
      photo: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Cappuccino',
      price: '$4.59'
    },
    {
      photo: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Iced Americano',
      price: '$3.79'
    },
    {
      photo: 'https://images.unsplash.com/photo-1537188531050-d32d2ae14865?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Chai Latte',
      price: '$4.89'
    },
    {
      photo: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Flat White',
      price: '$4.49'
    },
    {
      photo: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Matcha Latte',
      price: '$5.19'
    }
  ];


  const cardContainer = document.querySelector('.card-container');

drinksData.forEach(drink => {
  const card = document.createElement('div');
  card.classList.add('drink-card');

  const image = document.createElement('img');
  image.src = drink.photo;
  image.alt = drink.name;

  const content = document.createElement('div');
  content.classList.add('content');

  const name = document.createElement('h3');
  name.textContent = drink.name;

  const price = document.createElement('p');
  price.textContent = drink.price;

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');

  const buyButton = document.createElement('a');
  buyButton.href = '#';
  buyButton.classList.add('btn', 'btn-buy');
  buyButton.textContent = 'Buy Now';

  const rateButton = document.createElement('a');
  rateButton.href = '#';
  rateButton.classList.add('btn', 'btn-rate');
  rateButton.textContent = 'Rate';

  buttons.appendChild(buyButton);
  buttons.appendChild(rateButton);

  content.appendChild(name);
  content.appendChild(price);
  content.appendChild(buttons);

  card.appendChild(image);
  card.appendChild(content);

  cardContainer.appendChild(card);
});





// slider 
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide, index) => {
    if (index === n) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide(currentSlide);





const signInModal = document.getElementById('signInModal');
const signUpModal = document.getElementById('signUpModal');


const signInBtn = document.querySelector('a[href="#signin"]');
const signUpBtn = document.querySelector('a[href="#signup"]');


const closeSpans = document.querySelectorAll('.close');


signInBtn.addEventListener('click', function(event) {
  event.preventDefault(); 
  signInModal.style.display = 'block';
});


signUpBtn.addEventListener('click', function(event) {
  event.preventDefault(); 
  signUpModal.style.display = 'block';
});


closeSpans.forEach(function(span) {
  span.addEventListener('click', function() {
    signInModal.style.display = 'none';
    signUpModal.style.display = 'none';
  });
});


window.addEventListener('click', function(event) {
  if (event.target == signInModal || event.target == signUpModal) {
    signInModal.style.display = 'none';
    signUpModal.style.display = 'none';
  }
});
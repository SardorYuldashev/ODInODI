const products = [
  {
    id: '0004',
    article: `TC0004`,
    title: "Bosch",
    description: "Sochlaringizga maxsus ishlov bering. Go'zallik uchun maxsus takli",
    price: 58000,
    image: "../products/images/technics0004.jpg"
  },
  {
    id: '0003',
    article: `TC0003`,
    title: "Zakolka",
    description: "Sochingiz uchun bejirim zakolkalar. Eng arzon narxlarda",
    price: 58000,
    image: "../products/images/technics0003.jpg"
  },
  {
    id: '0002',
    article: `TC0002`,
    title: "Yuz uchun rolik",
    description: "Siz va sizning yaqinlaringiz uchun maxsus yuz uchun rolik. Sifatli maxsulot",
    price: 58000,
    image: "../products/images/technics0002.jpg"
  },
  {
    id: '0001',
    article: `TC0001`,
    title: "Tish pasta va anjomlar uchun idish",
    description: "Har kuni tongdan farzandlaringizga quvnoq kayfiyat ulashing",
    price: 58000,
    image: "../products/images/technics0001.jpg"
  }
]

































// ******************* Bu kodlarga tegilmasin**************************
const box = document.querySelector('.page__content-box')

if (products.length === 0) {
  box.innerHTML = `
  <h2 class="page__content-pusto">
    Bu bo'limda maxsulotlar xali mavjud emas
  </h2>
  `
} else {

  box.innerHTML = ''
  products.forEach(item => {
    const card = createCard(item.image, item.title, item.description, item.price, item.article)
    box.append(card)
  })

  function createCard(imgUrl, cardTitle, itemDescription, itemPrice, itemArticle) {
    const card = document.createElement('div');
    card.classList.add('page__content-card');
    const imgBox = document.createElement('div');
    imgBox.classList.add('page__content-imgBox');
    const img = document.createElement('img');
    img.classList.add('page__content-img');
    img.setAttribute('src', imgUrl);
    img.setAttribute('alt', `${cardTitle}`);
    imgBox.append(img);
    const info = document.createElement('div');
    info.classList.add('page__content-info');
    const title = document.createElement('abbr');
    title.classList.add('page__content-title');
    title.setAttribute('title', cardTitle)
    title.textContent = cardTitle;
    const description = document.createElement('abbr');
    description.classList.add('page__content-description');
    description.setAttribute('title', itemDescription);
    description.textContent = itemDescription;
    const bottom = document.createElement('div');
    bottom.classList.add('page__content-bottom');
    const article = document.createElement('p');
    article.classList.add('page__content-article');
    article.innerHTML = `ART: ${itemArticle}`;
    const price = document.createElement('p');
    price.classList.add('page__content-price');
    price.innerHTML = `Narxi: <span>${itemPrice}</span> so'm`;
    bottom.append(article)
    bottom.append(price)
    info.append(title)
    info.append(description)
    info.append(bottom)
    card.append(imgBox);
    card.append(info)
    return card
  }
}
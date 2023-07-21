const products = [
  {
    id: '0015',
    article: `CS0015`,
    title: "Tush",
    description: "Yuz uchun maxsus maska",
    price: 58000,
    image: "../products/images/cosmetics0015.jpg"
  },
  {
    id: '0014',
    article: `CS0014`,
    title: "Tush",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 58000,
    image: "../products/images/cosmetics0014.jpg"
  },
  {
    id: '0013',
    article: `CS0013`,
    title: "Kiprik uchun tush",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 58000,
    image: "../products/images/cosmetics0013.jpg"
  },
  {
    id: '0012',
    article: `CS0012`,
    title: "Yuz uchun skrab",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 58000,
    image: "../products/images/cosmetics0012.jpg"
  },
  {
    id: '0011',
    article: `CS0011`,
    title: "Lab uchun qalam",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 58000,
    image: "../products/images/cosmetics0011.jpg"
  },
  {
    id: '0010',
    article: `CS0010`,
    title: "Pomada #2",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 58000,
    image: "../products/images/cosmetics0010.jpg"
  },
  {
    id: '0009',
    article: `CS0009`,
    title: "Pomada #1",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 58000,
    image: "../products/images/cosmetics0009.jpg"
  },
  {
    id: '0008',
    article: `CS0008`,
    title: "Pomada",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 58000,
    image: "../products/images/cosmetics0008.jpg"
  },
  {
    id: '0007',
    article: `CS0007`,
    title: "Ko'z uchun podvodka",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 58000,
    image: "../products/images/cosmetics0007.jpg"
  },
  {
    id: '0006',
    article: `CS0006`,
    title: "Lasyon",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 58000,
    image: "../products/images/cosmetics0006.jpg"
  },
  {
    id: '0005',
    article: `CS0005`,
    title: "Lak",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 58000,
    image: "../products/images/cosmetics0005.jpg"
  },
  {
    id: '0004',
    article: `CS0004`,
    title: "Quyosh nuriga qarshi krem",
    description: "Bahor quyoshidan tanangizni kuyishdan asrashni ayni vaqti. Buni unutmang",
    price: 58000,
    image: "../products/images/cosmetics0004.jpg"
  },
  {
    id: '0003',
    article: `CS0003`,
    title: "Yuz uchun baza",
    description: "Makiyajdan oldin qo'llaniladi. Makiyaj uchun yuz sihasini tayyorlash uchun juda foydali mahsulot",
    price: 32000,
    image: "../products/images/cosmetics0003.jpg"
  },
  {
    id: '0002',
    article: `CS0002`,
    title: "Ko'z bo'yash uchun kistochka",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 58000,
    image: "../products/images/cosmetics0002.jpg"
  },
  {
    id: '0001',
    article: `CS0001`,
    title: "Krem ot zagara",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 58000,
    image: "../products/images/cosmetics0001.jpg"
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
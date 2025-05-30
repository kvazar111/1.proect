 const products = [
    { title: "Телекрусейд для Италии", image: "img 2.png", price: "Скачать", link: "телекрусейд для италии.html"},
    { title: "Школа проевление Бога", image: "img 3.png", price: "Скачать" , link: "img 3.html"},
    { title: "Привью воскресое служение", image: "img 4.png", price: "Скачать" , link: "img4.html"},
    { title: "Саммит четвертое измерение", image: "img 5.png", price: "Скачать" , link: "img5.html"},
    { title: "Календарь событий", image: "img 6.png", price: "Скачать" , link: "img6.html"},
    { title: "Субботнее служение", image: "img 7.png", price: "Скачать" , link: "img 7.html"},
    { title: "Воскресное служение", image: "img 8.png", price: "Скачать", link: "img8.html" },
    { title: "Дух Святой", image: "img 9.png", price: "Скачать", link: "img9.html" },
    { title: "Подготовка к саммиту", image: "img 10.png", price: "Скачать" , link: "img10.html"},
    { title: "Молитва за исцеление", image: "img 11.png", price: "Скачать" , link: "img11.html"},
    { title: "Лидерская конфиренция", image: "img 12.png", price: "Скачать" , link: "img12.html"},
    { title: "Привью воскресное служение", image: "img 13.png", price: "Скачать" , link: "img13.html"},
    { title: "Телекрусейд для Украины", image: "img 14.png", price: "Скачать" , link: "img14.html"},
    { title: "Привью наступило новое время победы", image: "img 15.png", price: "Скачать", link: "img15.html" },
    { title: "Привью благословение на день", image: "img 16.png", price: "Скачать" , link: "img16.html"},
    { title: "Привью не принимай ришений пот...", image: "img 17.png", price: "Скачать" , link: "img17.html"},
    { title: "Воскресное служение", image: "img 18.png", price: "Скачать" , link: "img18.html"},
    { title: "Привью передача о Святом Духе...", image: "img 19.png", price: "Скачать", link: "img19.html" },
    { title: "Привью реклама пр... телекрусейд", image: "img 20.png", price: "Скачать" , link: "img20.html"},
    { title: "Субботнее служение", image: "img 21.png", price: "Скачать" , link: "img21.html"},
    { title: "Субботнее служение", image: "img 22.png", price: "Скачать", link: "img22.html" },
    { title: "Субботнее служение", image: "img 23.png", price: "Скачать", link: "img23.html" },
    { title: "Привью 99 христианит нез...", image: "img 24.png", price: "Скачать", link: "img24.html" },
    { title: "Привью как обрести стастье...", image: "img 25.png", price: "Скачать", link: "img25.html" },

    { title: "Воскресное служение", image: "img 26.png", price: "Скачать", link: "img26.html" },
  ];

   function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function renderProducts() {
    const shuffled = shuffle(products);
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    shuffled.forEach(product => {
      const card = document.createElement("a");
      card.href = product.link;
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.price}</p>
      `;
      container.appendChild(card);
    });
  }

  window.addEventListener("DOMContentLoaded", renderProducts);
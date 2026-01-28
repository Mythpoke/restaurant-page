import food1 from "./images/food1.jpg";
import food2 from "./images/food2.jpg";
import food3 from "./images/food3.jpg";

function initialPageLoad() {

    const content = document.querySelector('#content');

    const textArr = [
    "La Tavola to restauracja stworzona z myślą o ludziach, którzy cenią sobie doskonały smak, świeże składniki i wyjątkową atmosferę. Od samego początku naszym celem było stworzenie miejsca, do którego chce się wracać — niezależnie od okazji.",
    "Każdego dnia przygotowujemy nasze dania od podstaw, korzystając z produktów od lokalnych dostawców. Wierzymy, że dobra kuchnia zaczyna się od prostych składników i starannego przygotowania. Nasze menu łączy klasyczne smaki kuchni europejskiej z nowoczesnymi akcentami, tworząc harmonijną całość.",
    "La Tavola to idealne miejsce na rodzinny obiad, spotkanie biznesowe, romantyczną kolację czy wieczór spędzony w gronie przyjaciół. Dbamy nie tylko o smak potraw, ale także o komfort naszych gości oraz ciepłą, przyjazną obsługę.",
    "Zapraszamy do odwiedzenia naszej restauracji i odkrycia smaków, które tworzymy z pasją każdego dnia.",
    "Znajdujemy się w samym sercu miasta",
    "Jesteśmy otwarci codziennie od 12:00 do 22:00",
    ]
    const imgArr = [
        food1,
        food2,
        food3
    ]
    console.log("fun");

    const pageText = document.createElement('div');
    pageText.setAttribute('id', 'page-text')
    content.appendChild(pageText);

    const h1 = document.createElement('h1');
    pageText.appendChild(h1);
    h1.textContent = "Witamy w La Tavola";

    for(let i = 0; i < 5; i++) {
        const p = document.createElement('p');
        p.textContent = textArr[i];
        pageText.appendChild(p);
    }

    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("id", "img-container");
    content.appendChild(imgContainer);

    for(let i = 0; i < 3; i++) {
        const img = document.createElement('img');
        imgContainer.appendChild(img);
        img.src = imgArr[i]; 
        img.width = 500;
        img.height = 300;
    }

}


export {initialPageLoad};
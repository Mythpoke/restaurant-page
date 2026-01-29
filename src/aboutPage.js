

function makeAbout() {

   const aboutArr = [
    "La Tavola powstała z miłości do dobrej kuchni i przekonania, że najlepsze smaki nie potrzebują przesady — potrzebują jakości, świeżości i dbałości o szczegóły. Od początku tworzymy restaurację, w której liczy się nie tylko to, co na talerzu, ale także atmosfera, dzięki której chce się wracać.",
    "Każdego dnia gotujemy od podstaw. Wybieramy proste, świeże składniki i współpracujemy z lokalnymi dostawcami, bo wiemy, że to właśnie one budują prawdziwy smak. Nasza kuchnia opiera się na klasycznych inspiracjach europejskich, które uzupełniamy nowoczesnymi akcentami — tak, aby dania były harmonijne, lekkie i dopracowane.",
    "W La Tavola stawiamy na gościnność. Chcemy, żeby każdy czuł się u nas swobodnie — niezależnie od tego, czy wpada na szybki lunch, rodzinny obiad, spotkanie biznesowe czy spokojną kolację we dwoje. Dbamy o komfort, ciepłą obsługę i detale, które tworzą całość.",
    "Zapraszamy do La Tavola — miejsca, w którym smak i atmosfera idą w parze.",
    ]
    const h1 = document.createElement('h1');
    h1.textContent = "ABOUT";
    content.appendChild(h1);

    for(let i = 0; i < 4; i++) {
        let p = document.createElement('p');
        p.textContent = aboutArr[i];
        content.appendChild(p);
    }
}

export {makeAbout};
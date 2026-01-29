

function createMenu() {




    const menuPrzystawkiArr = [
        "Bruschetta z pomidorami i bazylią – oliwa extra vergine, czosnek, redukcja balsamiczna",
        "Tatar wołowy – kapary, ogórek kiszony, żółtko, grzanki z masłem",
        "Carpaccio z buraka (vege) – kozi ser, rukola, orzechy, miód",
        "Krewetki na maśle czosnkowym – chili, pietruszka, pieczywo na zakwasie",
    ]

    const menuZupyArr = [
        "Krem z pomidorów (vege) – bazylia, oliwa, grzanki",
        "Krem z sezonowych warzyw (vege) – zależnie od dnia",
        "Rosół domowy – makaron, natka, warzywa",
    ]

    const menuSalatyArr = [
        "Sałata z grillowanym kurczakiem – parmezan, grzanki, sos cezar",
        "Sałata z kozim serem (vege) – burak, orzechy, vinaigrette",
        "Sałata z tuńczykiem – jajko, oliwki, warzywa, dressing cytrynowy",
    ]

    const content = document.querySelector('#content');

    let h1 = document.createElement('h1');
    h1.textContent = "MENU";
    content.appendChild(h1);

// Przystawki

    let menuPrzystawki = document.createElement('p');
    menuPrzystawki.textContent = "Przystawki";
    menuPrzystawki.class = "menu-title";

    let menuPrzystawkiContainer = document.createElement('ul');
    content.appendChild(menuPrzystawkiContainer);

    for(let i = 0; i < 4; i++) {
        let li = document.createElement('li');
        li.textContent = menuPrzystawkiArr[i];
        menuPrzystawkiContainer.appendChild(li);
    }

// Zupy
    
    let menuZupy = document.createElement('p');
    menuZupy.textContent = "Zupy";
    menuZupy.class = "menu-title";

    let menuZupyContainer = document.createElement('ul');
    content.appendChild(menuZupyContainer);

    for(let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        li.textContent = menuZupyArr[i];
        menuZupyContainer.appendChild(li);
    }

// Salaty

    let menuSalaty = document.createElement('p');
    menuSalaty.textContent = "Sałaty";
    menuSalaty.class = "menu-title";

    let menuSalatyContainer = document.createElement('ul');
    content.appendChild(menuSalatyContainer);

    for(let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        li.textContent = menuSalatyArr[i];
        menuSalatyContainer.appendChild(li);
    }

};

export {createMenu};
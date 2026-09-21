const otazky = [
    "1. Město by mělo aktivně budovat a vlastnit nájemní byty určené zejména pro učitele, pracovníky města a další potřebné profese.",
    "2. Projekt Viladomu pro učitele by měl pokračovat v současně připravené podobě.",
    "3. Město by mělo prosazovat spíše omezenou novou výstavbu a zachování současného charakteru Černošic, i kdyby to znamenalo omezení výstavby.",
    "4. Větší developerské projekty by měly být podmíněny finančním nebo jiným příspěvkem investora na veřejnou infrastrukturu.",
    "5. Město by mělo prostřednictvím územního plánu aktivně bránit dalšímu výraznému zahušťování stávající zástavby.",
    "6. Město by mělo systematicky vykupovat pozemky důležité pro jeho budoucí rozvoj, i pokud pro ně zatím nemá konkrétní projekt.",
    "7. Při rekonstrukcích ulic by město měло systematicky budovat chodníky i za cenu omezení prostoru pro parkování automobilů.",
    "8. Město by mělo více investovat do bezpečných cest dětí do školy, i kdyby to znamenalo další dopravní omezení v okolí škol.",
    "9. V obci by měla být plošně zavedena zona 30 km/h.",
    "10. Město by měло zavést pravidelnou městskou autobusovou linku propojující jednotlivé části Černošic.",
    "11. Město by mělo usilovat o přímé autobusové spojení Černošic s Prahou jako alternativu k železnici.",
    "12. Město by mělo usilovat o obnovení přívozu mezi Černošicemi a Lipenci.",
    "13. Město by mělo aktivně podporovat sdílená kola, elektrokola a carsharing, včetně vyhrazení potřebných míst ve veřejném prostoru.",
    "14. Černošice by měly usilovat o umístění hlavního pracoviště městského úřadu pro agendy ORP přímo na území města.",
    "15. U velkých městských investic by měla být před schválením zveřejněna nejen cena stavby, ale také odhad budoucích provozních nákladů.",
    "16. Město by mělo u významných investic zveřejňovat varianty řešení ještě před tím, než rada vybere preferovanou variantu.",
    "17. Město by mělo při rozhodování o významných investicích upřednostnit dlouhodobou finanční udržitelnost před rychlostí jejich realizace.",
    "18. Město by mělo finančně podporovat místní sportovní kluby a spolky ve větším rozsahu než dnes.",
    "19. Město by mělo podporovat vznik veřejně přístupných sportovišť a míst pro volnočasové aktivity i pro obyvatele, kteří nejsou členy sportovních klubů.",
    "20. Město by mělo aktivně podporovat vznik krajského gymnázia v Černošicích.",
    "21. Město by mělo poskytovat větší finanční a organizační podporu místním kulturním a společenským akcím.",
    "22. Pří úpravách veřejných prostranství by město mělo upřednostňovat výsadbu stromů a další zeleně, i kdyby to znamenalo omezení prostoru pro parkování.",
    "23. Přírodní charakter okolí Berounky by měl mít přednost před budováním další sportovní a rekreační infrastruktury.",
    "24. Město by mělo více investovat do opatření proti přehřívání města a lepšího hospodaření s dešťovou vodou, i za cenu omezení jiných investic.",
    "25. Členové komisí a výborů města by měli být vybírání především podle odbornosti, nikoli podle politické příslušnosti.",
    "26. Opozice by měla mít zastoupení ve vedení kontrolního a finančního výboru zastupitelstva.",
    "27. U významných městských projektů by měla proběhnout veřejná diskuse s obyvateli a dotčenými skupinami.",
    "28. Část městského rozpočtu by měla být každoročně vyčleněna na projekty, o jejichž využití rozhodnou přímo občané prostřednictvím participativního rozpočtu."
];

const strany = [
    { nazev: "Trojlístek", odpovedi: [2, 1, -1, 2, 2, 0, 1, 2, -2, 1, 0, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 0, 2, 1] },
    { nazev: "Věci Černošické", odpovedi: [-1, 2, 2, 1, 1, 1, -2, -1, -2, -1, 2, 0, -1, 2, 1, 1, 2, 2, 1, 1, 0, -1, 2, 1, 1, 1, 1, -1] },
    { nazev: "TOP 09", odpovedi: [1, 1, -2, -1, 0, -1, 2, 1, 1, 2, -1, 2, 1, -1, 0, 1, 1, -1, -2, 0, 2, 1, -1, -2, 2, 2, 1, 2] },
    { nazev: "ODS", odpovedi: [0, 0, 1, 2, 2, 2, 1, 2, 1, 0, 1, 1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 1, 1, 2, 1] },
    { nazev: "Futurista", odpovedi: [2, -1, -1, 0, -2, -1, -1, -1, 2, 1, -2, -1, 0, -1, 1, 0, 1, -2, 1, -1, -1, 0, -2, -1, 0, -1, -1, -2] }
];

const textOdpovedi = {
    2: "ANO",
    1: "spíše ANO",
    0: "neutrální / přeskočeno",
    "-1": "spíše NE",
    "-2": "NE"
};

let aktualniOtazka = 0;
let odpovediUzivatele = [];
let zPojmenovanehoPrehledu = false;

const mainImage = document.getElementById("main-image");
const introContainer = document.getElementById("intro-container");
const aboutModal = document.getElementById("about-modal");
const questionContainer = document.getElementById("question-container");
const summaryContainer = document.getElementById("summary-container");
const summaryList = document.getElementById("summary-list");
const detailContainer = document.getElementById("detail-container");
const detailContent = document.getElementById("detail-content");
const detailTitle = document.getElementById("detail-title");

const btnStart = document.getElementById("btn-start");
const btnAbout = document.getElementById("btn-about");
const btnCloseAbout = document.getElementById("btn-close-about");
const btnPrev = document.getElementById("btn-prev");
const btnBackToSummary = document.getElementById("btn-back-to-summary");
const btnShowResults = document.getElementById("btn-show-results");
const btnBack = document.getElementById("btn-back");
const questionText = document.getElementById("question-text");

const btnYes = document.getElementById("btn-yes");
const btnRatherYes = document.getElementById("btn-rather-yes");
const btnNeutral = document.getElementById("btn-neutral");
const btnRatherNo = document.getElementById("btn-rather-no");
const btnNo = document.getElementById("btn-no");
const btnSkip = document.getElementById("btn-skip");

mainImage.onerror = function() {
    this.src = "IMG-20260908-WA0012.jpg";
};

btnAbout.addEventListener("click", () => {
    introContainer.style.display = "none";
    aboutModal.style.display = "block";
});

btnCloseAbout.addEventListener("click", () => {
    aboutModal.style.display = "none";
    introContainer.style.display = "block";
});

btnStart.addEventListener("click", () => {
    introContainer.style.display = "none";
    questionContainer.style.display = "block";
    zPojmenovanehoPrehledu = false;
    zobrazOtazku();
});

btnBack.addEventListener("click", () => {
    detailContainer.style.display = "none";
    questionContainer.style.display = "block";
    mainImage.className = "header-image";
    mainImage.src = "IMG-20260908-WA0012.jpg";
});

function zobrazOtazku() {
    if (aktualniOtazka < otazky.length) {
        questionText.innerText = otazky[aktualniOtazka];
        
        // Nastavíme třídu pro oříznutou fotku otázky a zkusíme ji načíst
        mainImage.className = "question-image";
        mainImage.src = "otazka_" + (aktualniOtazka + 1) + ".jpg";
        
        if (zPojmenovanehoPrehledu) {
            btnBackToSummary.style.display = "block";
            btnPrev.style.display = "none";
        } else {
            btnBackToSummary.style.display = "none";
            if (aktualniOtazka > 0) {
                btnPrev.style.display = "block";
            } else {
                btnPrev.style.display = "none";
            }
        }
    } else {
        zobrazShrnuti();
    }
}

function zaznamenejOdpoved(hodnota) {
    odpovediUzivatele[aktualniOtazka] = hodnota; 
    
    if (zPojmenovanehoPrehledu) {
        zobrazShrnuti();
    } else {
        aktualniOtazka++;
        zobrazOtazku();
    }
}

btnPrev.addEventListener("click", () => {
    if (aktualniOtazka > 0) {
        aktualniOtazka--;
        zobrazOtazku();
    }
});

btnBackToSummary.addEventListener("click", () => {
    zobrazShrnuti();
});

btnYes.addEventListener("click", () => zaznamenejOdpoved(2));
btnRatherYes.addEventListener("click", () => zaznamenejOdpoved(1));
btnNeutral.addEventListener("click", () => zaznamenejOdpoved(0));
btnRatherNo.addEventListener("click", () => zaznamenejOdpoved(-1));
btnNo.addEventListener("click", () => zaznamenejOdpoved(-2));
btnSkip.addEventListener("click", () => zaznamenejOdpoved(0));

function zobrazShrnuti() {
    questionContainer.style.display = "none";
    summaryContainer.style.display = "block";
    
    // Vrátíme třídu úvodního banneru (celé logo)
    mainImage.className = "header-image";
    mainImage.src = "IMG-20260908-WA0012.jpg";
    
    summaryList.innerHTML = "";

    for (let i = 0; i < otazky.length; i++) {
        let ansText = textOdpovedi[odpovediUzivatele[i]] || "Nezadáno";
        let item = document.createElement("div");
        item.className = "summary-item";
        item.innerHTML = `
            <div class="summary-q">${otazky[i]}</div>
            <div class="summary-a">Odpověď: ${ansText}</div>
        `;
        item.addEventListener("click", () => {
            aktualniOtazka = i;
            zPojmenovanehoPrehledu = true;
            summaryContainer.style.display = "none";
            questionContainer.style.display = "block";
            zobrazOtazku();
        });
        summaryList.appendChild(item);
    }
}

btnShowResults.addEventListener("click", () => {
    summaryContainer.style.display = "none";
    questionContainer.style.display = "block";
    ukazVysledky();
});

function ukazVysledky() {
    mainImage.className = "header-image";
    mainImage.src = "IMG-20260908-WA0012.jpg";
    questionContainer.innerHTML = "<h2>Tvoje výsledky:</h2><p style='font-size: 0.95rem; color: #6c757d; margin-bottom: 20px; text-align: center;'>Kliknutím na stranu zobrazíte detailní porovnání.</p>";
    
    let vysledky = strany.map(strana => {
        let shoda = 0;
        let maximalniMoznaShoda = 0;
        
        for (let i = 0; i < otazky.length; i++) {
            if (odpovediUzivatele[i] !== 0 && strana.odpovedi[i] !== 0) {
                maximalniMoznaShoda += 4; 
                let vzdalenost = Math.abs(odpovediUzivatele[i] - strana.odpovedi[i]);
                shoda += (4 - vzdalenost);
            }
        }
        
        let procenta = maximalniMoznaShoda > 0 ? Math.round((shoda / maximalniMoznaShoda) * 100) : 0;
        return { nazev: strana.nazev, procenta: procenta };
    });

    vysledky.sort((a, b) => b.procenta - a.procenta);

    vysledky.forEach(v => {
        let btnStrana = document.createElement("p");
        btnStrana.className = "result-item";
        btnStrana.innerHTML = `<span><strong>${v.nazev}</strong></span> <span>${v.procenta} %</span>`;
        btnStrana.addEventListener("click", () => zobrazDetail(v.nazev));
        questionContainer.appendChild(btnStrana);
    });
}

function zobrazDetail(nazevStrany) {
    questionContainer.style.display = "none";
    detailContainer.style.display = "block";
    detailTitle.innerText = `Porovnání s: ${nazevStrany}`;
    detailContent.innerHTML = "";
    
    let strana = strany.find(s => s.nazev === nazevStrany);
    
    for (let i = 0; i < otazky.length; i++) {
        let userAns = odpovediUzivatele[i];
        let partyAns = strana.odpovedi[i];
        
        let matchClass = "match-neutral";
        if (userAns !== 0 && partyAns !== 0) {
            let rozdil = Math.abs(userAns - partyAns);
            if (rozdil <= 1) matchClass = "match-good"; 
            else if (rozdil >= 3) matchClass = "match-bad"; 
        }

        detailContent.innerHTML += `
            <div class="comparison-item">
                <div class="comparison-question">${otazky[i]}</div>
                <div class="comparison-answers">
                    <div class="answer-row">
                        <span>Tvoje odpověď:</span>
                        <span class="answer-badge">${textOdpovedi[userAns]}</span>
                    </div>
                    <div class="answer-row">
                        <span>${nazevStrany}:</span>
                        <span class="answer-badge ${matchClass}">${textOdpovedi[partyAns]}</span>
                    </div>
                </div>
            </div>
        `;
    }
}
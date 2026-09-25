const otazky = [
    "1. Město by mělo stavět a vlastnit nájemní byty pro vybrané potřebné profese i tehdy, pokud jejich výstavba vyžaduje významné financování z vlastního rozpočtu města.",
    "2. Projekt Viladomu pro učitele by měl pokračovat v současně připravené podobě.",
    "3. Město by mělo prosazovat spíše omezenou novou výstavbu a zachování současného charakteru Černošic, i kdyby to znamenalo omezení výstavby.",
    "4. Větší developerské projekty by měly být podmíněny finančním nebo jiným příspěvkem investora na veřejnou infrastrukturu.",
    "5. Město by mělo prostřednictvím územního plánu aktivně bránit dalšímu výraznému zahušťování stávající zástavby.",
    "6. Město by mělo spíše prodávat nepotřebné nemovitosti a pozemky a získané peníze investovat do rozvoje, než tento majetek dlouhodobě držet.",
    "7. Při rekonstrukcích ulic by město mělo systematicky budovat chodníky i za cenu omezení prostoru pro parkování automobilů.",
    "8. V bezprostředním okolí škol by město mělo omezovat vjezd a stání automobilů v době začátku a konce vyučování.",
    "9. V celých Černošicích s výjimkou hlavních průjezdních komunikací by měla platit maximální rychlost 30 km/h.",
    "10. Město by mělo zavést nové autobusové spoje s novými zastávkami, tak aby lépe propojily Černošice-Mokropsy - Vráž.",
    "11. Město by mělo usilovat o přímé autobusové spojení Černošic s Prahou jako alternativu k železnici.",
    "12. Město by mělo usilovat o obnovení přívozu mezi Černošicemi a Lipenci.",
    "13. Město by mělo aktivně podporovat sdílená kola, elektrokola a carsharing, včetně vyhrazení potřebných míst ve veřejném prostoru.",
    "14. Černošice by měly usilovat o umístění hlavního pracoviště městského úřadu pro agendy ORP přímo na území města.",
    "15. U velkých městských investic by měla být před schválením zveřejněna nejen cena stavby, ale také odhad budoucích provozních nákladů.",
    "16. Město by mělo u významných investic zveřejňovat varianty řešení ještě před tím, než rada vybere preferovanou variantu.",
    "17. Město by mělo při rozhodování o významných investicích upřednostnit dlouhodobou finanční udržitelnost před rychlostí jejich realizace.",
    "18. Město by mělo být připraveno financovat strategické investice bankovním úvěrem, pokud mají dlouhodobý přínos nebo vlastní výnos.",
    "19. Město by mělo finančně podporovat místní sportovní kluby a spolky ve větším rozsahu než dnes.",
    "20. Město by mělo podporovat vznik veřejně přístupných sportovišť a míst pro volnočasové aktivity i pro obyvatele, kteří nejsou členy sportovních klubů.",
    "21. Město by mělo podporovat vznik krajského gymnázia v Černošicích.",
    "22. Město by mělo obnovit samostatný odbor kultury a sportu s vlastním rozpočtem.",
    "23. Po uplynutí každého šestiletého období výkonu funkce ředitele městem zřízené školy nebo školského zařízení by město mělo vždy vyhlásit nový konkurs, i pokud je s dosavadním vedením spokojeno.",
    "24. Při úpravách veřejných prostranství by město mělo upřednostňovat výsadbu stromů a další zeleně, i kdyby to znamenalo omezení prostoru pro parkování.",
    "25. Přírodní charakter okolí Berounky by měl mít přednost před budováním další sportovní a rekreační infrastruktury.",
    "26. Město by mělo více investovat do opatření proti přehřívání města a lepšího hospodaření s dešťovou vodou, i za cenu omezení jiných investic.",
    "27. Členové komisí a výborů města by měli být vybíráni především podle odbornosti, nikoli podle politické příslušnosti.",
    "28. Opozice by měla mít zastoupení ve vedení kontrolního a finančního výboru zastupitelstva.",
    "29. U významných městských projektů by měla proběhnout veřejná diskuse s obyvateli a dotčenými skupinami.",
    "30. Část městského rozpočtu by měla být každoročně vyčleněna na projekty, o jejichž využití rozhodnou přímo občané prostřednictvím participativního rozpočtu.",
    "31. Město by mělo snížit místní koeficient daně z nemovitých věcí, i kdyby tím získalo méně peněz na investice a veřejné služby.",
    "32. Zasedání zastupitelstva by měla být dostupná on-line."
];

// DŮLEŽITÉ: Níže uvedené odpovědi mají dočasně 32 položek, ale neodpovídají nové sadě otázek!
// Musíte ručně zkontrolovat a aktualizovat všech 32 odpovědí u každé strany podle nových podkladů.
const strany = [
    { nazev: "Trojlístek", odpovedi: [2, 1, -1, 2, 2, 0, 1, 2, -2, 1, 0, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 0, 2, 1, 0, 0, 0, 0] },
    { nazev: "Věci Černošické", odpovedi: [-1, 2, 2, 1, 1, 1, -2, -1, -2, -1, 2, 0, -1, 2, 1, 1, 2, 2, 1, 1, 0, -1, 2, 1, 1, 1, 1, -1, 0, 0, 0, 0] },
    { nazev: "TOP 09", odpovedi: [1, 1, -2, -1, 0, -1, 2, 1, 1, 2, -1, 2, 1, -1, 0, 1, 1, -1, -2, 0, 2, 1, -1, -2, 2, 2, 1, 2, 0, 0, 0, 0] },
    { nazev: "ODS", odpovedi: [0, 0, 1, 2, 2, 2, 1, 2, 1, 0, 1, 1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 0, 0, 0, 0] },
    { nazev: "Futurista", odpovedi: [2, -1, -1, 0, -2, -1, -1, -1, 2, 1, -2, -1, 0, -1, 1, 0, 1, -2, 1, -1, -1, 0, -2, -1, 0, -1, -1, -2, 0, 0, 0, 0] }
];

const textOdpovedi = {
    2: "ANO",
    1: "spíše ANO",
    0: "neutrální",
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

const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

const btnStart = document.getElementById("btn-start");
const btnAbout = document.getElementById("btn-about");
const btnCloseAbout = document.getElementById("btn-close-about");
const btnPrev = document.getElementById("btn-prev");
const btnBackToSummary = document.getElementById("btn-back-to-summary");
const btnRestartCalc = document.getElementById("btn-restart-calc");
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
    mainImage.className = "header-image fade-transition";
    mainImage.src = "IMG-20260908-WA0012.jpg";
});

btnRestartCalc.addEventListener("click", () => {
    if (confirm("Opravdu chcete začít úplně od začátku? Všechny vaše dosavadní odpovědi budou smazány.")) {
        aktualniOtazka = 0;
        odpovediUzivatele = [];
        zPojmenovanehoPrehledu = false;
        
        questionContainer.style.display = "none";
        introContainer.style.display = "block";
        
        progressBar.style.width = "0%";
        progressBar.parentElement.style.display = "block";
        progressText.style.display = "block";
        
        mainImage.className = "header-image fade-transition";
        mainImage.src = "IMG-20260908-WA0012.jpg";
    }
});

function zobrazOtazku() {
    if (aktualniOtazka < otazky.length) {
        questionText.classList.add("fade-out");
        mainImage.classList.add("fade-out");

        setTimeout(() => {
            questionText.innerText = otazky[aktualniOtazka];
            mainImage.className = "question-image fade-transition";
            mainImage.src = "otazka_" + (aktualniOtazka + 1) + ".jpg";
            
            let progressPercent = (aktualniOtazka / otazky.length) * 100;
            progressBar.style.width = progressPercent + "%";
            progressText.innerText = `Otázka ${aktualniOtazka + 1} z ${otazky.length}`;

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

            questionText.classList.remove("fade-out");
            mainImage.classList.remove("fade-out");
        }, 200);
        
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
btnSkip.addEventListener("click", () => zaznamenejOdpoved(null));

function zobrazShrnuti() {
    questionContainer.style.display = "none";
    summaryContainer.style.display = "block";
    
    mainImage.className = "header-image fade-transition";
    mainImage.src = "IMG-20260908-WA0012.jpg";
    
    summaryList.innerHTML = "";

    for (let i = 0; i < otazky.length; i++) {
        let hodnota = odpovediUzivatele[i];
        let ansText = (hodnota === null) ? "nevím" : (textOdpovedi[hodnota] !== undefined ? textOdpovedi[hodnota] : "Nezadáno");
        
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
    mainImage.className = "header-image fade-transition";
    mainImage.src = "IMG-20260908-WA0012.jpg";
    
    progressBar.parentElement.style.display = "none";
    progressText.style.display = "none";
    
    questionContainer.innerHTML = "<h2>Tvoje výsledky:</h2><p style='font-size: 0.95rem; color: #6c757d; margin-bottom: 20px; text-align: center;'>Kliknutím na stranu zobrazíte detailní porovnání.</p>";
    
    let vysledky = strany.map(strana => {
        let shoda = 0;
        let maximalniMoznaShoda = 0;
        
        for (let i = 0; i < otazky.length; i++) {
            if (odpovediUzivatele[i] != null && strana.odpovedi[i] != null) {
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

    let btnShare = document.createElement("button");
    btnShare.id = "btn-share";
    btnShare.innerText = "Sdílet můj výsledek";
    btnShare.addEventListener("click", () => {
        let nejlepsiStrana = vysledky[0];
        let shareData = {
            title: 'Volební kalkulačka Černošice 2026',
            text: `Moje shoda v komunálních volbách s programem sdružení ${nejlepsiStrana.nazev} je ${nejlepsiStrana.procenta} %! Zkus si černošickou volební kalkulačku taky:`,
            url: window.location.href 
        };

        if (navigator.share) {
            navigator.share(shareData).catch(err => console.log('Chyba při sdílení:', err));
        } else {
            navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
            alert("Váš výsledek a odkaz na kalkulačku byl zkopírován. Můžete ho vložit do jakékoliv zprávy (Ctrl+V)!");
        }
    });
    questionContainer.appendChild(btnShare);

    let btnRestart = document.createElement("button");
    btnRestart.id = "btn-restart";
    btnRestart.innerText = "Vrátit se na začátek";
    btnRestart.addEventListener("click", () => {
        aktualniOtazka = 0;
        odpovediUzivatele = [];
        zPojmenovanehoPrehledu = false;
        
        questionContainer.style.display = "none";
        introContainer.style.display = "block";
        
        progressBar.style.width = "0%";
        progressBar.parentElement.style.display = "block";
        progressText.style.display = "block";
    });
    questionContainer.appendChild(btnRestart);
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
        
        if (userAns != null && partyAns != null) {
            let rozdil = Math.abs(userAns - partyAns);
            if (rozdil <= 1) matchClass = "match-good"; 
            else if (rozdil >= 3) matchClass = "match-bad"; 
        }

        let userText = (userAns === null) ? "nevím" : textOdpovedi[userAns];
        let partyText = (partyAns === null) ? "nevím" : textOdpovedi[partyAns];

        detailContent.innerHTML += `
            <div class="comparison-item">
                <div class="comparison-question">${otazky[i]}</div>
                <div class="comparison-answers">
                    <div class="answer-row">
                        <span>Tvoje odpověď:</span>
                        <span class="answer-badge">${userText}</span>
                    </div>
                    <div class="answer-row">
                        <span>${nazevStrany}:</span>
                        <span class="answer-badge ${matchClass}">${partyText}</span>
                    </div>
                </div>
            </div>
        `;
    }
}

function vygenerujTabulkuOdpovedi() {
    const table = document.getElementById("answers-table");
    if (!table) return;

    let html = "<thead><tr><th>Ot.</th>";
    strany.forEach(s => {
        html += `<th>${s.nazev}</th>`;
    });
    html += "</tr></thead><tbody>";

    const textZkratky = {
        2: "ANO",
        1: "spíše ANO",
        0: "neutrální",
        "-1": "spíše NE",
        "-2": "NE"
    };

    for (let i = 0; i < otazky.length; i++) {
        html += `<tr><td>${i + 1}.</td>`;
        strany.forEach(s => {
            let ans = s.odpovedi[i];
            let text = (ans === null) ? "nevím" : textZkratky[ans];
            html += `<td>${text}</td>`;
        });
        html += "</tr>";
    }
    html += "</tbody>";
    table.innerHTML = html;
}

vygenerujTabulkuOdpovedi();
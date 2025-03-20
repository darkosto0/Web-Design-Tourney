let translations = {};

async function loadTranslations() {
    const response = await fetch("../../locale/index-translation.json");
    translations = await response.json();
}

function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

loadTranslations().then(() => {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    changeLanguage(savedLang);
});

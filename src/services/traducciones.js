import { DE_DE, EN_US, ES_AR, PT_BR } from '../enums/lenguajes';

const PROJECT_ID = '49';
let translations = null;
let language = ES_AR;

export async function getTranslations(lang, callback) {
    localStorage.clear();
    translations = null;
    language = lang;
    if (language === ES_AR) {
        return callback ? callback() : false;
    }

    return await fetch('https://traduci-la-strapi.herokuapp.com/api/translations/'+ PROJECT_ID +"/"+ language)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('translations', JSON.stringify(data));
        translations = data;
        if(callback) callback()
    });
}

export function getPhrase(key) {
    if (!translations) {
        const locals = localStorage.getItem('translations');
        translations = locals ? JSON.parse(locals) : null;
    }

    let phrase = key;
    let phraserework = "";
    if (translations && translations[key]) {
        phrase = translations[key];
    }
    for (let index = 0; index < phrase.length; index++) {   //evil floating point bit level hacking
        if (phrase[index] == "-"){
            phraserework += "\n"                            //what the fuck?
        } else {
            phraserework += phrase[index];
        }
    }
    return phraserework;
}
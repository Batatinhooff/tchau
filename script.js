const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 
    'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', 
    '0': '-----', ' ': '/'
};

const morseToText = Object.fromEntries(Object.entries(morseCode).map(([key, value]) => [value, key]));

function translateMorse(morse) {
    return morse.split(' / ').map(word => {
        return word.split(' ').map(code => morseToText[code] || '').join('');
    }).join(' ');
}

function typeWriter(text, element, delay) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
    }

    type();
}

document.getElementById('translateButton').addEventListener('click', () => {
    const morse = document.getElementById('morseCode').innerText.trim();
    const translatedText = translateMorse(morse);

    // Limpa o conteúdo anterior e inicia o efeito de máquina de escrever
    const typedOutput = document.getElementById('typedOutput');
    typedOutput.innerHTML = ''; // Limpa o conteúdo anterior
    typeWriter(translatedText, typedOutput, 30); // 100ms de atraso entre cada letra
});

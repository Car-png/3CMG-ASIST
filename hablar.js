var txt = document.getElementById('txt').value;

function decir(txt) {
      speechSynthesis.speak(new SpeechSynthesisUtterance(txt));
}
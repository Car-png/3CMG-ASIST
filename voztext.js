let rec;
if (!('webkitSpeechRecognition'in window)){
    alert('Error');
}else{
    rec = new webkitSpeechRecognition();
    rec.lang = "es-AR";
    rec.continuous = true;
    rec.interim = true;
    rec.addEventListener("result", ejecutar);
}

function ejecutar(event) {
    for (let i = event.resultIndex; i < event.results.length; i++){
        document.getElementById('texto').innerHTML=event.results[i][0].transcript;
    }
}


rec.start();

// Accediendo a asistente virtual para utilizar el btn limpiar por voz

if(annyang){
    var voices;

    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = 'es-ES';

    //Cargamos las voces que tenemos en nuestro sistema
    window.speechSynthesis.onvoiceschanged = function (){
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
    }

    var commands = {
        "copiar" :function(){
            document.getElementById('texto').focus();
            document.execCommand('selectAll');
            document.execCommand('copy');
        }
    };

    //Añadir comandos a annyang
    annyang.addCommands(commands);

    //Empezar a escuchar
    annyang.start({autoRestart: false, continuous: true});
}
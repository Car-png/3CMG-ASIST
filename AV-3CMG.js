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
        "youtube": function(){
            document.getElementById('txt').innerHTML="Hola, ¿como estas? me llamo 3CMG ASIST";
        },

        "limpiar" :function(){
            document.getElementById('txt').value="";
        }
    };

    //Añadir comandos a annyang
    annyang.addCommands(commands);

    //Empezar a escuchar
    annyang.start({autoRestart: false, continuous: true});
}
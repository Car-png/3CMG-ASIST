if(annyang){

    var voices;

    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = 'es-AR';

    window.speechSynthesis.onvoiceschanged = function (){
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
        };

    var commands = {

        'Hola': function(){
            utter.text = 'Hola, como se llama';
            utter.voice = voices[7];
            window.speechSynthesis.speak(utter);

            annyang.addCallback('result', function(frase){
                console.log('nombre:', frase[0]);
                annyang.removeCallback('result');
                utter.text = 'Hola,' +frase[0]+'Me presento soy un asistente virtual fui creada por el equipo The Last conformado por Patrick Cabezas, Rocio Moya, Jose Valverde, Ely Guzmán, Aaron García y Javier Cárdenas, mi función es ayudarte a navegar por internet lo único que tienes que hacer es seguir los pasos que te indica esta página.';
                window.speechSynthesis.speak(utter);
            })
        },

        'buscar *valor': function(valor){

            utter.text = 'Buscando '+valor;
            utter.voice = voices[7];
            window.speechSynthesis.speak(utter);

            document.getElementById('txt').innerHTML="Googleando"+$('#txt').val(valor);

            window.open('https://www.google.com/search?sxsrf=ALeKk02R3u6nWG1-FvkdLQFKMlHZOGg36Q%3A1590901089781&source=hp&ei=YTnTXsO-LbvQ5OUPibiA6Ao&q='+valor+'','_blank');
        },
        'youtube': function(){
            utter.text = 'Visitando youtube';
            utter.voice = voices[7];
            window.speechSynthesis.speak(utter);

            document.getElementById('txt').innerHTML="Visitando youtube";
            window.open('https://www.youtube.com/','_blank');
        },

        'Videos de *valor': function (valor) {
            utter.text = 'Buscando '+valor;
            utter.voice = voices[7];
            window.speechSynthesis.speak(utter);

            document.getElementById('txt').innerHTML="Buscando vídeos de "+$('#txt').val(valor);
            window.open('https://www.youtube.com/results?search_query='+valor+'','_blank');
        },

        'adios youtube':function(){
            utter.text = 'Hasta luego';
            utter.voice = voices[7];
            window.speechSynthesis.speak(utter);

            window.close('https://www.youtube.com/');
        },

        'ir a *valor': function (valor) {
            utter.text = 'Dirigiendo a'+valor;
            utter.voice = voices[7];
            window.speechSynthesis.speak(utter);

            document.getElementById('txt').innerHTML="Visitando "+$('#txt').val(valor);
            window.open('https://www.'+valor+'.com/','_blank');
            
        }

    };

            //Añadir    commands    a annyang
    annyang.addCommands(commands);

// Establecemos nuestro idioma
    annyang.setLanguage('es');

    //Empezar a escuchar
    annyang.start({continuous:false});
}
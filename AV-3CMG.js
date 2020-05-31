if(annyang){
    var commands = {
        "hola": function(){
            document.getElementById('txt').innerHTML="Hola, ¿como estas? me llamo 3CMG ASIST";
        },
        "cerrar": function(){
            window.close();
        },
        "te": function(){
            window.open('https://www.youtube.com/');
        },

        "limpiar" :function(){
            document.getElementById('txt').value="";
        }
    };

    //Añadir comandos a annyang
    annyang.addCommands(commands);
    annyang.setLanguage('es-ES');

    //Empezar a escuchar
    annyang.start();
}

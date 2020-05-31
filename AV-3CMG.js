if(annyang){
    var commands = {

        'buscar *valor': function(valor){
            $('#txt').val(valor);
            window.open('https://www.google.com/search?sxsrf=ALeKk02R3u6nWG1-FvkdLQFKMlHZOGg36Q%3A1590901089781&source=hp&ei=YTnTXsO-LbvQ5OUPibiA6Ao&q='+valor+'','_blank');
            
        },
        'texto': function(){
            window.open('VozText.html','_blank');
        },
        'Cerrar':function(){
            window.close();
        }
    };

            //Añadir    commands    a annyang
    annyang.addCommands(commands);

// Establecemos nuestro idioma
    annyang.setLanguage('es');

    //Empezar a escuchar
    annyang.start({continuous:false});
}
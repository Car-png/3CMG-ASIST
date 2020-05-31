if(annyang){
    var commands = {
        "buscar *valor": function(valor){
            $('#txt').val(valor);
            window.open('https://www.google.com/search?sxsrf=ALeKk02R3u6nWG1-FvkdLQFKMlHZOGg36Q%3A1590901089781&source=hp&ei=YTnTXsO-LbvQ5OUPibiA6Ao&q='+valor+'&oq='+valor+'&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIHCAAQFBCHAjIECAAQQzIECAAQQ1DhE1iSG2CdJ2gAcAB4AIAB-gGIAYQEkgEFMC4yLjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwiD886yqN3pAhU7KLkGHQkcAK0Q4dUDCAc&uact=5','_blank');
        },
        "hola": function(){
            document.getElementById('txt').innerHTML="Como estas";
        }
    };

            //Añadir    commands    a annyang
    annyang.addCommands(commands);

// Establecemos nuestro idioma
    annyang.setLanguage('es-ES');

    //Empezar a escuchar
    annyang.start();
}
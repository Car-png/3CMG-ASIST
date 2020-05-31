if(annyang){
    var commands = {

        'buscar *valor': function(valor){
            $('#txt').val(valor);
            window.open('https://www.google.com/search?sxsrf=ALeKk02R3u6nWG1-FvkdLQFKMlHZOGg36Q%3A1590901089781&source=hp&ei=YTnTXsO-LbvQ5OUPibiA6Ao&q='+valor+'','_blank');
            
        },
        'cerrar':function(){
            window.close();
        },

        'apagarpc': Apagar(),
        'reiniciarpc': Restart(),
        'restartpc': Restart(),
        'cancelar': Cancelar(),

        'youtube': function(){
            window.open('https://www.youtube.com/','_blank');
        },
        'face': function(){
            window.open('https://www.facebook.com/','blank_');
        },
        'facebook': function(){
            window.open('https://www.facebook.com/','blank_');
        },
        'messenger': function(){
            window.open('https://www.messenger.com/','blank_');
        },
        'twitter': function(){
            window.open('https://twitter.com/explore','blank_');
        },
        'gmail': function(){
            window.open('https://mail.google.com/','blanc_');
        },
        'twitch': function(){
            window.open('https://www.twitch.tv/','blank_');
        },
        'instagram': function(){
            window.open('https://www.instagram.com/','blank_');
        },
        'insta': function(){
            window.open('https://www.instagram.com/','blank_');
        },
        'horalarga': function(){
            document.getElementById('txt').innerHTML= d.getHours()+d.getMinutes()+d.getSeconds();
        },
        'horacorta':function(){
            document.getElementById('txt').innerHTML= d.getHours()+d.getMinutes();
        },
        'fechalarga':function(){
            document.getElementById('txt').innerHTML= d.getDate()+d.getDay()+d.getMonth()+d.getFullYear();
        },        
        'fechalarga':function(){
            document.getElementById('txt').innerHTML= d.getDay()+d.getMonth()+d.getFullYear();
        }

    };

            //Añadir    commands    a annyang
    annyang.addCommands(commands);

// Establecemos nuestro idioma
    annyang.setLanguage('es');

    //Empezar a escuchar
    annyang.start({continuous:false});
}


function Apagar(){
    let a = document.getElementById('batA').open;
    return a;
}

function Restart(){
    let r = document.getElementById('batR').open;
    return r;
}

function Cancelar(){
    let c = document.getElementById('batC').open;
    return c;
}



var d = new Date();

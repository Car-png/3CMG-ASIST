if(annyang){
    var commands = {

        'buscar *valor': function(valor){
            document.getElementById('txt').innerHTML="Buscando "+$('#txt').val(valor);
            window.open('https://www.google.com/search?sxsrf=ALeKk02R3u6nWG1-FvkdLQFKMlHZOGg36Q%3A1590901089781&source=hp&ei=YTnTXsO-LbvQ5OUPibiA6Ao&q='+valor+'','_blank');
            
        },

        'apagarpc': Apagar(),
        'reiniciarpc': Restart(),
        'restartpc': Restart(),
        'cancelar': Cancelar(),

        'youtube': function(){
            window.open('https://www.youtube.com/','_blank');
        },
        'adios youtube':function(){
            window.close('https://www.youtube.com/');
        },

        'face': function(){
            window.open('https://www.facebook.com/','_blank');
        },
        'facebook': function(){
            window.open('https://www.facebook.com/','_blank');
        },
        'messenger': function(){
            window.open('https://www.messenger.com/','_blank');
        },
        'twitter': function(){
            window.open('https://twitter.com/explore','_blank');
        },
        'gmail': function(){
            window.open('https://mail.google.com/','_blank');
        },
        'twitch': function(){
            window.open('https://www.twitch.tv/','_blank');
        },
        'instagram': function(){
            window.open('https://www.instagram.com/','_blank');
        },
        'insta': function(){
            window.open('https://www.instagram.com/','_blank');
        },
        'hora larga': function(){
            document.getElementById('txt').innerHTML= document.getElementById('txt').innerHTML.getHours()+document.getElementById('txt').innerHTML.getMinutes()+document.getElementById('txt').innerHTML.getSeconds();
        },
        'hora corta':function(){
            document.getElementById('txt').innerHTML= document.getElementById('txt').innerHTML.getHours()+document.getElementById('txt').innerHTML.getMinutes();
        },
        'fecha larga':function(){
            document.getElementById('txt').innerHTML= document.getElementById('txt').innerHTML.getDate()+document.getElementById('txt').innerHTML.getDay()+document.getElementById('txt').innerHTML.getMonth()+document.getElementById('txt').innerHTML.getFullYear();
        },        
        'fecha corta':function(){
            document.getElementById('txt').innerHTML= document.getElementById('txt').innerHTML.getDay()+document.getElementById('txt').innerHTML.getMonth()+document.getElementById('txt').innerHTML.getFullYear();
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



document.getElementById('txt') = new Date();
if(annyang){
    var commands = {

        'buscar *valor': function(valor){

            document.getElementById('txt').innerHTML="Googleando"+$('#txt').val(valor);

            window.open('https://www.google.com/search?sxsrf=ALeKk02R3u6nWG1-FvkdLQFKMlHZOGg36Q%3A1590901089781&source=hp&ei=YTnTXsO-LbvQ5OUPibiA6Ao&q='+valor+'','_blank');
        },
        'youtube': function(){
            document.getElementById('txt').innerHTML="Visitando youtube"+$('#txt').val(valor);
            window.open('https://www.youtube.com/','_blank');
        },

        'Videos de *valor': function (valor) {
            document.getElementById('txt').innerHTML="Buscando vídeos de "+$('#txt').val(valor);
            window.open('https://www.youtube.com/results?search_query='+valor+'','_blank');
        },

        'adios youtube':function(){
            window.close('https://www.youtube.com/');
        },

        'ir a *valor': function (valor) {
            document.getElementById('txt').innerHTML="Visitando "+$('#txt').val(valor);
            window.open('https://www.'+valor+'.com/','_blank');
        }

        // 'face': function(){
        //     window.open('https://www.facebook.com/','_blank');
        // },
        // 'facebook': function(){
        //     window.open('https://www.facebook.com/','_blank');
        // },
        // 'messenger': function(){
        //     window.open('https://www.messenger.com/','_blank');
        // },
        // 'twitter': function(){
        //     window.open('https://twitter.com/explore','_blank');
        // },
        // 'gmail': function(){
        //     window.open('https://mail.google.com/','_blank');
        // },
        // 'twitch': function(){
        //     window.open('https://www.twitch.tv/','_blank');
        // },
        // 'instagram': function(){
        //     window.open('https://www.instagram.com/','_blank');
        // },
        // 'insta': function(){
        //     window.open('https://www.instagram.com/','_blank');
        // }

    };

            //Añadir    commands    a annyang
    annyang.addCommands(commands);

// Establecemos nuestro idioma
    annyang.setLanguage('es');

    //Empezar a escuchar
    annyang.start({continuous:false});
}
document.getElementById('normal').addEventListener('click', function(){
    document.getElementById('texto').focus();
    document.execCommand('selectAll');
    document.execCommand('copy');

    document.getElementById('texto').value='';
});
function myFunction(){
    var trElements = document.getElementsByTagName('tr');
    var btnZebra = document.getElementById('btnZebra');
    var btnZebra2 = document.getElementById('btnZebra2');
    for (var i = 0; i < trElements.length; i++) {
        if (i === 0) {
            
        }
        else if (i % 2 === 0) {
            
        }
       else {
            trElements[i].style.background = 'white';
            trElements[i].style.color = 'black';
            btnZebra.style.visibility = 'hidden';
            btnZebra2.style.visibility = 'visible';
        }                 
    }          
}

function myFunction2(){
    var trElements = document.getElementsByTagName('tr');
    var btnZebra = document.getElementById('btnZebra');
    var btnZebra2 = document.getElementById('btnZebra2');
    for (var i = 0; i < trElements.length; i++) {
        if (i === 0) {
            
        }
        else if (i % 2 === 0) {
            
        }
       else {
        
            trElements[i].style.background = '#f2f2f2';
            trElements[i].style.color = 'black';
            btnZebra.style.visibility = 'visible';
            btnZebra2.style.visibility = 'hidden';
        }                 
    }            
}
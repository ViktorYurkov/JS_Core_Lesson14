
function sumLi(){
    var elem = document.getElementsByTagName('li');
    return elem;
}
//а. Варіан 1
function textLi(){
    var elem = sumLi();
    for(var i=0; i<elem.length; i++){
        var currentInput = elem[i];
        currentInput.innerHTML = "Страва "+i;
    }  
}
//а. Варіан 2
function textLi2(){
    var elem = document.querySelectorAll('ul');
    var menu = ["Кава", "Канапка", "Борщ", "Плов" ,
               "Салат", "Кифір"];
    elem[0].eat = {value:'Сніданок'};
    elem[1].eat = {value:'Обід'};
    elem[2].eat = {value:'Вечеря'};
    
    var el = elem["0"].querySelectorAll('li');
    el[0].innerHTML = menu[0] ;
    el[1].innerHTML = menu[1] ;
    
    var el = elem["1"].querySelectorAll('li');
    el[0].innerHTML = menu[2] ;
    el[1].innerHTML = menu[3] ;
    el[2].innerHTML = menu[4] ;
    
    var el = elem["2"].querySelectorAll('li');
    el[0].innerHTML = menu[5] ;
    
}

//б.
function Summ(){
    //console.log('----');
    var sum =  sumLi().length;
    //console.log(sum);
    document.write('<h3>');
    document.write("Загальна кількість всіх тегів li на сторінці : "+sum);
    document.write('</h3>');
}

Summ();



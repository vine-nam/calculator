/*
오류뜸
익명함수 어떻게 하는거지????
a(function() {
    var td = document.getElementsByTagName('td');
    for(var i in td) {
       console.log(td[i].textContent); 
    }
});
*/

var result = document.getElementsByTagName('th')[0];
//var result = "9×9";
var get_num;

function num7_click() {
    get_num = document.getElementById('seven').textContent;
    result.textContent += get_num;
}
function num8_click() {
    get_num = document.getElementById('eight').textContent;
    result.textContent += get_num;
}
function num9_click() {
    get_num = document.getElementById('nine').textContent;
    result.textContent += get_num;
}
function mul_click() {
    get_num = document.getElementById('mul').textContent;
    result.textContent += get_num;
}
function is_click() {
    result2 = document.getElementsByTagName('th')[0].textContent;
    //result2=result;
    var array = [];
    var num;
    var num2;
    for(var i=0; i<result2.length; i++){
        switch(result2[i]) {
            case '×':
                console.log(result2[i]);
                array.push('*');
                //array에 연산자 담아서 우선순위로 해야하는데...
                //num=num*num2;
                break;
            /*
            case '÷':
                console.log(result[i]);
                break;
            case '＋':
                console.log(result[i]);
                break;
            case '－':
                console.log(result[i]);
                break;
            */
            default:
                console.log(parseInt(result[i]));
                if(num==undefined){
                    num=parseInt(result2[i]);
                    console.log(num);
                }
                else {
                    num2=parseInt(result2[i]);
                    console.log(num2);
                }
        }
    }
    result2 = num * num2;
    result.textContent = result2;
}

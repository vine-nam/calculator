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

//모든 td에 onclick 함수를 추가한다.
//하고 싶은데 어떻게 하는 거지???
/*
(function() {
    var tds = document.getElementsByTagName("td");
    for(var i=0; i<tds.length; i++){
        tds[i].addEventListener("num_click(this);");
    }
}());
*/

//th에 click 이벤트 설정
//C랑 =는 어떻하지...?(다른 함수씀);;;
$('td').on('click', function() {
    num_click(this);
});


//td에 대한 onclick함수
//td의 값을 th에 입력한다.
function num_click(num) {
    get_num = num.textContent;
    result.textContent += get_num;
}

//C를 누르면 th내용을 지운다.
function erase_click() {
    result.textContent = "";
}

//'='에 대한 onclick 함수
//값을 계산해서 출력 한다.
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
    result2 += ' = ';
    result2 += num * num2;
    result.textContent = result2;
}

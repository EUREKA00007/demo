window.onload = function(){
    var c = document.getElementsByClassName('button-clear');
    var text = document.getElementsByClassName('console');
    var buttonNum = document.getElementsByClassName('button-num');
    var buttonCalculator = document.getElementsByClassName('button-calculator');
    var num1 = 0, num2 =0;
    
    c[0].onclick = function(){
        text[0].innerText = "0";
    }
   
    for(var i = 0;i < buttonNum.length;i++){
        (function(i){
            buttonNum[i].onclick = function(){
                if(text[0].innerText == "0"){
                    text[0].innerText = buttonNum[i].innerText;
                    num1 = parseInt(text[0].innerText);
                }else if(text[0].innerText != '/'){
                    text[0].innerText += buttonNum[i].innerText;
                    num1 = parseInt(text[0].innerText);
                }
                if(text[0].innerText == '/'){
                    text[0].innerText = buttonNum[i].innerText;
                    num2 = parseInt(text[0].innerText); 
                }
                
            }
        })(i);
    }
    
    for(var i = 0;i < buttonCalculator.length;i++){
        (function(i){
            buttonCalculator[i].onclick = function(){
                if(buttonCalculator[i].innerText == "/"){
                    text[0].innerText = '/';                 
                }
                if(buttonCalculator[i].innerText == "="){
                    text[0].innerText = num1/num2;
                }
                                    
            }
        })(i);
    }
}

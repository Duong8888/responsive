var count = 0;
function hi(){
    if(count%2 == 0){
        document.getElementById('menu-1').style.transform = 'scale(1)';
        document.getElementById('menu-1').style.zIndex = '10';
    }else{
        document.getElementById('menu-1').style.transform = 'scale(0.001)';
        document.getElementById('menu-1').style.zIndex = '-1';
        
    }
    count++;
}
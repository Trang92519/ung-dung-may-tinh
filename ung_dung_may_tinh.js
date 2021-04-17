function cong(){
    //
    let ip1=+document.getElementById('ip1').value;
    let ip2=+document.getElementById('ip2').value;

    Sum=ip1 + ip2;
    document.getElementById('Rs').innerHTML=('Result'+Sum)
}
function tru(){
    let ip1= +document.getElementById('ip1').value;
    let ip2= +document.getElementById('ip2').value;

    Sub= ip1 - ip2;
   document.getElementById('rs').innerHTML=('Result '+Sub)
}
function nhan(){
    let ip1= +document.getElementById('ip1').value;
    let ip2= +document.getElementById('ip2').value;

    Mul= ip1*ip2;
    document.getElementById('rs').innerHTML=('Result '+Mul)
}
function chia(){
    let ip1= +document.getElementById('ip1').value;
    let ip2= +document.getElementById('ip2').value;

    Div=ip1/ip2;
    document.getElementById('rs').innerHTML=('Result'+Div)

}

/**************************************Login****************************************************************/
function SOUND() {
    var myAudio = document.getElementById('GMV');
    myAudio.muted = !myAudio.muted;
 }













//////////////////////////////////mental////////////////////////////////////
var x = document.getElementById("arrow-up");
window.onscroll = function() {
        if (document.documentElement.scrollTop > 4000) {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    /////////////////////////////////mental star///////////////////////////////
document.querySelectorAll(".text-star1").forEach((star, index) => {
    star.addEventListener("click", () => {
        document.querySelectorAll(".text-star1").forEach((ele, index) => {
            ele.style.color = "#eaeaea";
        });
        for (let i = 0; i <= index; i++) {
            document.querySelectorAll(".text-star1")[i].style.color = "yellow";
        }
    });
});



/*****************************SOUND********************************************/
function toggleMute() {
    var myAudio = document.getElementById('ws');
    myAudio.muted = !myAudio.muted;
 }
 /***************************ALBUM VEIW*************************************************/
 function show1(){
    document.getElementById('wv1').style.display = 'block';
    document.getElementById('wv2').style.display = 'none';
    document.getElementById('wt2a').style.display = 'none';
    document.getElementById('wt2b').style.display = 'block';
    document.getElementById('wt3a').style.display = 'none';
    document.getElementById('wt3b').style.display = 'block';
    document.getElementById('wt1a').style.display = 'none';
    document.getElementById('wt1b').style.display = 'block';
    document.getElementById('wt4a').style.display = 'none';
    document.getElementById('wt4b').style.display = 'block';
    document.getElementById('wt5a').style.display = 'none';
    document.getElementById('wt5b').style.display = 'block';
    document.getElementById('wt6a').style.display = 'none';
    document.getElementById('wt6b').style.display = 'block';
 }
 function show2(){
    document.getElementById('wt1a').style.display = 'block';
    document.getElementById('wt1b').style.display = 'none';
    document.getElementById('wt2a').style.display = 'none';
    document.getElementById('wt2b').style.display = 'block';
    document.getElementById('wt3a').style.display = 'none';
    document.getElementById('wt3b').style.display = 'block';
    document.getElementById('wt4a').style.display = 'none';
    document.getElementById('wt4b').style.display = 'block';
    document.getElementById('wt5a').style.display = 'none';
    document.getElementById('wt5b').style.display = 'block';
    document.getElementById('wt6a').style.display = 'none';
    document.getElementById('wt6b').style.display = 'block';
    document.getElementById('wv1').style.display = 'none';
    document.getElementById('wv2').style.display = 'block';
    document.getElementById('wv1').pause();
 }
 function show3(){
    document.getElementById('wt2a').style.display = 'block';
    document.getElementById('wt2b').style.display = 'none';
    document.getElementById('wt1a').style.display = 'none';
    document.getElementById('wt1b').style.display = 'block';
    document.getElementById('wt3a').style.display = 'none';
    document.getElementById('wt3b').style.display = 'block';
    document.getElementById('wt4a').style.display = 'none';
    document.getElementById('wt4b').style.display = 'block';
    document.getElementById('wt5a').style.display = 'none';
    document.getElementById('wt5b').style.display = 'block';
    document.getElementById('wt6a').style.display = 'none';
    document.getElementById('wt6b').style.display = 'block';
    document.getElementById('wv1').style.display = 'none';
    document.getElementById('wv2').style.display = 'block';
    document.getElementById('wv1').pause();
 }
 function show4(){
    document.getElementById('wt3a').style.display = 'block';
    document.getElementById('wt3b').style.display = 'none';
    document.getElementById('wt1a').style.display = 'none';
    document.getElementById('wt1b').style.display = 'block';
    document.getElementById('wt2a').style.display = 'none';
    document.getElementById('wt2b').style.display = 'block';
    document.getElementById('wt4a').style.display = 'none';
    document.getElementById('wt4b').style.display = 'block';
    document.getElementById('wt5a').style.display = 'none';
    document.getElementById('wt5b').style.display = 'block';
    document.getElementById('wt6a').style.display = 'none';
    document.getElementById('wt6b').style.display = 'block';
    document.getElementById('wv1').style.display = 'none';
    document.getElementById('wv2').style.display = 'block';
    document.getElementById('wv1').pause();
 }
 function show5(){
    document.getElementById('wt4a').style.display = 'block';
    document.getElementById('wt4b').style.display = 'none';
    document.getElementById('wt2a').style.display = 'none';
    document.getElementById('wt2b').style.display = 'block';
    document.getElementById('wt3a').style.display = 'none';
    document.getElementById('wt3b').style.display = 'block';
    document.getElementById('wt1a').style.display = 'none';
    document.getElementById('wt1b').style.display = 'block';
    document.getElementById('wt5a').style.display = 'none';
    document.getElementById('wt5b').style.display = 'block';
    document.getElementById('wt6a').style.display = 'none';
    document.getElementById('wt6b').style.display = 'block';
    document.getElementById('wv1').style.display = 'none';
    document.getElementById('wv2').style.display = 'block';
    document.getElementById('wv1').pause();
 }
 function show6(){
    document.getElementById('wt5a').style.display = 'block';
    document.getElementById('wt5b').style.display = 'none';
    document.getElementById('wt2a').style.display = 'none';
    document.getElementById('wt2b').style.display = 'block';
    document.getElementById('wt3a').style.display = 'none';
    document.getElementById('wt3b').style.display = 'block';
    document.getElementById('wt4a').style.display = 'none';
    document.getElementById('wt4b').style.display = 'block';
    document.getElementById('wt1a').style.display = 'none';
    document.getElementById('wt1b').style.display = 'block';
    document.getElementById('wt6a').style.display = 'none';
    document.getElementById('wt6b').style.display = 'block';
    document.getElementById('wv1').style.display = 'none';
    document.getElementById('wv2').style.display = 'block';
    document.getElementById('wv1').pause();
 }
 function show7(){
    document.getElementById('wt6a').style.display = 'block';
    document.getElementById('wt6b').style.display = 'none';
    document.getElementById('wt2a').style.display = 'none';
    document.getElementById('wt2b').style.display = 'block';
    document.getElementById('wt3a').style.display = 'none';
    document.getElementById('wt3b').style.display = 'block';
    document.getElementById('wt4a').style.display = 'none';
    document.getElementById('wt4b').style.display = 'block';
    document.getElementById('wt5a').style.display = 'none';
    document.getElementById('wt5b').style.display = 'block';
    document.getElementById('wt1a').style.display = 'none';
    document.getElementById('wt1b').style.display = 'block';
    document.getElementById('wv1').style.display = 'none';
    document.getElementById('wv2').style.display = 'block';
    document.getElementById('wv1').pause();
 }















 /***************************************************************Simulation games*********************************************************/
let menna_btn = document.getElementById('menna_scroll_button'); //scroll button in page(SimulationGames2).
window.onscroll = function(){
    if (scrollY >= 400)
    {
       menna_btn.style.display = "block";
    }
    else{
        menna_btn.style.display = "none";
    }
}
menna_btn.onclick = function (){
    scroll({
        top:0,
        behavior:"smooth" 
    })
}














/*********************************************************Action***********************************************************************/
function updateDate(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes()+":"+date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML = date.getDate() +"-"+parseInt(date.getMonth()+1)+"-"+date.getFullYear();  
}
setInterval(updateDate,100);

onload = updateDate();















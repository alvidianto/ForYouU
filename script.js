let persen = 0;

const fill = document.getElementById("fill");
const text = document.getElementById("percent");

const loading = setInterval(() => {

    persen++;

    fill.style.width = persen + "%";
    text.innerHTML = persen + "%";

    if (persen >= 100) {

        clearInterval(loading);

        setTimeout(opening, 500);

    }

}, 35);

function opening(){

document.body.innerHTML = `

<div class="opening">

<div class="stars"></div>

<h1 class="judul">For You ❤️</h1>

<p class="sub">
A little surprise made with love.
</p>

<button class="startBtn" onclick="masuk()">
Open Gift
</button>

</div>

`;

}

function masuk(){

document.body.innerHTML=`

<div class="welcome">

<div class="heart">❤️</div>

<h1>Welcome</h1>

<p>

Terima kasih sudah membuka hadiah ini.

Semoga kamu suka.

</p>

<button class="startBtn" onclick="alert('Bagian bunga kita buat selanjutnya')">

Continue →

</button>

</div>

`;

}

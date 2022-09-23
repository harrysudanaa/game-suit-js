// mendapatkan pilihan computer
function getPilihanCom() {
   const com = Math.random();
   if (com < 0.34) return "gunting";
   if (com >= 0.34 && com < 0.67) return "kertas";
   return "batu";
}
// mendapatkan hasil
function getHasil(player, com) {
   if (player == com) return "SERI!";
   if (player == "gunting") return com == "kertas" ? "MENANG!" : "KALAH!";
   if (player == "kertas") return com == "batu" ? "MENANG!" : "KALAH!";
   if (player == "batu") return com == "gunting" ? "MENANG!" : "KALAH!";
}
// acak gambar pada com ketika memilih
function acak() {
   const imgComputer = document.querySelector(".img-com");
   const gambar = ["gunting", "batu", "kertas"];
   let i = 0;
   const waktuMulai = new Date().getTime();
   setInterval(function () {
      if (new Date().getTime() - waktuMulai > 1000) {
         clearInterval;
         return;
      }
      imgComputer.setAttribute("src", "../GameSuit2.0/img/" + gambar[i++] + ".png");
      if (i == gambar.length) i = 0;
   }, 100);
}
// score
let sPlayer = 0;
let sCom = 0;
function scoreMain(hasil) {
   // rules
   if (hasil == "SERI!") (sPlayer = sPlayer), (sCom = sCom);
   if (hasil == "MENANG!") sPlayer += 1;
   if (hasil == "KALAH!") sCom += 1;
   // tuliskan hasil ke interface browser
   const scoreCom = document.querySelector(".score-com");
   scoreCom.textContent = sCom;
   const scoreP = document.querySelector(".score-player");
   scoreP.textContent = sPlayer;
}

const pilihan = document.querySelectorAll(".player-container div img");
pilihan.forEach(function (pil) {
   pil.addEventListener("click", function () {
      // dapatkan pilihan com
      const pCom = getPilihanCom();
      // dapatkan pilihan player
      const pPlayer = pil.className;
      // dapatkan hasil
      const hasil = getHasil(pPlayer, pCom);
      acak();
      // hasil keluar
      setTimeout(function () {
         // ubah gambar interface com
         const imgCom = document.querySelector(".img-com");
         imgCom.setAttribute("src", "../GameSuit2.0/img/" + pCom + ".png");
         // tampilkan hasil
         const info = document.querySelector(".result");
         info.textContent = hasil;
         // tampilkan score
         scoreMain(hasil);
      }, 1000);
   });
});
// atau

// // pilihan gunting
// const pGunting = document.querySelector(".gunting");
// pGunting.addEventListener("click", function () {
//    // dapatkan pilihan com
//    const pCom = getPilihanCom();
//    // dapatkan pilihan player
//    const pPlayer = pGunting.className;
//    // dapatkan hasil
//    const hasil = getHasil(pPlayer, pCom);
//    // ubah gambar interface com
//    const imgCom = document.querySelector(".img-com");
//    imgCom.setAttribute("src", "../GameSuit2.0/img/" + pCom + ".png");
//    // tampilkan hasil
//    const info = document.querySelector(".result");
//    info.textContent = hasil;
// });

// // pilihan gunting
// const pBatu = document.querySelector(".batu");
// pBatu.addEventListener("click", function () {
//    // dapatkan pilihan com
//    const pCom = getPilihanCom();
//    // dapatkan pilihan player
//    const pPlayer = pBatu.className;
//    // dapatkan hasil
//    const hasil = getHasil(pPlayer, pCom);
//    // ubah gambar interface com
//    const imgCom = document.querySelector(".img-com");
//    imgCom.setAttribute("src", "../GameSuit2.0/img/" + pCom + ".png");
//    // tampilkan hasil
//    const info = document.querySelector(".result");
//    info.textContent = hasil;
// });

// // pilihan gunting
// const pKertas = document.querySelector(".kertas");
// pKertas.addEventListener("click", function () {
//    // dapatkan pilihan com
//    const pCom = getPilihanCom();
//    // dapatkan pilihan player
//    const pPlayer = pKertas.className;
//    // dapatkan hasil
//    const hasil = getHasil(pPlayer, pCom);
//    // ubah gambar interface com
//    const imgCom = document.querySelector(".img-com");
//    imgCom.setAttribute("src", "../GameSuit2.0/img/" + pCom + ".png");
//    // tampilkan hasil
//    const info = document.querySelector(".result");
//    info.textContent = hasil;
// });

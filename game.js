// async function suit() {
//     await Swal.fire({
//         title: "Nah",
//         text: 'sebelum dapetin clue pertama kita main game dulu yak!',
//         icon: "info"
//     });

//     await Swal.fire({
//         title: "Hmmm...",
//         text: "Kira-kira kita bakal main game apa yaa?",
//         imageUrl: "assets/thinking.png",
//         imageWidth: 100,
//         imageAlt: "Thinking emoji"
//     });

//     await Swal.fire({
//         title: "Aha!",
//         text: "Kita main game suwit aja gimana?",
//         imageUrl: "assets/pngegg.png",
//         imageWidth: 100,
//         imageAlt: "Idea emoji"
//     });
//     await Swal.fire({
//         title: "Pasti udah tau dong..",
//         imageUrl: "assets/smile.png",
//         imageWidth: 100,
//         imageAlt: "Smile emoji"
//     });
//     await Swal.fire({
//         title: "Persiapan yaa!!",
//         icon: "warning"
//     });
//     await Swal.fire({
//         timer: 5000,
//         timerProgressBar: true,
//         didOpen: () => {
//             showLoading();
//             const timer = getPopup().querySelector(".swal2-title");
//             timerInterval = setInterval(() => {
//                 const seconds = Math.ceil(getTimerLeft() / 1000); // Ubah mili detik ke detik
//                 timer.textContent = `Kita mulai dalam ${seconds}`;
//             }, 100);
//         },
//         willClose: () => {
//             clearInterval(timerInterval);
//         }
//     })
//     await Swal.fire({
//         title: "Enjoy The Game!!",
//         timer: "2000",
//         imageUrl: "assets/party.png",
//         imageAlt: "party emoji",
//         imageWidth: 100,
//         showConfirmButton: false,
//     })
//     let user;
//     do {
//         const { value: userInput } = await Swal.fire({
//             title: "Silahkan masukkan pilihan (kertas gunting batu)",
//             input: "text",
//             inputLabel: "Jawaban kamu",
//             inputValue: "kertas",
//             showCancelButton: true,
//             inputValidator: (value) => {
//                 if (!value) {
//                     return "You need to write something!";
//                 }
//             }
//         });
//         user = userInput.toLowerCase();
//         if (user !== "batu" && user !== "gunting" && user !== "kertas") {
//             await Swal.fire({
//                 title: "Ish",
//                 text: `Kok kamu masukin ${user} sih..\nkan disuruh nya batu, gunting, atau kertas.`,
//                 icon: "error"
//             });
//             await Swal.fire({
//                 title: "Habis ini masukin yang bener yaa...",
//                 text: 'Awas aja salah lagi...',
//                 icon: "warning"
//             });
//         }
//     } while (user !== "batu" && user !== "gunting" && user !== "kertas");

//     let number = Math.random();
//     let result = 0;
//     let suit = "";

//     if (number <= 0.3) {
//         result = 1;
//     } else if (number > 0.5) {
//         result = 2;
//     } else {
//         result = 3;
//     }

//     if (result === 1) {
//         suit = "gunting";
//     } else if (result === 2) {
//         suit = "kertas";
//     } else {
//         suit = "batu";
//     }
//     // Lanjutkan dengan logika permainan setelah loop
//     let result2 = "";

//     if (user === suit) {
//         result2 = "Seri";
//     } else if ((user === "gunting" && result === 2) || (user === "kertas" && result === 3) || (user === "batu" && result === 1)) {
//         result2 = "Menang";
//     } else {
//         result2 = "Kalah";
//     }

//     if (result2 === "Menang") {
//         await Swal.fire({
//             title: "Yeyy",
//             text: `Kamu memilih ${user} dan komputer memilih ${suit}\nhasilnya kamu ${result2}, Selamat kamu bisa dapat clue nya`,
//             icon: "success"
//         });
//         await Swal.fire({
//             title: "Nah...",
//             text: `Sesuai Janji ku kalau menang aku kasih clue pertama nya`,
//             imageUrl: "assets/promise.png",
//             imageAlt: "promise symbol",
//             imageWidth: 150,
//         });
//         await Swal.fire({
//             title: "Jadi",
//             text: "Udah siap buat dapetin clue pertama nya?",
//             icon: "question",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Siap dong",
//             cancelButtonText: "Apa sih, sok asik!"
//         }).then(async (result) => {
//             if (result.isConfirmed) {
//                 await Swal.fire('Clue nya cuma muncul 5 detik, kalau gak pede dapet screenshoot aja')
//                 await Swal.fire({
//                     title: "Siap-Siap",
//                     html: "Clue nya bakal muncul dalam <br ><strong><h1></h1></strong>",
//                     timer: 3000,
//                     timerProgressBar: true,
//                     didOpen: () => {
//                         showLoading();
//                         const timer = getPopup().querySelector("h1");
//                         timerInterval = setInterval(() => {
//                             const seconds = Math.ceil(getTimerLeft() / 1000); // Ubah mili detik ke detik
//                             timer.textContent = seconds;
//                         }, 100);
//                     },
//                     willClose: () => {
//                         clearInterval(timerInterval);
//                     }
//                 })
//                 await Swal.fire({
//                     text: "Aku terletak 10 huruf setelah huruf A dan mundur 5 huruf dari posisi terakhir, itu adalah huruf pertama dari nama ku",
//                     timer: 5000,
//                     imageUrl: "assets/thinking.png",
//                     imageWidth: 100,
//                     imageAlt: "Thinking emoji",
//                     showConfirmButton: false,
//                     timerProgressBar: true

//                 })
//                 await Swal.fire({
//                     title: "Semoga dapet jawaban yaa..",
//                     text: "Yuk lanjut challenge selanjut nya buat dapet clue selanjutnya",
//                     timer: "5000",
//                     imageUrl: "assets/party.png",
//                     imageAlt: "party emoji",
//                     imageWidth: 100,
//                     showConfirmButton: false,
//                 })
//             } else if (result.dismiss === DismissReason.cancel) {
//                 Swal.fire({
//                     title: "Oke Fine!",
//                     text: `Cari aja jawabannya sendiri`,
//                     imageUrl: "assets/anggry.png",
//                     imageAlt: "angry emoji",
//                     imageWidth: 150,
//                 });
//             }
//         });

//     } else {
//         await Swal.fire({
//             title: "Yahhh",
//             text: `Karena kamu memilih ${user} dan komputer memilih ${suit}\njadi hasilnya kamu ${result2}, clue nya belum bisa kamu dapatin deh`,
//             imageUrl: "assets/sad.png",
//             imageAlt: "sad emoji",
//             imageWidth: 100,
//         });
//         await Swal.fire({
//             title: "Yuk Coba lagi",
//             text: 'kalau kata pepatah...',
//             imageUrl: "assets/thumbsup.png",
//             imageAlt: "semangat emoji",
//             imageWidth: 100,
//         })
//         await Swal.fire("Tau ah, coba lagi aja yang penting")
//     }
// }

// // function factorialGames(params) {
    
// // }


async function suit() {
    await Swal.fire({
        title: "Nah",
        text: 'sebelum dapetin clue pertama kita main game dulu yak!',
        icon: "info"
    });

    await Swal.fire({
        title: "Hmmm...",
        text: "Kira-kira kita bakal main game apa yaa?",
        imageUrl: "assets/thinking.png",
        imageWidth: 100,
        imageAlt: "Thinking emoji"
    });

    await Swal.fire({
        title: "Aha!",
        text: "Kita main game suwit aja gimana?",
        imageUrl: "assets/pngegg.png",
        imageWidth: 100,
        imageAlt: "Idea emoji"
    });
    await Swal.fire({
        title: "Pasti udah tau dong..",
        imageUrl: "assets/smile.png",
        imageWidth: 100,
        imageAlt: "Smile emoji"
    });
    await Swal.fire({
        title: "Persiapan yaa!!",
        icon: "warning"
    });
    await Swal.fire({
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector(".swal2-title");
            timerInterval = setInterval(() => {
                const seconds = Math.ceil(Swal.getTimerLeft() / 1000); // Ubah mili detik ke detik
                timer.textContent = `Kita mulai dalam ${seconds}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    })
    await Swal.fire({
        title: "Enjoy The Game!!",
        timer: "2000",
        imageUrl: "assets/party.png",
        imageAlt: "party emoji",
        imageWidth: 100,
        showConfirmButton: false,
    })
    let user;
    do {
        const { value: userInput } = await Swal.fire({
            title: "Silahkan masukkan pilihan (kertas gunting batu)",
            input: "text",
            inputLabel: "Jawaban kamu",
            inputValue: "kertas",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "You need to write something!";
                }
            }
        });
        console.log(userInput);
        user = userInput.toLowerCase();
        if (user !== "batu" && user !== "gunting" && user !== "kertas") {
            await Swal.fire({
                title: "Ish",
                text: `Kok kamu masukin ${user} sih..\nkan disuruh nya batu, gunting, atau kertas.`,
                icon: "error"
            });
            await Swal.fire({
                title: "Habis ini masukin yang bener yaa...",
                text: 'Awas aja salah lagi...',
                icon: "warning"
            });
        }
    } while (user !== "batu" && user !== "gunting" && user !== "kertas");
    const choices = ["batu", "gunting", "kertas"];
    let userInput = user.toLowerCase()
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result2 = "";
    console.log(computerChoice);
    if (userInput === computerChoice) {
        result2 = "Seri";
    } else if ((userInput === "gunting" && computerChoice === 'kertas') || (userInput === "kertas" && computerChoice === 'batu') || (userInput === "batu" && computerChoice === 'gunting')) {
        result2 = "Menang";
    } else {
        result2 = "Kalah";
    }
console.log(result2);
    if (result2 === "Menang") {
        await Swal.fire({
            title: "Yeyy",
            text: `Kamu memilih ${user} dan komputer memilih ${computerChoice}\nhasilnya kamu ${result2}, Selamat kamu bisa dapat clue nya`,
            icon: "success"
        });
        await Swal.fire({
            title: "Nah...",
            text: `Sesuai Janji ku kalau menang aku kasih clue pertama nya`,
            imageUrl: "assets/promise.png",
            imageAlt: "promise symbol",
            imageWidth: 150,
        });
        await Swal.fire({
            title: "Jadi",
            text: "Udah siap buat dapetin clue pertama nya?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Siap dong",
            cancelButtonText: "Apa sih, sok asik!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await Swal.fire('Clue nya cuma muncul 5 detik, kalau gak pede dapet screenshoot aja')
                await Swal.fire({
                    title: "Siap-Siap",
                    html: "Clue nya bakal muncul dalam <br ><strong><h1></h1></strong>",
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("h1");
                        timerInterval = setInterval(() => {
                            const seconds = Math.ceil(Swal.getTimerLeft() / 1000); // Ubah mili detik ke detik
                            timer.textContent = seconds;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                })
                await Swal.fire({
                    text: "Aku terletak 10 huruf setelah huruf A dan mundur 5 huruf dari posisi terakhir, itu adalah huruf pertama dari nama ku",
                    timer: 5000,
                    imageUrl: "assets/thinking.png",
                    imageWidth: 100,
                    imageAlt: "Thinking emoji",
                    showConfirmButton: false,
                    timerProgressBar: true

                })
                await Swal.fire({
                    title: "Semoga dapet jawaban yaa..",
                    text: "Yuk lanjut challenge selanjut nya buat dapet clue selanjutnya",
                    timer: "5000",
                    imageUrl: "assets/party.png",
                    imageAlt: "party emoji",
                    imageWidth: 100,
                    showConfirmButton: false,
                })
                document.querySelector('.hidden-1').classList.remove('hidden-1')
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: "Oke Fine!",
                    text: `Cari aja jawabannya sendiri`,
                    imageUrl: "assets/anggry.png",
                    imageAlt: "angry emoji",
                    imageWidth: 150,
                });
            }
        });

    } else {
        await Swal.fire({
            title: "Yahhh",
            text: `Karena kamu memilih ${user} dan komputer memilih ${computerChoice}\njadi hasilnya kamu ${result2}, clue nya belum bisa kamu dapatin deh`,
            imageUrl: "assets/sad.png",
            imageAlt: "sad emoji",
            imageWidth: 100,
        });
        await Swal.fire({
            title: "Yuk Coba lagi",
            text: 'kalau kata pepatah...',
            imageUrl: "assets/thumbsup.png",
            imageAlt: "semangat emoji",
            imageWidth: 100,
        })
        await Swal.fire({
            title: "Apa yaa...",
            text: "Tau ah, yang penting jangan nyerah yaa. Coba lagi habis ini"
        })
    }

}

async function tebak() {
    await Swal.fire("Selamat yaa udh bisa ngalahin permainan sebelum nya")
    const { value: userInput } = await Swal.fire({
        title: "Mau tau dong",
        input: "number",
        inputLabel: "Udah berapa kali percobaan buat naklukin suit tadi??",
        inputValue: 1,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return "You need to write something!";
            }
        }
    });
    if (userInput < 3) {
        await Swal.fire({
            title: `${userInput} doang!!`,
            icon: "warning"
        })
        await Swal.fire({
            title: "Serius nihh??",
            imageWidth: 100,
            imageAlt: "Thinking emoji",
        })
        await Swal.fire("Cepet bangettt")
        await Swal.fire({
            title: "Selamat yaa..",
            text: "kamu berati lebih pinter daripada yang buat nya",
            imageUrl: "assets/party.png",
            imageAlt: "party emoji",
            imageWidth: 100,
        })
    } else {
        await Swal.fire({
            title: `Kalau butuh ${userInput} kali sih wajar, soalnya pembuatnya juga butuh berkali-kali buat menangin suit itu`,
            imageUrl: "assets/smile.png",
            imageWidth: 100,
            imageAlt: "Smile emoji"
        })
        await Swal.fire("Padahal aku yang buat, aku sendiri yang kalah, agak aneh emang ini orang")
    }
    await Swal.fire("Nah,kalau sebelumnya kita udah mikir gimana cara nya buat naklukin challenge nya sekarang kita main yang lebih gampang deh")
    await Swal.fire("Buat kali ini gak usah ada challenge deh, kita langsung kasih clue nya")
    await Swal.fire({
        title: "Clue nya...",
        text: "Clue nya berhubungan dengan orang yang ada di gambar di atas, Udah tau kan siapa orang diatas?",
        imageWidth: 400,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpuHW2FTBA-l7szaohgc5RKBiri8fUwlGrA",
        imageAlt: "Ahmad Dhani image",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Tau Dong",
        cancelButtonText: "Siapa tuh?"
    }).then(async (result) => {
        if (result.isConfirmed) {
            await Swal.fire("Nah Persiapan yaa..")
        } else if (result.dismiss === Swal.DismissReason.cancel) {
           await Swal.fire({
                title: "Cari tau sendiri lah",
                text:"Enak aja nyuruh-nyuruh",
                imageUrl: "assets/smile.png",
                imageWidth: 100,
            })
        }
        await Swal.fire("Seperti biasa, clue nya gak bakalan tampil lama")
        await Swal.fire("Jadi persiapan kalau mau yang screenshot")
        await Swal.fire({
            title: "Siap-Siap",
            html: "Clue nya bakal muncul dalam <br ><strong><h1></h1></strong>",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("h1");
                timerInterval = setInterval(() => {
                    const seconds = Math.ceil(Swal.getTimerLeft() / 1000); // Ubah mili detik ke detik
                    timer.textContent = seconds;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        })
        await Swal.fire({
            title:"2 Huruf",
            text: "Nama panggilan anak pertama Ahmad dhani",
            timer: 5000,
            imageUrl: "assets/thinking.png",
            imageWidth: 100,
            imageAlt: "Thinking emoji",
            showConfirmButton: false,
            timerProgressBar: true

        })
    })
    document.querySelector('.hidden-2').classList.remove('hidden-2')

}

async function youtube(){
    const generateNumber = Math.floor(Math.random() * 10) + 1; 
    await Swal.fire({
        title: "Nah..",
        text: "Kita udah sampai ke clue yang terakhir nih",
        imageUrl:"assets/clap-hand-gesture.png",
        imageWidth:200,
        confirmButtonText:'Yuk klik disini',
        showCancelButton:false,
        imageAlt: "clap emoji"
    })
    await Swal.fire({
        title: "Tapi..",
        text: "Seperti biasa, gak seru rasanya kalau gak ada challenge sebelum dikasih clue nya",
             imageUrl:"assets/pngegg.png",
        imageWidth:100
    })
    await Swal.fire({
        title:"Jadi...",
        text: "challenge kali ini berhuhungan sama matematika",
        icon:"info"
    })
    await Swal.fire({
        title: "Jadi..",
        text:"Persiapkan alat tulis nya yaa..",
        icon:"warning"
    })
        await Swal.fire({
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector(".swal2-title");
            timerInterval = setInterval(() => {
                const seconds = Math.ceil(Swal.getTimerLeft() / 1000); // Ubah mili detik ke detik
                timer.textContent = `Kita mulai dalam ${seconds}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    })
    await Swal.fire({
        title: "Good luck!!",
        timer: "1000",
        imageUrl: "assets/party.png",
        imageAlt: "party emoji",
        imageWidth: 100,
        showConfirmButton: false,
    })
    factorialChallenge(generateNumber)
    await Swal.fire({
        title: "Clue Terakhir nya",
        text: "kita bakal nonton sebuah video",
        icon: 'question'
    })
    await Swal.fire({
        title: "Nah..",
        text: "Di video itu nama panggilan ku akan disebut 2 kali",
        icon: "info"
    })
    await Swal.fire({
        title: "Habis itu..",
        text:"Tinggal kamu cocokin deh sama clue yang udah kamu dapetin sebelum nya, gampang kan!",
        imageUrl: "assets/thumbsup.png",
        imageWidth:100,
        imageAlt: "Thumbs icon"
    })
     window.location = "https://youtu.be/T7s3IFMktLo?si=55ZejHoCVgFuQA3D&t=115"
}

const factorialChallenge = async (number) => {
        const correctAnswer = factorial(number);const { value: userInput } = await Swal.fire({
            title: `Tuliskan hasil dari faktorial ${generateNumber}!`,
            input: "number",
            inputLabel: "Jawaban kamu",
            inputValue: "1",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "You need to write something!";
                }
            }
        

        if (userInput === correctAnswer) {
            await Swal.fire({
                title: "Selamat!",
                text: "Jawaban kamu benar. Kamu siap untuk melanjutkan!",
                icon: "success",
            });
        } else {
           await Swal.fire({
                title: "Yahh",
                text`Jawabannya harus nya${correctAnswer} tapi kamu malah jawab ${userInput}, yuk pelajari lagi apa itu faktorial!`;,
                icon:"error"
                await Swal.fire({
                    title:"Coba lagi yah",
                     imageUrl: "assets/thumbsup.png",
            imageAlt: "semangat emoji",
            imageWidth: 100,

                })
                return;
            })
        }
    };

function factorial(n) { 
    if (n === 0) { 
        return 1; 
    } 
    else { 
        return n * factorial( n - 1 ); 
    } 
} 

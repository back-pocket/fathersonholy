const sounds = {
    "q": new Audio('sounds/aw-sound.mp3'),
    "w": new Audio('sounds/aw-sound.mp3'),
    "e": new Audio('sounds/aw-sound.mp3'),
    "r": new Audio('sounds/aw-sound.mp3'),
    "t": new Audio('sounds/aw-sound.mp3'),
    "y": new Audio('sounds/aw-sound.mp3'),
    "u": new Audio('sounds/aw-sound.mp3'),
    "i": new Audio('sounds/aw-sound.mp3'),
    "o": new Audio('sounds/aw-sound.mp3'),
    "p": new Audio('sounds/aw-sound.mp3'),
    "a": new Audio('sounds/aw-sound.mp3'),
    "s": new Audio('sounds/aw-sound.mp3'),
    "d": new Audio('sounds/aw-sound.mp3'),
    "f": new Audio('sounds/aw-sound.mp3'),
    "g": new Audio('sounds/aw-sound.mp3'),
    "h": new Audio('sounds/aw-sound.mp3'),
    "j": new Audio('sounds/aw-sound.mp3'),
    "k": new Audio('sounds/aw-sound.mp3'),
    "l": new Audio('sounds/aw-sound.mp3'),
    "z": new Audio('sounds/aw-sound.mp3'),
    "x": new Audio('sounds/aw-sound.mp3'),
    "c": new Audio('sounds/aw-sound.mp3'),
    "v": new Audio('sounds/aw-sound.mp3'),
    "b": new Audio('sounds/aw-sound.mp3'),
    "n": new Audio('sounds/aw-sound.mp3'),
    "m": new Audio('sounds/aw-sound.mp3'),
    " ": new Audio('sounds/creeper-sound.mp3'), 
};


const backgrounds = {
    "q": "url('page3Images/desktopQ.jpeg')",
    "w": "url('page3Images/desktopW.jpeg')",
    "e": "url('page3Images/desktopE.jpeg')",
    "r": "url('page3Images/desktopR.jpeg')",
    "t": "url('page3Images/desktopT.jpeg')",
    "y": "url('page3Images/desktopY.jpeg')",
    "u": "url('page3Images/desktopU.jpeg')",
    "i": "url('page3Images/desktopI.jpeg')",
    "o": "url('page3Images/desktopO.jpeg')",
    "p": "url('page3Images/desktopP.jpeg')",
    "a": "url('page3Images/desktopA.jpeg')",
    "s": "url('page3Images/desktopS.jpeg')",
    "d": "url('page3Images/desktopD.jpeg')",
    "f": "url('page3Images/desktopF.jpeg')",
    "g": "url('page3Images/desktopG.jpeg')",
    "h": "url('page3Images/desktopH.jpeg')",
    "j": "url('page3Images/desktopJ.jpeg')",
    "k": "url('page3Images/desktopK.jpeg')",
    "l": "url('page3Images/desktopL.jpeg')",
    "z": "url('page3Images/desktopZ.jpeg')",
    "x": "url('page3Images/desktopX.jpeg')",
    "c": "url('page3Images/desktopC.jpeg')",
    "v": "url('page3Images/desktopV.jpeg')",
    "b": "url('page3Images/desktopB.jpeg')",
    "n": "url('page3Images/desktopN.jpeg')",
    "m": "url('page3Images/desktopM.jpeg')",
    " ": "url('page3Images/monkey.jpg')", 
};


let typedPhrase = "";


const redirectKeywords = [
    { keyword: "gay", url: "https://youtu.be/68FKbqOla3s?si=91ZOEwguajrbb6xh" }, 
    { keyword: "penis", url: "https://youtu.be/FLAvtsiduA4?si=0NPAdORyKQIwoN6b" }, 
    { keyword: "lesbian", url: "https://www.youtube.com/watch?v=I0MT8SwNa_U" },
    { keyword: "fuck", url: "https://www.youtube.com/watch?v=WQO-aOdJLiw" },
    { keyword: "aaa", url: "https://www.youtube.com/watch?v=zKFD0m7Xi8g" },
    { keyword: "why", url: "https://youtu.be/BBJa32lCaaY?si=VtPu3i6mQOFpcCeH" },

];

document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();


    if (sounds[key]) {
        sounds[key].play(); 
    }

   
    if (backgrounds[key]) {
        document.body.style.backgroundImage = backgrounds[key]; 
    } else {
        document.body.style.backgroundImage = "none"; 
    }

   
    if (key !== "Backspace" && key !== "Delete") {
        typedPhrase += key;
    } else if (key === "Backspace") {
        typedPhrase = typedPhrase.slice(0, -1); 
    }

    
    redirectKeywords.forEach(({ keyword, url }) => {
        if (typedPhrase.includes(keyword)) {
            window.location.href = url; 
        }
    });
});

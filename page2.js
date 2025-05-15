const sounds = {
    "q": new Audio('sounds/grindr-sound.mp3'),
    "w": new Audio('sounds/grindr-sound.mp3'),
    "e": new Audio('sounds/grindr-sound.mp3'),
    "r": new Audio('sounds/grindr-sound.mp3'),
    "t": new Audio('sounds/grindr-sound.mp3'),
    "y": new Audio('sounds/grindr-sound.mp3'),
    "u": new Audio('sounds/grindr-sound.mp3'),
    "i": new Audio('sounds/grindr-sound.mp3'),
    "o": new Audio('sounds/grindr-sound.mp3'),
    "p": new Audio('sounds/grindr-sound.mp3'),
    "a": new Audio('sounds/grindr-sound.mp3'),
    "s": new Audio('sounds/grindr-sound.mp3'),
    "d": new Audio('sounds/grindr-sound.mp3'),
    "f": new Audio('sounds/grindr-sound.mp3'),
    "g": new Audio('sounds/grindr-sound.mp3'),
    "h": new Audio('sounds/grindr-sound.mp3'),
    "j": new Audio('sounds/grindr-sound.mp3'),
    "k": new Audio('sounds/grindr-sound.mp3'),
    "l": new Audio('sounds/grindr-sound.mp3'),
    "z": new Audio('sounds/grindr-sound.mp3'),
    "x": new Audio('sounds/grindr-sound.mp3'),
    "c": new Audio('sounds/grindr-sound.mp3'),
    "v": new Audio('sounds/grindr-sound.mp3'),
    "b": new Audio('sounds/grindr-sound.mp3'),
    "n": new Audio('sounds/grindr-sound.mp3'),
    "m": new Audio('sounds/grindr-sound.mp3'),
    " ": new Audio('sounds/eagle-sound.mp3'), 
};


const backgrounds = {
    "q": "url('page2Images/desktopQ.jpg')",
    "w": "url('page2Images/desktopW.jpg')",
    "e": "url('page2Images/desktopE.jpg')",
    "r": "url('page2Images/desktopR.jpg')",
    "t": "url('page2Images/desktopT.jpg')",
    "y": "url('page2Images/desktopY.jpg')",
    "u": "url('page2Images/desktopU.jpg')",
    "i": "url('page2Images/desktopI.jpg')",
    "o": "url('page2Images/desktopO.jpg')",
    "p": "url('page2Images/desktopP.jpg')",
    "a": "url('page2Images/desktopA.jpg')",
    "s": "url('page2Images/desktopS.jpg')",
    "d": "url('page2Images/desktopD.jpg')",
    "f": "url('page2Images/desktopF.jpg')",
    "g": "url('page2Images/desktopG.jpg')",
    "h": "url('page2Images/desktopH.jpg')",
    "j": "url('page2Images/desktopJ.jpg')",
    "k": "url('page2Images/desktopK.jpg')",
    "l": "url('page2Images/desktopL.jpg')",
    "z": "url('page2Images/desktopZ.jpg')",
    "x": "url('page2Images/desktopX.jpg')",
    "c": "url('page2Images/desktopC.jpg')",
    "v": "url('page2Images/desktopV.jpg')",
    "b": "url('page2Images/desktopB.jpg')",
    "n": "url('page2Images/desktopN.jpg')",
    "m": "url('page2Images/desktopM.jpg')",
    " ": "url('page2Images/space.jpg')", 
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

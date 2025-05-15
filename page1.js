const sounds = {
    "q": new Audio('sounds/choir-sound.mp3'),
    "w": new Audio('sounds/choir-sound.mp3'),
    "e": new Audio('sounds/choir-sound.mp3'),
    "r": new Audio('sounds/choir-sound.mp3'),
    "t": new Audio('sounds/choir-sound.mp3'),
    "y": new Audio('sounds/choir-sound.mp3'),
    "u": new Audio('sounds/choir-sound.mp3'),
    "i": new Audio('sounds/choir-sound.mp3'),
    "o": new Audio('sounds/choir-sound.mp3'),
    "p": new Audio('sounds/choir-sound.mp3'),
    "a": new Audio('sounds/choir-sound.mp3'),
    "s": new Audio('sounds/choir-sound.mp3'),
    "d": new Audio('sounds/choir-sound.mp3'),
    "f": new Audio('sounds/choir-sound.mp3'),
    "g": new Audio('sounds/choir-sound.mp3'),
    "h": new Audio('sounds/choir-sound.mp3'),
    "j": new Audio('sounds/choir-sound.mp3'),
    "k": new Audio('sounds/choir-sound.mp3'),
    "l": new Audio('sounds/choir-sound.mp3'),
    "z": new Audio('sounds/choir-sound.mp3'),
    "x": new Audio('sounds/choir-sound.mp3'),
    "c": new Audio('sounds/choir-sound.mp3'),
    "v": new Audio('sounds/choir-sound.mp3'),
    "b": new Audio('sounds/choir-sound.mp3'),
    "n": new Audio('sounds/choir-sound.mp3'),
    "m": new Audio('sounds/choir-sound.mp3'),
    " ": new Audio('sounds/space-sound.mp3'), 
};


const backgrounds = {
    "q": "url('page1Images/desktopQ.jpg')",
    "w": "url('page1Images/desktopW.jpg')",
    "e": "url('page1Images/desktopE.jpg')",
    "r": "url('page1Images/desktopR.jpg')",
    "t": "url('page1Images/desktopT.jpg')",
    "y": "url('page1Images/desktopY.jpg')",
    "u": "url('page1Images/desktopU.jpg')",
    "i": "url('page1Images/desktopI.jpg')",
    "o": "url('page1Images/desktopO.jpg')",
    "p": "url('page1Images/desktopP.jpg')",
    "a": "url('page1Images/desktopA.jpg')",
    "s": "url('page1Images/desktopS.jpg')",
    "d": "url('page1Images/desktopD.jpg')",
    "f": "url('page1Images/desktopF.jpg')",
    "g": "url('page1Images/desktopG.jpg')",
    "h": "url('page1Images/desktopH.jpg')",
    "j": "url('page1Images/desktopJ.jpg')",
    "k": "url('page1Images/desktopK.jpg')",
    "l": "url('page1Images/desktopL.jpg')",
    "z": "url('page1Images/desktopZ.jpg')",
    "x": "url('page1Images/desktopX.jpg')",
    "c": "url('page1Images/desktopC.jpg')",
    "v": "url('page1Images/desktopV.jpg')",
    "b": "url('page1Images/desktopB.jpg')",
    "n": "url('page1Images/desktopN.jpg')",
    "m": "url('page1Images/desktopM.jpg')",
    " ": "url('page1Images/space.jpg')", 
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

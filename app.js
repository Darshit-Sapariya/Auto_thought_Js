let btn = document.getElementById("btn");
let display = document.querySelector(".bord-display");

let ideas = ["अपने आप पर विश्वास रखें, क्योंकि यही आपको दूसरों से अलग करता है. ",
    "आत्मविश्वास से ही आप अपनी मंजिल तक पहुंच सकते हैं. ",
    "जो लोग खुद पर विश्वास करते हैं, वे ही दुनिया को बदल सकते हैं.", 
    "दुःख भोगने से ही सुख के मूल्य का ज्ञान होता है. ",
    "सच्चे लोगों को कभी प्रशंसा की आवश्यकता नहीं होती और असली फूलों को कभी इत्र लगाने की ज़रूरत नहीं पड़ती है." ,
    "जीवन में सफलता के लिए, संकल्प और समर्पण दोनों की आवश्यकता होती है. ",
    "आपका सफलता आपकी सोच पर निर्भर करता है. ",
    "जीवन में समस्याओं का सामना करना अनिवार्य है, लेकिन उन्हें हल करना आपके अंदर की ताकत और सक्षमता का परिचय देता है." ,
    "सफल और असफल लोग अपनी क्षमताओं में बहुत भिन्न नहीं होते हैं. ",
    "जिंदगी में कुछ पाने के लिए कुछ खोना पड़ता है, और कुछ खोने के लिए बहुत कुछ पाना पड़ता है." ,
    "महत्वपूर्ण बात यह नहीं है कि हर बच्चे को पढ़ाया जाना चाहिए, बल्कि हर बच्चे को सीखने की इच्छा दी जानी चाहिए."
];


btn.addEventListener("click",()=>{
let random = Math.floor(Math.random()*ideas.length);
let output = ideas[random];
display.textContent = output;
console.log(output);
});



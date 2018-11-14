function draftSubmission(){
    console.log("draftSubmission");
    var text = document.getElementById("mathText").value;
    var new_text = "$$" + text + "$$";
    //console.log(new_text);
    document.getElementById("HTML_CSS").innerHTML = new_text;
    MathJax.Hub.Typeset("HTML_CSS",function(){
        getSVG();
    });
}

function clearDraft(){
    console.log("clearDraft");
    document.getElementById("mathText").value = "";
}

function getSVG(){
    console.log("getSVG");
    var svg = document.getElementsByTagName("svg")[2];
    var serializer = new XMLSerializer();
    var str = serializer.serializeToString(svg);
    document.getElementById("svgCode").value = str;
}

function pickExample(n){
    switch(n){
        case 1: return "f(x|\\mu,\\sigma^2)=\\frac{1}{\\sqrt{2\\pi\\sigma^2}}e^{-\\frac{(x-\\mu)^2}{2\\mu^2}}";
        case 2: return "e^{i\\pi}+1=0";
        case 3: return "e^{x}=\\lim_{n\\to\\infty}=\\left(1+\\frac{x}{n}\\right)^{n}";
        case 4: return "e^{ix}=\\cos{x}+i\\sin{x}";
        case 5: return "\\Gamma(z) = \\int_{0}^{\\infty}x^{z-1}e^{-x}dx";
        case 6: return "\\int_{-\\infty}^{\\infty}e^{-x^2}dx=\\sqrt{\\pi}"
        default: return "";
    }
}

function putExample(str){
    document.getElementById("mathText").value = str;
    draftSubmission();
}
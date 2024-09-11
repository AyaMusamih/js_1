function increaseFontSize() {
    document.querySelector("h2").classList.add("increasefont");
    document.querySelector("p").classList.add("increasefont");

}
function reduceFontSize() {
    document.querySelector("h2").classList.add("reducefont");
    document.querySelector("p").classList.add("reducefont");

}

document.querySelector(".increase").onclick = increaseFontSize;
document.querySelector(".reduce").onclick = reduceFontSize;

const copyTxt = document.getElementById("showArray");


function copyClipboard() {
    navigator.clipboard.writeText(copyTxt.innerHTML);
}
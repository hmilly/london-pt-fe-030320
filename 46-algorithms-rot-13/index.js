
let str = document.querySelector("textarea")
let en = document.querySelector("#encrypt")
let de = document.querySelector("#decrypt")
let result = document.querySelector(".result")


let txt;
en.addEventListener("click", () => {
    txt = str.value
    result.innerHTML = `${rotr(txt)}`
})

de.addEventListener("click", () => {
    txt = str.value
    result.innerHTML = `${rotr(txt)}`

})

let rotr = (str) => {
    let newStr = '';
    str.split('').map(l => {
        if (l.charCodeAt(0) >= 97 && l.charCodeAt(0) <= 122) {
            l.replace(/[a-z]/g, y =>
                newStr += String.fromCharCode((y.charCodeAt(0) - 97 + 13) % 26 + 97))
        } else if (l.charCodeAt(0) >= 65 && l.charCodeAt(0) <= 90) {
            l.replace(/[A-Z]/g, y =>
                newStr += String.fromCharCode((y.charCodeAt(0) - 65 + 13) % 26 + 65))
        } else {
            newStr += l
        }
    })

    txt = newStr;
    return newStr
}

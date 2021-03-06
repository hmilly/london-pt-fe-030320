const str = document.querySelector("textarea")
const en = document.querySelector("#encrypt")
const de = document.querySelector("#decrypt")
const result = document.querySelector(".result")

en.addEventListener("click", () => {
    result.innerHTML = `${rotr(str.value)}`
})

de.addEventListener("click", () => {
    result.innerHTML = `${rotr(str.value)}`
})

const rotr = (str) => {
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
    return newStr
}

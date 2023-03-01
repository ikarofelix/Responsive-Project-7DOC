const body = document.body
const html = document.documentElement
const more = document.querySelector(".more")
const addOptions = document.getElementById("add-options")
const safeAddOptionsHtml = addOptions.innerHTML

more.addEventListener("click", function(){
    if (addOptions.classList.contains("options-active")) {
        addOptions.classList.remove("options-active");
        more.classList.remove("options-active")
    } else {
        more.classList.add("options-active")
        addOptions.classList.add("options-active");
    }
})
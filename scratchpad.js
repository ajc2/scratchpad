function init(e) {
    let textbox = document.querySelector("textarea")
    let contents = localStorage.getItem("contents")
    if(contents != null) {
        textbox.value = contents
    }
    textbox.addEventListener("change", e => {
        localStorage.setItem("contents", e.target.value)
    })

    document.getElementById("clear")
        .addEventListener("click", clear)

    document.getElementById("export")
        .addEventListener("click", exportContents)

    document.getElementById("about")
        .addEventListener("click", showAbout)

    document.getElementById("okay")
        .addEventListener("click", hideAbout)
}

function clear(e) {
    if(confirm("Are you sure? This will result in complete loss of contents!")) {
        document.querySelector("textarea").value = ""
    }
}

function exportContents(e) {
    alert("TODO")
}

function showAbout(e) {
    document.getElementById("info").style.display = "block";
}

function hideAbout(e) {
    document.getElementById("info").style.display = "none";
}

window.addEventListener("load", init)

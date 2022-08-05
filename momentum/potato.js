const colors = document.querySelector("#text h1");

function handleTitleClick() {
    const wide = window.innerWidth;
    if (wide > 200 && wide <= 500){
        document.body.style.backgroundColor = "purple";
    }
    else if (wide <= 200){
        document.body.style.backgroundColor = "blue";
    }
    else if (wide > 500){
        document.body.style.backgroundColor = "beige";
    }
}

window.onresize = handleTitleClick;







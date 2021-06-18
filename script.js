const imageDisplay = document.getElementById("imageDisplay");
const imageWrapper = document.getElementById("imageWrapper");

const chairsAmount = document.getElementById("chairs");
const tablesAmount = document.getElementById("tables");

const chairsAmountMobile = document.getElementById("chairs-mobile");
const tablesAmountMobile = document.getElementById("tables-mobile");

const mainbody = document.body;
const mainSection = document.getElementById("mainsection");
const mustachio = document.querySelectorAll(".draggable");
const allTesting = document.getElementsByClassName("draggable");
const imageDownload = document.getElementById("image");
const lockButton = document.getElementById("lock");
const maxChairs = 100;
const maxTables = 13;
let chairsCount = 0;
let tablesCount = 0;        
let downloadImageURL;
let bodyActions = false;


const addBoxesPrompt = confirm("editable boxes?");

function setBodyActions(){
    if(bodyActions === true){
        mainbody.style.touchAction = "auto"
        bodyActions = false;
        lockButton.style.color = "white"
    }else{
        mainbody.style.touchAction = "none"
        bodyActions = true;
        lockButton.style.color = "red"
    }
}

if(addBoxesPrompt){
    document.getElementById("image").innerHTML += `<div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 106.6px; top: 212.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 106.6px; top: 231.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 86.6px; top: 213.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 11.7875px; top: 449.788px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 187px; top: 376px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 13.6px; top: 389.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 206.6px; top: 345.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 230.6px; top: 346.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 231.6px; top: 449.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 194.6px; top: 448.6px;"></div><div class="bg-red-700 absolute shadow-lg w-10 h-6 cursor-pointer hover:scale-105 ease-in transform ease-out draggable table-element ui-draggable ui-draggable-handle" style="left: 150px; top: 450.4px;"></div><div class="bg-red-700 absolute shadow-lg w-10 h-6 cursor-pointer hover:scale-105 ease-in transform ease-out draggable table-element ui-draggable ui-draggable-handle" style="left: 108px; top: 451.4px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 89.6px; top: 449.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 139.6px; top: 434.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 264.6px; top: 604.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 231px; top: 515px;"></div>`
    
    $(".chair-element").draggable();
    $(".table-element").draggable();

    $(".chair-element").dblclick(function(){
        $(this).remove();
    });

    $(".table-element").dblclick(function(){
        $(this).remove();
    });
    
    for(let i = 0; allTesting.length > i; i++){
        allTesting[i].addEventListener('touchmove', (ev) => {
            let touchLocation = ev.targetTouches[0];
            allTesting[i].style.left = parseInt(touchLocation.pageX) + 'px';
            allTesting[i].style.top = parseInt(touchLocation.pageY) + 'px';
        })
    }
    
}else{
    document.getElementById("image").innerHTML += `<div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 106.6px; top: 212.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 106.6px; top: 231.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 86.6px; top: 213.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 11.7875px; top: 449.788px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 187px; top: 376px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 13.6px; top: 389.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 206.6px; top: 345.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 230.6px; top: 346.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 231.6px; top: 449.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 194.6px; top: 448.6px;"></div><div class="bg-red-700 absolute shadow-lg w-10 h-6 cursor-pointer hover:scale-105 ease-in transform ease-out draggable table-element ui-draggable ui-draggable-handle" style="left: 150px; top: 450.4px;"></div><div class="bg-red-700 absolute shadow-lg w-10 h-6 cursor-pointer hover:scale-105 ease-in transform ease-out draggable table-element ui-draggable ui-draggable-handle" style="left: 108px; top: 451.4px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 89.6px; top: 449.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 139.6px; top: 434.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 264.6px; top: 604.6px;"></div><div class="chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable ui-draggable ui-draggable-handle" style="left: 231px; top: 515px;"></div>`
}

function saveTest(){
    domtoimage.toPng(document.getElementById("image")).then(function (dataUrl) {
        setImage(dataUrl);
    });
}

function addChair(){
    
    if(maxChairs === chairsCount){
        alert("No more chairs available.")
        return
    }

    // creates element and appends to body
    const div = document.createElement("div");
    div.className = "chair-element bg-red-700 shadow-lg w-4 h-4 absolute cursor-pointer hover:scale-105 ease-in transform ease-out draggable";
    imageDownload.appendChild(div)
    
    // makes it draggable
    $(div).draggable();

    // on double click it removes it
    $(div).dblclick(function(){
        $(this).remove();
        // removes chair count
        updateValues()
    });
    
    // adds chair count
    updateValues()

    div.addEventListener('touchmove', function (ev) {
        var touchLocation = ev.targetTouches[0];
        div.style.left = parseInt(touchLocation.pageX) + 'px';
        div.style.top = parseInt(touchLocation.pageY) + 'px';
    })
}

function addTable(){
    
    if(maxTables === tablesCount){
        alert("No more tables available.")
        return
    }

    // creates element and appends to body
    const div = document.createElement("div");
    div.className = "bg-red-700 absolute shadow-lg w-10 h-6 cursor-pointer hover:scale-105 ease-in transform ease-out draggable table-element";
    imageDownload.appendChild(div)
    
    // makes it draggable
    $(div).draggable();
    
    // rotating function
    $(div).click(function(){
        const transformStyle = this.style.transform
        if(transformStyle === "rotate(90deg)"){
            $(this).css("transform", "rotate(180deg)");
        }
        else if(transformStyle === "rotate(45deg)"){

        }else{
            $(this).css("transform", "rotate(45deg)");
        }
    })

    // on double click it removes it
    $(div).dblclick(function(){
        $(this).remove();
        // removes table count
        updateValues()
    });
    
    // adds table count
    updateValues()

    div.addEventListener('touchmove', function (ev) {
        var touchLocation = ev.targetTouches[0];
        div.style.left = parseInt(touchLocation.pageX-20) + 'px';
        div.style.top = parseInt(touchLocation.pageY-120) + 'px';
    })
}        

function addText(){
    
    // creates element and appends to body
    const input = prompt("Insert a text")
    const div = document.createElement("div");
    div.className = "absolute border-2 p-1 shadow-lg uppercase font-semibold cursor-pointer hover:scale-105 ease-in transform ease-out draggable";
    div.innerHTML = input;
    imageDownload.appendChild(div)
    
    // makes it draggable
    $(div).draggable();
    
    // on double click it removes it
    $(div).dblclick(function(){
        $(this).remove();
        // removes table count
        updateValues()
    });
    
    // adds table count
    updateValues()

    div.addEventListener('touchmove', function (ev) {
        var touchLocation = ev.targetTouches[0];
        div.style.left = parseInt(touchLocation.pageX-20) + 'px';
        div.style.top = parseInt(touchLocation.pageY-120) + 'px';
    })
}      

function updateValues(){
    chairsCount = 0;
    tablesCount = 0;
    const tempTablesCount = document.querySelectorAll(".table-element")
    tempTablesCount.forEach(item => tablesCount++)
    const tempChairsCount = document.querySelectorAll(".chair-element")
    tempChairsCount.forEach(item => chairsCount++)
    
    if(screen.width > 600){
        chairsAmount.innerHTML = `${chairsCount}/${maxChairs} Chairs`;
        tablesAmount.innerHTML = `${tablesCount}/${maxTables} Tables`;
    }else{
        chairsAmountMobile.innerHTML = `${chairsCount}/${maxChairs} Chairs`;
        tablesAmountMobile.innerHTML = `${tablesCount}/${maxTables} Tables`;            
    }
};

function setImage(dataUrl){
    imageDisplay.src = dataUrl;
    downloadImageURL = dataUrl;
    mainSection.style.display = "none";
    imageWrapper.style.display = "block";
    imageDisplay.style.display = "block";
}

function removeImageDisplay(){
    mainSection.style.display = "grid";
    imageWrapper.style.display = "none";
    imageDisplay.style.display = "none";
}

function downloadImage(){
    const a = document.createElement("a");

    document.body.appendChild(a);
    a.href = downloadImageURL;
    a.download = "floor-plan.png";
    a.click();
}
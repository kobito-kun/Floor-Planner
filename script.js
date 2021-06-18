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
let addBoxesPrompt = false;

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

$(".preloaded-boxes").on("click", () => {
    if(!addBoxesPrompt){
        addBoxesPrompt = confirm("editable boxes?");
    }
    checkAndEnableDragging();
})

function checkAndEnableDragging(){   
    if(addBoxesPrompt){
        $(".preloaded-boxes").draggable();
        
        $(".preloaded-boxes").dblclick(function(){
            $(this).remove();
        });
        
        for(let i = 0; allTesting.length > i; i++){
            allTesting[i].addEventListener('touchmove', (ev) => {
                let touchLocation = ev.targetTouches[0];
                allTesting[i].style.left = parseInt(touchLocation.pageX) + 'px';
                allTesting[i].style.top = parseInt(touchLocation.pageY) + 'px';
            })
        }   
    }
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
import { saveAsPng, saveAsJpeg } from 'save-html-as-image';

node = document.getElementById("canvas")

function saveTest(){
    saveAsPng(node);
}

export default saveTest;

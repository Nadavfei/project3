var buttons=document.querySelectorAll(".plains");

for (var i=0;i<buttons.length;i++){
    //adding event listener to the mouse click and then 
    //takes the innerHTML of the button[i] and sends it to the openVideo function
    buttons[i].addEventListener("click", function(){ 
        var buttonInnerHTML=this.innerHTML;
        openVideo(buttonInnerHTML);
    }
    )}

document.addEventListener("keypress",function(event){
    // a function that binds the key press to the openVideo func
    openVideo(event.key);
    })
document.addEventListener('dblclick', function(){
    // links a double click into opening the real IAF website.
        window.open("https://www.iaf.org.il/")
}
);

var currentLink;
    // a variable that saves the link which will be opened
function openVideo(key) {
    // a function that receives a keyboard key or a mouse click and directs you to the proper youtube video 
    console.log('hi im key  '+key);
    switch (key) {
        case 'r':
        case'R-Raam':
            currentLink = "https://www.youtube.com/watch?v=mgqy17AhweA"
            break;
        case 's':
        case 'S-Sufa':
            currentLink = "https://www.youtube.com/watch?v=e_DgRrWXwLM"
            break;
        case 'a':
        case 'A-Adir':
            currentLink = "https://www.youtube.com/watch?v=rMeTuEGLma8"
            break;
        case 'y':
        case 'Y-Yasuor':
            currentLink = "https://www.youtube.com/watch?v=sWN5-jMQCgs"
            break;
        case 'n':
        case 'N-Yanshuf':
            currentLink = "https://www.youtube.com/watch?v=r5JixQHybOQ"
            break;
        case 'p':
        case 'P-Peten':
            currentLink = "https://www.youtube.com/watch?v=uChxPWfinsk"
            break;
        case 'k':
        case 'K-Karnaf':
            currentLink = "https://www.youtube.com/watch?v=x0j5ybTyMqM"
            break;
        case 't':
        case 'T-Tzofit':
            currentLink = "https://www.youtube.com/watch?v=71X0WKP30Eg"
            break;
        case 'm':
        case 'M-Shimshon':
            currentLink = "https://www.youtube.com/watch?v=_cPRjZrjb4s&t=183s"
            break;
        default:
            alert("No such drum type, if not sure,check the instructions on the instruction page");
            return; // exit the function if the key is not recognized
    }
    // opens the link to the video
    window.open(currentLink);
}


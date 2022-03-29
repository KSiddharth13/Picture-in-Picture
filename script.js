const button = document.getElementById("button");
const videoElement = document.getElementById("video")


// Prompt to select media, pass to video element, then play
async function selectMediastream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        console.log("The error is ",error);
    }
}

// Event Listener
button.addEventListener('click',async () => {
    // Disable the button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediastream();
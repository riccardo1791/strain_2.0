// Access the device camera and stream to video element
navigator.mediaDevices.getUserMedia({ video: true })
.then(function(stream) {
    var video = document.getElementById('video');
    video.srcObject = stream;
    video.play();
})
.catch(function(err) {
    console.log("An error occurred: " + err);
    alert("Error accessing the camera. Please ensure your browser has permission to access the camera.");
});

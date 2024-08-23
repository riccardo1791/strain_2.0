// Access the device camera and stream to video element
navigator.mediaDevices.getUserMedia({ video: true })
.then((stream) => {
    document.getElementById('video').srcObject = stream;
})
.catch((err) => {
    console.error("Error accessing the camera: ", err);
});

// Capture image
document.getElementById('snap').addEventListener('click', function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');

    // Draw the image from the video onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Here, you would send the image to the server for processing
    var dataURL = canvas.toDataURL('image/png');
    console.log(dataURL); // This is just for testing
});

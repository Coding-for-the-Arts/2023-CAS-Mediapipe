// Initialize MediaPipe Hands, Face, Objectron, Audio, and Gesture models
const objectron = new Objectron({
  locateFile: file =>
    `https://cdn.jsdelivr.net/npm/@mediapipe/objectron/${file}`
})
let canvas, video
function setup () {
  canvas = createCanvas(640, 480)
  canvas.parent('#p5')
  // Start capturing webcam video
  video = createCapture(VIDEO)
  video.size(width, height)
  objectron.setOptions({
    enableSegmentation: true,
    enableObjectron: true
  })
  objectron.onResults(onObjectronResults)


}

function draw () {
  background(255)
  image(video, 0, 0, width, height)
}


function onObjectronResults (results) {
  if (results.detectedObjects) {
    console.log(results);
    for (const obj of results.detectedObjects) {
        console.log(obj);
    }
  }
}


const videoPlayer = document.querySelector("#my-video");

const getCamera = async () => {
  try {
    const camera = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    videoPlayer.srcObject = camera;
    videoPlayer.play();
  } catch (err) {
    console.log(`Camera error: ${err}`);
  }
};
getCamera();

// const myCanvas = document.querySelector("#my-canvas");
// myCanvas.height = innerHeight;
// myCanvas.width = innerWidth;

// const ctx = myCanvas.getContext("2d");

// function animate() {
//   ctx.drawImage(videoPlayer, 0, 0, innerWidth, innerHeight);

//   requestAnimationFrame(animate);
// }
// animate();

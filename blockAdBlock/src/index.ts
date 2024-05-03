// Function to detect adblock presence
function detectAdblock(callback: (isAdblockerDetected: boolean) => void): void {
  const adScriptURL =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

  fetch(adScriptURL, {
    method: "HEAD",
    mode: "no-cors",
  })
    .then((response) => {
      callback(response.redirected);
    })
    .catch(() => {
      callback(window.navigator.onLine);
    });
}

// Function to update the DOM based on adblock detection
function updateDOMBasedOnAdblock(isAdblockerDetected: boolean): void {
  const body = document.body;

  if (isAdblockerDetected) {
    body.innerHTML = ""; // Clear the body's HTML content
    const message = document.createElement("h1");
    message.textContent =
      "This site requires ads for some reason. Disable adblock to see content, or watch below video to learn more"; // Set message
    body.appendChild(message); // Append message to the body

    const video = document.createElement("video");
    video.setAttribute(
      "src",
      "https://shattereddisk.github.io/rickroll/rickroll.mp4"
    );
    video.setAttribute("width", "560");
    video.setAttribute("height", "315");
    video.setAttribute("controls", "true"); // Provides user control over video playback
    video.setAttribute("autoplay", "true"); // Autoplay the video
    video.setAttribute("muted", "true"); // Mute to allow autoplay without user interaction
    video.setAttribute("loop", "true"); // Loop the video continuously

    body.appendChild(video);

    video.play().catch((error) => {
      console.error("Video playback failed:", error);
      const playButton = document.createElement("button");
      playButton.textContent = "Play Video";
      playButton.onclick = () => video.play();
      body.appendChild(playButton);
    });
  }
}

// Run the adblock detection
detectAdblock((isAdblockerDetected: boolean) => {
  console.log(`Ads are ${isAdblockerDetected ? "blocked" : "not blocked"}`);
  updateDOMBasedOnAdblock(isAdblockerDetected);
});

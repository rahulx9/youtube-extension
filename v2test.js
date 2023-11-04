const button = document.createElement("button");
button.innerText = "Skip Add Test";
button.style.zIndex = 10000;
button.style.display = "block";
button.style.position = "fixed";
button.style.cursor = "pointer";
button.onclick = skipYoutubeAds;
document.body.append(button);

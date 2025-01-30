const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.style.display = "block";

  butInstall.addEventListener("click", async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) return;
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "Installed!";
  });
});

window.addEventListener("appinstalled", (event) => {
  console.log("J.A.T.E was installed!", event);
  window.deferredPrompt = null;
});

var ipc = require("electron").ipcRenderer;
document.getElementById("maxbt").addEventListener("click", () => {
  console.log("hello vscode!");
  ipc.send("window-max");
});
document.getElementById("minbt").addEventListener("click", () => {
  console.log("hello vscode!");
  ipc.send("window-min");
});
document.getElementById("closebt").addEventListener("click", () => {
  console.log("hello vscode!");
  ipc.send("window-close");
});

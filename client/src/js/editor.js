import { getDb, putDb } from "./database";
import { header } from "./header";

export default class {
  constructor() {
    const localData = localStorage.getItem("content");

    // Check if CodeMirror is loaded
    if (typeof CodeMirror === "undefined") {
      throw new Error("CodeMirror is not loaded");
    }

    // Initialize CodeMirror in the #main element
    this.editor = CodeMirror(document.querySelector(".editor-container"), {
      value: "",
      mode: "javascript",
      theme: "monokai",
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // Load content from IndexedDB or localStorage
    getDb().then((data) => {
      console.info("Loaded data from IndexedDB, injecting into editor");
      this.editor.setValue(data || localData || header);
    });

    // Save content to localStorage on change
    this.editor.on("change", () => {
      localStorage.setItem("content", this.editor.getValue());
    });

    // Save content to IndexedDB when the editor loses focus
    this.editor.on("blur", () => {
      console.log("The editor has lost focus");
      putDb(this.editor.getValue());
    });
  }
}

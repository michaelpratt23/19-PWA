import { getDb, putDb } from "./database";
import { header } from "./header";

export default class {
  constructor() {
    console.log("Initializing editor...");
    const container = document.querySelector(".editor-container");

    if (!container) {
      console.error("Error: .editor-container is missing in index.html!");
      return;
    }

    // Check if CodeMirror is loaded
    if (typeof CodeMirror === "undefined") {
      console.error("Error: CodeMirror is not loaded!");
      return;
    }

    try {
      // Initialize CodeMirror in the editor container
      this.editor = CodeMirror(container, {
        value: "",
        mode: "javascript",
        theme: "monokai",
        lineNumbers: true,
        lineWrapping: true,
        autofocus: true,
        indentUnit: 2,
        tabSize: 2,
      });
      console.log("CodeMirror initialized successfully.");
    } catch (error) {
      console.error("Failed to initialize CodeMirror:", error);
      return;
    }

    // Load content from IndexedDB or localStorage
    getDb().then((data) => {
      console.info("Loaded data from IndexedDB, injecting into editor.");
      this.editor.setValue(data || localStorage.getItem("content") || header);
    });

    // Save content to localStorage on change
    this.editor.on("change", () => {
      localStorage.setItem("content", this.editor.getValue());
    });

    // Save content to IndexedDB when the editor loses focus
    this.editor.on("blur", () => {
      console.log("The editor has lost focus. Saving to IndexedDB...");
      putDb(this.editor.getValue());
    });
  }
}

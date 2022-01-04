const dropZones = document.querySelectorAll(".drop-zone");
const dragItems = document.querySelectorAll(".drag-item");

let draggedItem;

dragItems.forEach((dragItem) => {
  dragItem.addEventListener("dragstart", () => {
    dragItem.classList.add("dragged");
    draggedItem = dragItem;
  });
  dragItem.addEventListener("dragend", () => {
    dragItem.classList.remove("dragged");
    draggedItem = null;
  });
});

dropZones.forEach((dropZone) => {
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  dropZone.addEventListener("dragenter", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("disabled")) {
      e.target.classList.add("undroppable");
    } else {
      e.target.style.opacity = ".8";
    }
  });
  dropZone.addEventListener("dragleave", (e) => {
    if (e.target.classList.contains("disabled")) {
      e.target.classList.remove("undroppable");
    }
    e.target.style.opacity = "1";
  });
  dropZone.addEventListener("drop", (e) => {
    if (e.target.className === "drop-zone") {
      e.target.append(draggedItem);
    } else if (e.target.classList.contains("disabled")) {
      e.target.classList.remove("undroppable");
    }
    e.target.style.opacity = "1";
  });
});

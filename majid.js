let lists = document.querySelectorAll(".list");
let rightBox = document.querySelector(".right");
let leftBox = document.querySelector(".left");
let selected = null;

// dragover event for both left and right boxes
rightBox.addEventListener("dragover", (e) => {
  e.preventDefault();
});

leftBox.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// drop event for right box
rightBox.addEventListener("drop", (e) => {
  e.preventDefault();
  if (selected) {
    rightBox.append(selected);
    selected = null;
  }
});

// drop event for left box
leftBox.addEventListener("drop", (e) => {
  e.preventDefault();
  if (selected) {
    leftBox.append(selected);
    selected = null;
  }
});

// dragstart event for each list item
for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    selected = e.target;
    console.log(selected);
  });

  // dragend event for each list item
  list.addEventListener("dragend", (e) => {
    selected = null;
  });
}

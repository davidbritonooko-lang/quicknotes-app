// script.js - Stage 1: Add, Delete, Validation & Count
const noteForm = document.getElementById("note-form");
const noteInput = document.getElementById("note-input");
const noteCategory = document.getElementById("note-category");
const errorMessage = document.getElementById("error-message");
const notesList = document.getElementById("notes-list");
const noteCount = document.getElementById("note-count");

let notes = [];

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(dateString));
}

function render() {
  notesList.innerHTML = "";

  // Update counter message
  if (notes.length === 0) {
    noteCount.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    noteCount.textContent = "You have 1 note.";
  } else {
    noteCount.textContent = `You have ${notes.length} notes.`;
  }

  notes.forEach(note => {
    const li = document.createElement("li");
    li.className = `note-card category-${note.category}`;

    const contentDiv = document.createElement("div");
    contentDiv.className = "note-content";

    const pText = document.createElement("p");
    pText.className = "note-text";
    pText.textContent = note.text;

    const metaDiv = document.createElement("div");
    metaDiv.className = "note-meta";

    const categorySpan = document.createElement("span");
    categorySpan.className = "category-badge";
    categorySpan.textContent = note.category;

    const dateSpan = document.createElement("span");
    dateSpan.textContent = formatDate(note.createdAt);

    metaDiv.appendChild(categorySpan);
    metaDiv.appendChild(dateSpan);

    contentDiv.appendChild(pText);
    contentDiv.appendChild(metaDiv);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteNote(note.id));

    li.appendChild(contentDiv);
    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  });
}

function addNote(text, category) {
  const trimmed = text.trim();

  if (!trimmed) {
    errorMessage.textContent = "Please type a note first.";
    return;
  }

  if (trimmed.length > 200) {
    errorMessage.textContent = "Notes must be 200 characters or fewer.";
    return;
  }

  errorMessage.textContent = "";

  const newNote = {
    id: Date.now(),
    text: trimmed,
    category: category,
    createdAt: new Date().toISOString()
  };

  notes.unshift(newNote);
  render();

  noteInput.value = "";
  noteInput.focus();
}

function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
  render();
}

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addNote(noteInput.value, noteCategory.value);
});

render();

function loadNotes() {
  const stored = localStorage.getItem("quicknotes");
  if (stored) {
    try {
      notes = JSON.parse(stored);
    } catch (e) {
      notes = [];
    }
  }
}

function saveNotes() {
  localStorage.setItem("quicknotes", JSON.stringify(notes));
}
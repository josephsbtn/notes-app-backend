/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const {
  addNotesHandler,
  getAllNotes,
  getNoteById,
  editNoteById,
  deleteNoteById,
} = require("./handler");
const Routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNotesHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotes,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteById,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteById,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteById,
  },
];

module.exports = Routes;

const express = require("express");
const router = express.Router();
const {
  getTaskById,
  createTask,
  updateTask,
  getAllTasks,
} = require("../controllers/task-controller");
const {
  validateCreateTask,
  validateTaskIdParam,
  validateUpdateTask,
} = require("../middlewares/validate-task");

router.get("/:id", validateTaskIdParam, getTaskById);
router.post("/", validateCreateTask, createTask);
router.put("/:id", validateTaskIdParam, validateUpdateTask, updateTask);
router.get("/", getAllTasks);
router.delete("/:id", validateTaskIdParam, deleteTask);

module.exports = router;

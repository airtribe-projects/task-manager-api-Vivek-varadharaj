const { BadRequestError } = require("../errors");

const validateCreateTask = (req, res, next) => {
  const { title, description, completed } = req.body || {};

  if (!title || typeof title !== "string" || title.trim() === "") {
    throw new BadRequestError(
      "Title is required and must be a non-empty string"
    );
  }

  if (
    !description ||
    typeof description !== "string" ||
    description.trim() === ""
  ) {
    throw new BadRequestError(
      "Description is required and must be a non-empty string"
    );
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    throw new BadRequestError("Completed must be a boolean");
  }

  next();
};

const validateTaskIdParam = (req, res, next) => {
  const taskId = parseInt(req.params.id);

  if (Number.isNaN(taskId)) {
    throw new BadRequestError("Invalid task ID");
  }

  req.taskId = taskId;
  next();
};

const validateUpdateTask = (req, res, next) => {
  const { title, description, completed } = req.body || {};

  if (
    title === undefined &&
    description === undefined &&
    completed === undefined
  ) {
    throw new BadRequestError(
      "At least one field (title, description, completed) must be provided"
    );
  }

  if (
    title !== undefined &&
    (typeof title !== "string" || title.trim() === "")
  ) {
    throw new BadRequestError("Title must be a non-empty string");
  }

  if (
    description !== undefined &&
    (typeof description !== "string" || description.trim() === "")
  ) {
    throw new BadRequestError("Description must be a non-empty string");
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    throw new BadRequestError("Completed must be a boolean");
  }

  next();
};

module.exports = {
  validateCreateTask,
  validateTaskIdParam,
  validateUpdateTask,
};

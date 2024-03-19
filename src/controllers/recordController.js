const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    const recordForWorkout = recordService.getRecordForWorkout(workoutId);
    res.send({ status: "OK", data: recordForWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: error.message || error });
  }
};

module.exports = { getRecordForWorkout };

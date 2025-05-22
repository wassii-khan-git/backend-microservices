import { isValidDate } from "../utils/helper.js";

// date controller
export const DateController = async (req, res) => {
  try {
    // get the date from params
    let { date } = req.params;

    if (!date) {
      const currentDate = new Date();
      return res.send({
        unix: currentDate.getTime(),
        utc: currentDate.toUTCString(),
      });
    }

    // if date is a number
    if (!isNaN(date)) {
      date = parseInt(date);
    }

    const parseDate = new Date(date);

    if (!isValidDate(parseDate)) {
      return res.json({ error: "Invalid Date" });
    }

    return res.send({
      unix: parseDate.getTime(),
      utc: parseDate.toUTCString(),
    });
  } catch (error) {
    console.log(error);
    return res.send({ error: error.message });
  }
};

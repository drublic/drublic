import { format } from "date-fns";

export default (date: Date | string | "now", dateFormat: string): string => {
  if (date === "now") {
    return format(new Date(), dateFormat);
  }

  if (typeof date === "string") {
    const dateList = date.split(".").reverse();

    date = new Date(
      parseInt(dateList[0], 10),
      parseInt(dateList[1], 10),
      parseInt(dateList[2], 10),
    );
  }

  if (dateFormat.toLowerCase() === "iso") {
    return date.toISOString();
  }

  return format(date, dateFormat);
};

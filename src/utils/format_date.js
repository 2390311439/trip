import dayjs from "dayjs";

export function formatMonthDay(date, defaultDay = "MM月DD日") {
  return dayjs(date).format(defaultDay);
}

export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day");
}

function humanlyDate(inputDate) {
  if (!inputDate) return "Invalid date";

  let date;

  if (typeof inputDate === "string") {
    const normalized =
      inputDate.includes("T") || inputDate.includes("Z")
        ? inputDate
        : inputDate.trim().replace(" ", "T");

    const fullDate = /^\d{4}-\d{2}-\d{2}$/.test(normalized)
      ? normalized + "T00:00:00"
      : normalized;

    date = new Date(fullDate);
  } else {
    date = new Date(inputDate);
  }

  if (isNaN(date)) return "Invalid date";

  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffSecs = Math.round(diffMs / 1000);
  const absSecs = Math.abs(diffSecs);
  const isPast = diffSecs < 0;

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const getRelative = (value, unit) => {
    return isPast
      ? rtf.format(-value, unit)
      : `${value} ${unit}${value > 1 ? "s" : ""} remaining`;
  };

  if (absSecs < 60) return isPast ? "just a minute ago" : "in a few seconds";

  const mins = Math.round(absSecs / 60);
  if (mins < 60) return getRelative(mins, "minute");

  const hours = Math.round(absSecs / 3600);
  if (hours < 24) return getRelative(hours, "hour");

  const days = Math.round(absSecs / 86400);
  if (days < 30) return getRelative(days, "day");

  const months = Math.round(absSecs / (30 * 86400));
  if (months < 12) return getRelative(months, "month");

  const years = Math.round(absSecs / (365 * 86400));
  return getRelative(years, "year");
}

module.exports = humanlyDate;

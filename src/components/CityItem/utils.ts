const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const formatDate = (dateISO: string) => dateFormatter.format(new Date(dateISO));

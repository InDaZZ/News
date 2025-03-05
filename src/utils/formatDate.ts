export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day: number = date.getDate();
  const month: string = months[date.getMonth()];
  const year: number = date.getFullYear();
  let hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  const ampmFormfat: string = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedMinutes: string =
    minutes < 10 ? "0" + minutes : minutes.toString();

  // Формируем итоговую строку
  return `${month} ${day}, ${year}, ${hours}.${formattedMinutes} ${ampmFormfat}`;
}

export function formatDate(dateString) {
  const date = new Date(dateString)
  const options = { year: "numeric", month: "2-digit", day: "2-digit"}
  return date.toLocaleDateString("nb-NO", options);
}

export function isToday(dateString) {
  const date = new Date(dateString)
  const today = new Date()
  return date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
}
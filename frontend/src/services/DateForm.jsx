export const dateParser = (num) => {
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  
  let timestamp = Date.parse(num);
  
  let date = new Date(timestamp).toLocaleDateString("fr-FR", options);
  
  return date.toString();
};

export const dateParserComment = (num) => {
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  let timestamp = Date.parse(num);

  let date = new Date(timestamp).toLocaleDateString("fr-FR", options);

  return date.toString();
};
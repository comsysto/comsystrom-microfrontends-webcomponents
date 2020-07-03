export const dispatchEvent = (name, data) => {
  const event = new CustomEvent("cs-search", {
    detail: {name: name, data: data}
  });
  window.dispatchEvent(event);
};

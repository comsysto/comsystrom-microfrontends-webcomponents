export const dispatchEvent = (ev) => {
  const event = new CustomEvent("cs-search", {
    detail: {name: ev}
  });
  window.dispatchEvent(event);
};

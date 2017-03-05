HTMLElement.prototype.wrapAll = function(elms) {
  const el = (elms.length) ? elms[0] : elms;

  // Wrap the first element (is automatically removed from its
  // current parent).
  this.appendChild(el);

  // Wrap all other elements (if applicable). Each element is
  // automatically removed from its current parent and from the elms
  // array.
  while (elms.length) {
    this.appendChild(elms[0]);
  }
};

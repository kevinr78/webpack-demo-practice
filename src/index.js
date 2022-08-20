function getComponent() {
  return import("lodash")
    .then(({ default: _ }) => {
      const element = document.createElement("div");
      element.innerHTML = _join(["Hello ", "webpack"]);

      return element;
    })
    .catch((error) => {
      "An error occured while loading component";
    });

  /* OR using async */

  /*  */
}

getComponent().then((component) => {
  document.body.appendChild(component);
});

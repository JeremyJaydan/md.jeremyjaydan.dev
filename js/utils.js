
window.$ = {
  query(queryString){
    let results = document.querySelectorAll(queryString);
    return results.length > 1 ? results : results[0];
  },
  queryMap(map){
    Object.keys(map).forEach(key => map[key] = this.query(map[key]));
    return map;
  },
  addEvents(elements, eventsObject){
    Array.from(elements).forEach(element => {
      let eventKeys = Object.keys(eventsObject);
      eventKeys.forEach(event => {
        element.addEventListener(event, eventsObject[event]);
      });
    });
  },
  dataClick(query, actionsObject){
    Array.from(document.querySelectorAll(query))
      .forEach(element => {
        let action = element.getAttribute("data-click");
        element.addEventListener("click", actionsObject[action]);
      })
    ;
  }
};

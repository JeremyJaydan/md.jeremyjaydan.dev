
window.addEventListener("DOMContentLoaded", function(){

  const page = {
    markdown: new markdownit({
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return '<pre class="hljs"><code>' +
                  hljs.highlight(lang, str, true).value +
                  '</code></pre>';
          } catch (__) {}
        }
        return '<pre class="hljs"><code>' + page.markdown.utils.escapeHtml(str) + '</code></pre>';
      },
      html: true,
      linkify: true
    }),
    preview: {
      update(content){
        if(window.markdownit){
          IncrementalDOM.patch(
            page.elements.previewBody,
            page.markdown.renderToIncrementalDOM(content)
          );
        }else{
          console.log("Can't update preview, markdown-it library not found..");
        }
      },
      observe(){
        let lastChanged = null;
        new MutationObserver(mutationsList => {
          let mutation = mutationsList[mutationsList.length - 1];
          if(mutation.type !== "attribute" && mutation.attributeName !== "class"){
            if(mutation.target && mutation.target.parentElement){
              let changed = mutation.target.style ? mutation.target : mutation.target.parentElement;
              if(!changed.isSameNode(lastChanged)){
                changed.classList.add("md-focus");
                page.elements.previewBody.parentElement.scrollTo({
                  top: changed.offsetTop - 128,
                  behavior: "smooth"
                });
                setTimeout(() => changed.classList.remove("md-focus"), 1000, changed);
              }
              lastChanged = changed;
            }
          }
        }).observe(page.elements.previewBody, {
          attributes: true,
          childList: true,
          subtree: true,
          characterData: true
        })
      }
    },
    elements: $.queryMap({
      logo: ".page__logo",
      status: ".page__status",
      editor: ".md__editor",
      code: ".md__code",
      preview: ".md__preview",
      previewBody: ".markdown-body"
    }),
    codeEditor: null,
    setStatus(state, timeout = 0){
      page.elements.status.innerText = state;
      page.elements.logo.classList.add("anim--spin");
      console.log({state});
      if(timeout > 0) this.clearStatus(timeout);
    },
    clearStatus(timeout = 0){
      setTimeout(() => {
        page.elements.status.innerText = "";
        page.elements.logo.classList.remove("anim--spin");
      }, timeout);
    },
    init(){
      if(markdownitTaskLists) page.markdown.use(markdownitTaskLists);
      if(window.markdownitIncrementalDOM && window.IncrementalDOM) page.markdown.use(markdownitIncrementalDOM, IncrementalDOM);
      page.codeEditor = CodeMirror(page.elements.code, {
        mode: { name: "gfm" },
        theme: "jcdn",
        autofocus: true,
        lineNumbers: true,
        scrollbarStyle: "overlay",
        pollInterval: 10000,
        tabSize: 2
      });
      hljs.initHighlightingOnLoad();
      page.preview.update(page.codeEditor.getValue());
      page.codeEditor.on("changes", () => page.preview.update(page.codeEditor.getValue()));
      page.preview.observe();
      page.setStatus("Ready", 1000);
    }
  };

  page.init();

});


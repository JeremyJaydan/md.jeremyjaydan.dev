# A Markdown Editor - built for speed

## Features
- Documents are created and saved to localstorage if they have a H1 (one #), so to delete a document, simply remove the H1
	- you can use it as a temporary editor by not specifying the h1
- The preview auto scroll is determined by the caret in the editor which affects the caret in the preview
- Press ESC to toggle the preview

## Behind the scenes
- [Alpine.js](https://alpinejs.dev/) (app logic, interactivity, state management)
- [tailwindcss](https://tailwindcss.com/) (ui styling)
- [CodeMirror](https://github.com/codemirror/CodeMirror) (editor)
- [markdown-it](https://github.com/markdown-it/markdown-it) (Markdown parser)
- [highlight.js](https://github.com/highlightjs/highlight.js) (Syntax highlighting for md codeblocks)
- [incremental-dom](https://github.com/google/incremental-dom) (dom diffing)
- [markdown-it-incremental-dom](https://github.com/yhatt/markdown-it-incremental-dom) (to integrate the above two together)
- [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists) (for checkbox support)
- [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) (CSS to style the rendered markdown)
- [/css/editor.css](https://md.jeremyjaydan.dev/css/editor.css) (custom CSS for editor - MIT)

## Links
- [GitHub (md.jeremyjayan.dev)](https://github.com/jeremyjaydan/md.jeremyjaydan.dev)
- [Twitter (@jeremyjaydan)](https://twitter.com/jeremyjaydan)
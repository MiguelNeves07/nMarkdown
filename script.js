const textarea = document.getElementById('markdown');
const preview = document.getElementById('preview');

marked.setOptions({
  breaks: true,
  gfm: true,
});

textarea.addEventListener('input', () => {
  const markdownText = textarea.value;
  preview.innerHTML = marked.parse(markdownText);
});

// Render inicial
preview.innerHTML = marked.parse(textarea.value);

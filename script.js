const textarea = document.getElementById('markdown');
const preview = document.getElementById('preview');

marked.setOptions({
  breaks: true,
  gfm: true,
});

// Atualiza preview ao digitar
textarea.addEventListener('input', () => {
  preview.innerHTML = marked.parse(textarea.value);
});

// Atualiza preview inicial
preview.innerHTML = marked.parse(textarea.value);

// Função para inserir Markdown no textarea
function insertMarkdown(prefix, suffix = '') {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selectedText = textarea.value.substring(start, end);
  const before = textarea.value.substring(0, start);
  const after = textarea.value.substring(end);

  // Insere o conteúdo formatado
  const newText = before + prefix + selectedText + suffix + after;
  textarea.value = newText;

  // Atualiza cursor e preview
  textarea.focus();
  const cursorPos = start + prefix.length + selectedText.length + suffix.length;
  textarea.setSelectionRange(cursorPos, cursorPos);
  preview.innerHTML = marked.parse(textarea.value);
}

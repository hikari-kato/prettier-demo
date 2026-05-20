const counterEl = document.getElementById('counter-value');
const messageListEl = document.getElementById('message-list');
const messageFormEl = document.getElementById('message-form');
const messageInputEl = document.getElementById('message-input');

let count = 0;
const messages = ['Prettier の動作確認', '保存して整形を試してください'] ?? [];

const formatCount = (value) => (value >= 0 ? `+${value}` : String(value));

const renderMessages = () => {
  messageListEl.innerHTML = messages
    .map((text, index) => `<li class="message-list__item" data-index="${index}">${text}</li>`)
    .join('');
};

const updateCounter = () => {
  if (counterEl) {
    counterEl.textContent = formatCount(count);
    counterEl.dataset.state = count === 0 ? 'zero' : count > 0 ? 'positive' : 'negative';
  }
};

const addMessage = (text) => {
  const trimmed = text.trim();
  if (!trimmed) return;
  messages.push(trimmed);
  renderMessages();
};

document.getElementById('btn-increment')?.addEventListener('click', () => {
  count += 1;
  updateCounter();
});

document.getElementById('btn-decrement')?.addEventListener('click', () => {
  count -= 1;
  updateCounter();
});

document.getElementById('btn-reset')?.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

messageFormEl?.addEventListener('submit', (event) => {
  event.preventDefault();
  addMessage(messageInputEl?.value ?? '');
  if (messageInputEl) messageInputEl.value = '';
});

const demoUsers = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'editor' },
  { id: 3, name: 'Charlie', role: 'viewer' },
];

const activeUserNames = demoUsers.filter((user) => user.role !== 'viewer').map((user) => user.name);

console.log('Active users:', activeUserNames);

renderMessages();
updateCounter();

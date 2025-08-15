const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

/**
 * Appends a message to the chat box and returns the message element.
 * @param {string} sender - The sender of the message ('user' or 'bot').
 * @param {string} text - The message text.
 * @returns {HTMLElement} The created message element.
 */
function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg;
}

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage('user', userMessage);
  input.value = '';

  // Show a temporary "Thinking..." bot message and keep a reference to it
  const botMessageElement = appendMessage('bot', 'Thinking...');

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // The backend expects a 'messages' array with role and content
      body: JSON.stringify({
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    if (!response.ok) {
      // Try to get a more specific error from the server's JSON response
      let errorText = `Failed to get response from server. Status: ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData && errorData.error) {
          errorText = `Error: ${errorData.error}`;
        }
      } catch (jsonError) {
        // Ignore if the error response is not valid JSON
      }
      throw new Error(errorText);
    }

    const data = await response.json();

    if (data && data.result) {
      // Use marked to parse markdown and DOMPurify to sanitize it for security
      botMessageElement.innerHTML = DOMPurify.sanitize(marked.parse(data.result, { breaks: true, gfm: true }));
      // After setting HTML, re-scroll to the bottom in case the content is large
      chatBox.scrollTop = chatBox.scrollHeight;
    } else {
      // Handle cases where the response is OK but doesn't contain the expected result
      botMessageElement.textContent = 'Sorry, no response received.';
    }
  } catch (error) {
    // Handle network errors or errors thrown from the response check
    console.error('Error:', error);
    botMessageElement.textContent = error.message || 'Failed to get response from server.';
  }
});

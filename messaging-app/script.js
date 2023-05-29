$(document).ready(function() {
    // Send button click event
    $('#send-button').click(function() {
      sendMessage();
    });
  
    // Enter key press event
    $('#message-input').keypress(function(e) {
      if (e.which === 13) {
        sendMessage();
      }
    });
  
    // Function to send a message
    function sendMessage() {
      var message = $('#message-input').val();
      if (message.trim() !== '') {
        var messageElement = $('<div class="message sent">' + message + '</div>');
        $('#chat-messages').append(messageElement);
        $('#message-input').val('');
        scrollToBottom();
      }
    }
    
  
    // Function to scroll to the bottom of the chat window
    function scrollToBottom() {
      $('#chat-messages').scrollTop($('#chat-messages')[0].scrollHeight);
    }
  });
  
  
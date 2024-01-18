const ChatModel = require('./models/chat');

function initSocket(io) {
  io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for new messages
    socket.on('chatMessage', async (data) => {
      try {
        // Save message to MongoDB
        const chatMessage = new ChatModel(data);
        await chatMessage.save();

        // Broadcast the message to all connected clients
        io.emit('chatMessage', data);
      } catch (error) {
        console.error('Error saving message:', error);
      }
    });

    // Load previous messages from MongoDB
    ChatModel.find().sort({ timestamp: 1 }).exec((err, messages) => {
      if (err) {
        console.error('Error loading messages:', err);
      } else {
        // Send previous messages to the connected client
        socket.emit('loadMessages', messages);
      }
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
}

module.exports = { initSocket };

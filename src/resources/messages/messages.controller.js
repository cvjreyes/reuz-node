const messageModel = require('./messages.model');

//Messages
const getAllMessages = async (req, res) => {
    const messages = await messageModel.getAllMessages();
    return res.status(200).json(messages);
  };
  
  const getMessagesBySender = async (req, res) => {

    const userId = req.params.userId;
    const filteredMessages = await messageModel.getBySender(userId);
    return res.status(200).json(filteredMessages);
  
  };

  const getMessagesByReceiver = async (req, res) => {

    const userId = req.params.userId;
    const filteredMessages = await messageModel.getByReceiver(userId);
    return res.status(200).json(filteredMessages);
  
  };
  
  const getOneMessage = async (req, res) => {
    const message = await messageModel.getOneMessage(req.params.id);
    if (message) {
      return res.status(200).json(message);
    }
    return res.status(404).end();
  };
  
  
  const createMessage = (req, res) => {
    const newmessage = req.body;
    const messagesUpdated = messageModel.createMessage(newmessage);
    return res.status(201).json(messagesUpdated);
  };
  
  const updateMessage = (req, res) => {
    const updatedmessage = req.body;
    const messagesUpdated = messageModel.update(req.params.id, updatedmessage);
    return res.status(200).json(messagesUpdated);
  };
  
  const removeMessage = (req, res) => {
    const messagesWithoutTheDeleted = messageModel.remove(req.params.id);
    return res.status(200).json(messagesWithoutTheDeleted);
  };

  const threadmessageModel = require('./messages.model');

  //Threadmessages
  const getAllThreadmessages = async (req, res) => {
    const messages = await messageModel.getAllThreadmessages();
    return res.status(200).json(messages);
  };

  const getAllThreadmessagesByMessage = async (req, res) => {
    console.log(req.params.id)
    const threadmessages = await threadmessageModel.getAllThreadmessagesByMessage(req.params.id);
    return res.status(200).json(threadmessages);
  };

  
  const getOneThreadmessage = async (req, res) => {
    const message = await messageModel.getOneThreadmessage(req.params.id);
    if (message) {
      return res.status(200).json(message);
    }
    return res.status(404).end();
  };
  
  
  const createThreadmessage = (req, res) => {
    const newmessage = req.body;
    const messagesUpdated = messageModel.createThreadmessage(newmessage);
    return res.status(201).json(messagesUpdated);
  };
  
  const updateThreadmessage = (req, res) => {
    const updatedmessage = req.body;
    const messagesUpdated = messageModel.update(req.params.id, updatedmessage);
    return res.status(200).json(messagesUpdated);
  };
  
  const removeThreadmessage = (req, res) => {
    const messagesWithoutTheDeleted = messageModel.remove(req.params.id);
    return res.status(200).json(messagesWithoutTheDeleted);
  };
  
  module.exports = {
    createMessage,
    updateMessage,
    getAllMessages,
    getMessagesBySender,
    getMessagesByReceiver,
    getOneMessage,
    removeMessage,
    createThreadmessage,
    updateThreadmessage,
    getAllThreadmessages,
    getAllThreadmessagesByMessage,
    getOneThreadmessage,
    removeThreadmessage,
  };
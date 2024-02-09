import Message from "../model/message.model.js";

export const newMessage = async (req,res)=>{
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        const exist = await Message.findOne({members:{ $all:  [senderId ,receiverId] }});

        if (exist) {
            return res.status(409).json("message aleady exist")
        }
        const newMessage = new Message({
            members: [senderId, receiverId],
            messages: [req.body.message]
        });
        await newMessage.save();
        return res.status(200).json(newMessage);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getMessage = async (req,res)=>{
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        const message = await Message.findOne({ members:{$all: [senderId, receiverId]}})
        return  res.status(200).json(message);
    } catch (error) {
        return res.status(500).json(error);
    }
}
import Message from "../model/message.model.js";
import newConv from "../model/newConv.model.js"

export const newConvMessage = async (req,res) =>{
    try {
        const newConvMessage = newConv(req.body);
        await newConvMessage.save();
        await Message.findByIdAndUpdate(req.body.messageId, {
            messages: req.body.content,
        })
        return res.status(200).json('Message sent');
    } catch (error) {
        return res.status(400).json("something went wrong")
    }   
}
export const getConMessage = async (req,res) =>{
    try {
        const messages = await Message.findById({messageId: req.params.id})
        return res.status(200).json(messages);
    } catch (error) {
        return res.status(500).json("something went wrong")
    }
}
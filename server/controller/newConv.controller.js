import Message from "../model/message.model.js";
import newConv from "../model/newConv.model.js"

export const newConvMessage = async (req,res) =>{
    try {
        const newConvMessage = new newConv(req.body);
        await newConvMessage.save();
        await Message.findByIdAndUpdate(req.body.messageId, {
            messages: req.body.content,
        })
        return res.status(200).json('Message sent');
    } catch (error) {
        return res.status(400).json("something went wrong")
    }   
}
export const getConvMessage = async (req, res) => {
    try {
        const message = await newConv.find({ messageId: req.params.id });

        if (!message) {
            return res.status(404).json({ error: "Message not found" });
        }

        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong" });
    }
};
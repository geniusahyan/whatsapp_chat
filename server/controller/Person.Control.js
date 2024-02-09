import person from "../model/Person.Model.js"



export const addPerson = async (req,res)=>{
    try {
        const exist = await person.findOne({sub: req.body.sub});
        if(exist){
            res.status(409).json({msg: "Person already exist"});
            return;
        }
        const newPerson = new person(req.body);
        await newPerson.save();
        return res.status(200).json(newPerson);

    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getPerson = async (req,res)=>{
    try {
        const persons = await person.find({})
        return res.status(200).json(persons);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
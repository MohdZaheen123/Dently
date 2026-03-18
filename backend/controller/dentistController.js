const dentistModel = require('../database/models/dentistModel')

async function getAllDentist(req,res){
    try{
        const page= req.query.page;
        if(page){
            const limit=10;
            const skip = (page-1)*limit;
            const count = await dentistModel.countDocuments();
            const data =await dentistModel.find().sort({_id:-1}).skip(skip).limit(limit);

            if (data.length > 0) {
                res.json({
                    message: "Data retrieved successfully",
                    data: data,
                    currentPage: page,
                    totalPages: Math.ceil(count / limit),
                    count: count
                });
            } else {
                res.json({
                    message: "Data not found",
                    count: count
                });
            } 
        }
        else{
            res.json({message:"please provide the page number"})
        }
    }
    catch (error) {
        console.log(error);
        res.json(error.message);
    }
}

async function createDentist(req,res){
    try {
        const data = req.body

        const newDentist = await new dentistModel(data)
        await newDentist.save()
        res.json(newDentist)
    } catch (error) {
        console.log(error)
    }
}

async function deleteDentist(req,res){
    try {
        const id = await req.params.id
        let data = await dentistModel.findById(id);
        if (data) {
            await dentistModel.findByIdAndDelete(id)
            res.json({ message: "deleted succesfully" })
        }
        else {
            res.json('No dentist found')
        }
    } catch (error) {
        console.log(error)
    }
}

async function updateDentist(req,res){
    try {
        const id = await req.params.id
        const newData= req.body
        let data = await dentistModel.findById(id);
        if (data) {
            await dentistModel.findByIdAndDelete(id)
            const newDentist = await new dentistModel(newData)
            newDentist.save()
            res.json({ message: "updated succesfully" })
        }
        else {
            res.json('No dentist found')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllDentist,createDentist,updateDentist,deleteDentist }
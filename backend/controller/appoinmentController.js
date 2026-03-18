const appoinmentModel = require('../database/models/appoinmentModel')

async function getAllAppoinment(req,res){
    try{
        const page= req.query.page;
        if(page){
            const limit=10;
            const skip = (page-1)*limit;
            const count = await appoinmentModel.countDocuments();
            const data =await appoinmentModel.find().sort({_id:-1}).skip(skip).limit(limit);

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

async function createAppoinment(req,res){
    try {
        const data = req.body

        const newAppoinment = await new appoinmentModel(data)
        await newAppoinment.save()
        res.json(newAppoinment)
    } catch (error) {
        console.log(error)
    }
}

async function deleteAppoinment(req,res){
    try {
        const id = req.params.id
        let data = await appoinmentModel.findById(id);
        if (data) {
            await appoinmentModel.findByIdAndDelete(id)
            res.json({ message: "deleted succesfully" })
        }
        else {
            res.json('No dentist found')
        }
    } catch (error) {
        console.log(error)
    }
}

async function updateAppoinment(req,res){
    try {
        const id = await req.params.id
        const newData= await req.body
        let data = await appoinmentModel.findById(id);
        if (data) {
            await appoinmentModel.findByIdAndDelete(id)
            const newAppoinment = await new appoinmentModel(newData)
            newAppoinment.save()
            res.json({ message: "updated succesfully" })
        }
        else {
            res.json('No dentist found')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllAppoinment,createAppoinment,updateAppoinment,deleteAppoinment }
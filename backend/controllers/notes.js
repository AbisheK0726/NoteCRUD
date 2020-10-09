const Note = require("../models/Note.js")

exports.getNotes = async(req,res,next) =>{
    try {
        const notes = await Note.find();
        return res.status(201).json({
            success: true,
            data: notes
        });
    } catch (err) {
        return res.status(404).json({
            success: false,
            error: err
        });
    }
}


exports.getNote = async(req,res,next) =>{

    try {
        const note = await Note.findById(req.params.id);
        return res.status(201).json({
            success:true,
            data: note
        })
    } catch (err) {
        return res.status(404).json({
            success:false,
            error:err
        })
    }
}



exports.createNote = async(req,res,next) =>{
    try {
        const note = req.body;
        await Note.create(note)
        return res.status(201).json({
            success:true,
            data: note
        })
    } catch (err) {
        return res.status(400).json({
            success:false, 
            error:err
        })
    }

}

exports.deleteNote = async(req,res,next) =>{
    try {
        const note = await Note.findById(req.params.id);
        await note.remove();
        return res.status(201).json({
            success:true,
            data: note
        })
    } catch (err) {
        return res.status(404).json({
            success:false,
            error:err
        })
    }
}

exports.updateNote = async(req,res,next) =>{
    try {
        const note = await Note.findByIdAndUpdate(req.params.id,{$set:req.body})
        return res.status(201).json({
            success:true,
            data: note
        })
    } catch (err) {
        return res.status(404).json({
            success:false,
            error:err
        })
    }

}

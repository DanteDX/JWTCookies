const addComment = (req,res) =>{
    res.send('/comment/addComment');
}

const deleteComment = (req,res) =>{
    res.send('/comment/deleteComment');
}

const updateComment = (req,res) =>{
    res.send('/comment/updateComment');
}

module.exports = {
    addComment,
    deleteComment,
    updateComment
};
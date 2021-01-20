const addPost = (req,res) =>{
    res.send('/post/addPost');
}

const deletePost = (req,res) =>{
    res.send('/post/deletePost');
}

const updatePost = (req,res) =>{
    res.send('/post/updatePost');
}

module.exports = {
    addPost,
    deletePost,
    updatePost
};
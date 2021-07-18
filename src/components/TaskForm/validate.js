const validate = values => {
    var error = {}
    const {title} = values
    if(!title){
        error.title = "Can you fill your title ? Please!"
    }
    else if(title.length < 5){
        error.title = "Your title have to more than 5 word"
    }
    else{
        error.title= null
    }
    return error
}

export default validate
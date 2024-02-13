const registerUser = async (req, res) => {
    const { name, email, password, pic} = req.body;
    console.log(name,email)

    res.json({
        name,
        email
    })
}

module.exports={registerUser}
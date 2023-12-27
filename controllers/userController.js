const jwt = require('jsonwebtoken');
const User = require('../models/user');


  // userController.js (Controller)


const getUser = async (req, res) => {
    const user = await User()
    // Implementation to get user details
};

const  updateBalance = async(req, res)  =>  {
    // Implementation to update user balance
    const user = await User()

}


module.exports = {
    getUser,
    updateBalance
    
  };
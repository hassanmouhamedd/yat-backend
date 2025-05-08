//req=requaried , res= responted, 3lashan el front ye4ofh
const getUsers =async (req,res) => {
   res.status(200).json({
    status:200,
            data: {data :users,message:"users fetched success" },
        })

    console.log("get users");
};



const addUsers =async (req,res) => {

    console.log("add users ");
};

const deleteUsers =async (req,res) => {

    console.log("Delete Users ");
};
const getsingleUsers =async(req,res)=>{
    const { userId} = req.params;
    const singleUser =Users.find((user) => user.id== userId);
    
    if(!singleUser){

        return res.status(404).json({
            status:404,
            data : {data :null,message:"invalid user ID" },
        })
    }
    return res.status(200).json({
        status:200,
        data : {data :singleUser,message:"invalid user ID" },
    })

    

};


module. exports = {
    getUsers,addUsers,deleteUsers,getsingleUsers,
};
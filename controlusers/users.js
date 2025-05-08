//req=requaried , res= responted, 3lashan el front ye4ofh
const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      isActive: true
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      isActive: false
    },
    {
      id: 3,
      name: "Charlie Davis",
      email: "charlie@example.com",
      isActive: true
    },
    {
      id: 4,
      name: "Diana Evans",
      email: "diana@example.com",
      isActive: true
    },
    {
      id: 5,
      name: "Ethan Brown",
      email: "ethan@example.com",
      isActive: false
    }
  ];
  

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
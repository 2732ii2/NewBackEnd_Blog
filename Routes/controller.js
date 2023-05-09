
import User from "../schema/schema.js";


export const send_data=async (req,res)=>{
    console.log("hello user..... ");
    const data=req.body;
    console.log(data);
    const validateuser=User(data);
    // res.send({"message":"everything is correct"});
    try{
        await validateuser.save();
        res.send({"message":"everything is correct"});
        
    }
    catch(err)
    {
        console.log(err);
        response.status(400).json({ message: err.message });
    }
}
export const get_data=async(req,resp)=>{
    try {
      const users = await User.find({});
      console.log(users);
      resp.status(200).json(users);
    } catch (err) {
      resp.status(400).json({ message: err.message });
    }
}



export const gettechdata=async(req,res)=>{
  try{
    const user = await User.find({ Tech: "on" });
    console.log(user);
    res.status(200).json(user);
  }
  catch(err)
  {
    res.status(400).json({message:err.message});
  }
}


export const daily_postdata=async(req,resp)=>{
  try{
    const user=await User.find({DailyPost: 'on' });
    resp.status(200).json(user);
  }
  catch(err)
  {
    console.log(err);
    res.status(400).json({ message: err.message+"backend error on dailypostapi" });
  }
}



export const getdatabyid=async(req,resp)=>{
  try{
    // console.log(req.url,req.body);
    var url_ = req.url;
    var splitedarray = url_.split("/");
    var exctid = splitedarray[2].slice(1, );
    const user = await User.find({ _id: exctid });
    // const user = await User.find({ _id: "6416abcbe74eee7ef1c86e98" });
    // console.log(typeof user[0]._id, Object.values(user[0]._id));
    console.log(user);
    resp.status(200).json(user);
  }
  catch(err){
      console.log(err);
      resp
        .status(400)
        .json({ message: err.message + "backend error on dailypostapi" });
  }
}


export const update_data=async(req,resp)=>{
  var [a, b] = req.body;
  console.log(a, b);
  // this is important but we didn't do it because of id updation
  // somewhere this is wrong way of saving data
  // const edituser = User(a);
  // console.log("this is edit ",edituser);

  try{
    console.log("this is try block")
    const result_=await User.updateOne({ _id: b },a);
    console.log("this is gap",result_); 
    resp.status(200).json(result_);
  }
  catch(err){
    console.log("this comes in err");
    resp.status(400).json({ "error": err });
  }
}
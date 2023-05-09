




import  express  from "express";
import {
  send_data,
  get_data,
  gettechdata,
  daily_postdata,
  getdatabyid,
  update_data,
} from "./controller.js";


const router=express.Router();
router.post('/senddata',send_data);
router.post("/updatedata/:id", update_data);

router.get("/getdata", get_data);
router.get("/gettechdata", gettechdata);
router.get("/dailypost", daily_postdata);
router.get("/edit/:id", getdatabyid);
// calldailyposy;
// updatedata;

export default router;
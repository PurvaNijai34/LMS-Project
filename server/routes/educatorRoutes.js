// import express from 'express'
// import { updateRoleToEducator } from '../controllers/educatorController.js';

// import { requireAuth } from "@clerk/express";
// const educatorRouter = express.Router();

// // educatorRouter.get('/update-role', updateRoleToEducator);
// educatorRouter.get(
//   "/update-role",
//   requireAuth(),
//   updateRoleToEducator
// );


// educatorRouter.get("/test", (req, res) => {
//   res.send("EDUCATOR ROUTE WORKING");
// });



// export default educatorRouter;




import express from "express";
import { requireAuth } from "@clerk/express";
import { addCourse, educatorDashboardData, getEducatorCourses, getEnrolledStudentsData, updateRoleToEducator } from "../controllers/educatorController.js";
import upload from "../config/multer.js";
import { protectEducator } from "../middlewares/authMiddleware.js";

const educatorRouter = express.Router();

educatorRouter.get(
  "/update-role",
  requireAuth(),
  updateRoleToEducator
);
educatorRouter.post('/add-course',upload.single('image'),protectEducator,addCourse)
export default educatorRouter;

educatorRouter.get('/courses',protectEducator,getEducatorCourses)
educatorRouter.get('/dashboard',protectEducator,educatorDashboardData);
educatorRouter.get('/enrolled-students',protectEducator,getEnrolledStudentsData);

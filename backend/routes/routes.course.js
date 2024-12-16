import express from 'express'
import {postCourse,getInstructorCourse,getAllCourse} from '../controllers/controllers.course.js'
const router=express.Router();

router.post('/postCourse',postCourse);
router.get('/getInstructorCourse',getInstructorCourse);
router.get('/getAllCourse',getAllCourse);
export default router;

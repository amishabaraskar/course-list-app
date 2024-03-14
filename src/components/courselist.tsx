import { useState } from "react";
import ModalForm from "./modal";
import { useDispatch } from "react-redux";
import {addEnquiredUser} from "../store/slices/course";


function CourseList({ courses }) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
      return (
        <div className=" mx-5 my-10 h-56 grid grid-cols-6 gap-4 content-start ">
            {courses && courses.length >0 && courses.map((course) => {
                return <div className="bg-indigo-300 p-4 rounded relative" key={course.id}>

    

                    <div className="text-center ">
                        <h3 className="text-md mb-2 ">{course.name}</h3>

                        <p className="text-sm mb-2 ">
                            {course.id}
                            Price: 
                            {course.price}
                        </p>
                        <p className="text-sm mb-2 ">
                            Course Duration:
                            {course.duration}
                        </p>
                        <button onClick={() => {
        dispatch(addEnquiredUser(course));

        setShow(true)}}
       className=" text-sm px-1  rounded bg-green-600  w-30">Enquire</button>
       <ModalForm show={show} handleClose={handleClose} id={course.id}/>
                    </div>
                </div>
            })}
        </div>
    )
}

export default CourseList;
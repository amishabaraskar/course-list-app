import { getCourses } from '../model/courses/api';
import CourseList from '../components/courselist';
import { useEffect, useState } from 'react';

const HomePage=()=>{
    const [courses, setCourses] = useState();
  

    useEffect(() => {
      const callApi = async () => {
        const courses =  await getCourses();
        console.log(courses)
  
        setCourses(courses);
  
      };
       callApi();
    },[]);
  
    return(
    <>
          <CourseList courses={courses}  />

    </>
    );
}

export default HomePage;
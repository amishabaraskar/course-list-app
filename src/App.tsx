import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header';
import { getCourses } from './model/courses/api';
import CourseList from './components/courselist';
import 'bootstrap/dist/css/bootstrap.min.css';


 function App() {

  const [courses, setCourses] = useState();
  

  useEffect(() => {
    const callApi = async () => {
      const courses =  await getCourses();
      console.log(courses)

      setCourses(courses);

    };
     callApi();
  },[]);


  return (
    <>
      <Header title="Course list App"/>
      <CourseList courses={courses}  />

    </>
  )
}

export default App

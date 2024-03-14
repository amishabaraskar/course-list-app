import { responseHandler } from "../utils";

export async function getCourses() {
  const response = await fetch("http://localhost:3000/courses");
  const json = await response.json();
  return json;
}

export async function enquiry(user,id)  {
  try {
    const enq={...user,courseid:id}
    
    const response = await fetch("http://localhost:3000/enquiries/", {
      method: "POST",
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(enq)

    });
    const data = responseHandler(response);
    console.log(JSON.stringify(enq))
    return data;
  } catch (error: any) {
    return error;
  }
}

import { responseHandler } from "../utils";

export async function getCourses() {
  const response = await fetch("http://localhost:3000/courses");
  const json = await response.json();
  return json;
}

export async function enquiry(user,id)  {
  try {
    const enq={...user,courseid:id}
    const response = await fetch("http://localhost:3000/enquiries", {
      method: "POST",
      headers:{	Accept: "application/json",
      'Content-Type':'application/json'},
      body: JSON.stringify(enq)

    });
    const data = responseHandler(response);
    return data;
  } catch (error: any) {
    return error;
  }
}

export async function enquirydoubts(user)  {
  try {
    const enq={...user}
    const response = await fetch("http://localhost:3000/enquiries", {
      method: "POST",
      headers:{	Accept: "application/json",
      'Content-Type':'application/json'},
      body: JSON.stringify(enq)

    });
    const data = responseHandler(response);
    return data;
  } catch (error: any) {
    return error;
  }
}

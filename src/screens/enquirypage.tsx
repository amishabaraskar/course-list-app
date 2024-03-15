import Form from "../components/form"

const EnquiryPage=()=>{
    return(
        <>
    <div className="text-center text-2xl mb-2 font-bold">
        Drop your details here...
        </div>

    <Form enquirydoubts={true}/>
    </>
    );
}

export default EnquiryPage;
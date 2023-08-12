import EduCard from "./EduCard.jsx"
import WorkCard from "./WorkCard.jsx"
import "../styles/Form.css"


export default function GeneralForm({formContent, setFormContent}) {

    const handleChange = (e, prop) => {
        let newObj = {
            ...formContent
        }
        if(prop === 'file'){
            newObj.file = e.target.files[0]
        } else {
            newObj[prop] = e.target.value
        }
        setFormContent(newObj)
    }
 
    console.log(formContent)
    return (
        <div className="leftWindow">
            <h3>Personal Information:</h3>
            <form className='tab1'>
                <input type="text" placeholder="First Name" value={formContent.firstName} onChange={(e) => handleChange(e, 'firstName')}/>
                <input type="text" placeholder="Last Name" value={formContent.lastName} onChange={(e) => handleChange(e, 'lastName')}/>
                <input type="email" placeholder="Email" value={formContent.email} onChange={(e) => handleChange(e, 'email')}/>
                <input type="tel" placeholder="Phone number" value={formContent.phoneNumber} onChange={(e) => handleChange(e, 'phoneNumber')}/>
                <input type="text" placeholder="Address" value={formContent.address} onChange={(e) => handleChange(e, 'address')}/>
                <label >Latest Photo: <input type="file" onChange={(e) => handleChange(e, 'file')}/></label>
            </form>
            <h3>Education:</h3>
            <EduCard formContent={formContent} handleChange={handleChange}/>
            <div className="buttonDiv">
                <button type='button' id='addEdu'>ADD more</button>
                <button type='button' id='removeEdu'>REMOVE</button>
            </div>
            <h3>Work Experience:</h3>
            <WorkCard setFormContent={setFormContent}/>
            <div className="buttonDiv">
                <button type='button' id='addWork'>ADD more</button>
                <button type='button' id='removeWork'>REMOVE</button>
            </div>
            <button type='button' id='submitBtn'>Submit to print</button>

        </div>
    )
}

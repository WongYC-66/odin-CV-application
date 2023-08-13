import { v4 as uuidv4 } from 'uuid';
import EduCard from "./EduCard.jsx"
import WorkCard from "./WorkCard.jsx"
import "../styles/Form.css"


export default function GeneralForm({ formContent, setFormContent }) {

    const handleChange = (e, prop) => {
        let newFormContent = {
            ...formContent
        }
        if (prop === 'file') {
            newFormContent.file = e.target.files[0]
        } else {
            newFormContent[prop] = e.target.value
        }
        setFormContent(newFormContent)
        // console.log(newFormContent)
    }



    const handleCardChange = (e, prop, type, idx) => {
        // console.log(prop, type, idx)
        let newFormContent = { ...formContent }
        if (type === 'edu') {
            let cardObj = { ...formContent.educationList[idx] }
            cardObj[prop] = e.target.value
            newFormContent.educationList[idx] = cardObj
        } else if (type === 'work') {
            let cardObj = { ...formContent.workList[idx] }
            cardObj[prop] = e.target.value
            newFormContent.workList[idx] = cardObj
        }
        // console.log(newFormContent)
        setFormContent(newFormContent)
    }

    const handleButton = (type) => {
        let newFormContent = { ...formContent }
        switch (type) {
            case 'addEdu':
                newFormContent.educationList.push({
                    id: uuidv4(),
                    school: '',
                    city: '',
                    startDate: '',
                    endDate: '',
                    title: '',
                    result: '',
                })
                break;
            case 'addWork':
                newFormContent.workList.push({
                    id: uuidv4(),
                    company: '',
                    title: '',
                    startDate: '',
                    endDate: '',
                    responsibility: '',
                })
                break;
            case 'removeEdu':
                let x = newFormContent.educationList
                x = x.slice(0, x.length === 1 ? 1 : x.length - 1) // remove, until left first one
                newFormContent.educationList = x
                break;
            case 'removeWork':
                let y = newFormContent.workList
                y = y.slice(0, y.length === 1 ? 1 : y.length - 1) // remove, until left first one
                newFormContent.workList = y
                break;
            case 'reset':
                for (let p of Object.keys(newFormContent)) {
                    if (Array.isArray(newFormContent[p])) {
                        newFormContent[p] = [{ id: uuidv4() }]
                    } else {
                        newFormContent[p] = ''
                    }
                }
                // console.log(newFormContent)
                break;
        }
        setFormContent(newFormContent)
    }

    const handlePrint = () => {
        window.print()
    }

    // console.log(formContent)
    return (
        <div className="leftWindow">
            <h3>Personal Information:</h3>
            <form className='tab1'>
                <input type="text" placeholder="First Name" value={formContent.firstName} onChange={(e) => handleChange(e, 'firstName')} />
                <input type="text" placeholder="Last Name" value={formContent.lastName} onChange={(e) => handleChange(e, 'lastName')} />
                <input type="email" placeholder="Email" value={formContent.email} onChange={(e) => handleChange(e, 'email')} />
                <input type="tel" placeholder="Phone number" value={formContent.phoneNumber} onChange={(e) => handleChange(e, 'phoneNumber')} />
                <input type="text" placeholder="Address" value={formContent.address} onChange={(e) => handleChange(e, 'address')} />
                <label >Latest Photo: <input type="file" accept="image/gif, image/jpeg, image/png" onChange={(e) => handleChange(e, 'file')} /></label>
                <textarea cols='37' rows='3' placeholder="Some description about you..." value={formContent.description} onChange={(e) => handleChange(e, 'description')} />
            </form>
            <h3>Education:</h3>
            {formContent.educationList.map((x, i) => {
                return <EduCard key={x.id} idx={i} eduCard={x} handleChange={handleCardChange} />
            })}
            <div className="buttonDiv">
                <button type='button' id='addEdu' onClick={() => handleButton('addEdu')}>ADD more</button>
                <button type='button' id='removeEdu' onClick={() => handleButton('removeEdu')}>REMOVE</button>
            </div>
            <h3>Work Experience:</h3>
            {formContent.workList.map((x, i) => {
                return <WorkCard key={x.id} idx={i} workCard={x} handleChange={handleCardChange} />
            })}
            <div className="buttonDiv">
                <button type='button' id='addWork' onClick={() => handleButton('addWork')}>ADD more</button>
                <button type='button' id='removeWork' onClick={() => handleButton('removeWork')}>REMOVE</button>
            </div>
            <button type='button' id='submitBtn' onClick={handlePrint}>Submit to print</button>
            <button type='button' id='resetBtn' onClick={() => handleButton('reset')}>Reset</button>

        </div>
    )
}

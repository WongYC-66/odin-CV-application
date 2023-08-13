import '../styles/PrintView.css'
import profileImg from '../img/captain.png'
import dateFormat from "dateformat";

export default function ({ formContent }) {
    // console.log(formContent)
    const workArray = formContent.workList
    const eduArray = formContent.educationList
    workArray.forEach(x => {
        x.startDate = dateFormat(x.startDate, "mmm yyyy")
        x.endDate = dateFormat(x.endDate, "mmm yyyy")
    })
    eduArray.forEach(x => {
        x.startDate = dateFormat(x.startDate, "mmm yyyy")
        x.endDate = dateFormat(x.endDate, "mmm yyyy")
    })
    // create photo
    const imgUrl = formContent.file === 'default' ? profileImg
        : formContent.file ? URL.createObjectURL(formContent.file)
            : null
    return (
        <div className="rightWindow">
            <h1>{formContent.firstName + ' ' + formContent.lastName}</h1>
            <p>{formContent.phoneNumber}</p>
            <p>{formContent.email}</p>
            <p>{formContent.address}</p>
            <img src={imgUrl} id='profilePic'></img>
            <h2>Summary</h2>
            <hr />
            <p>{formContent.description}</p>
            {/* WORK-AREA */}
            <h2>Work Experience</h2>
            <hr />
            {workArray.map(x => {
                return (
                    <div className='work-card' key={x.id}>
                        <h3>{x.title}</h3>
                        <p className='dimmerP'>{x.company}</p>
                        <p className='dimmerP'>{x.startDate} - {x.endDate}</p>
                        <p>{x.responsibility}</p>
                        <br />
                    </div>
                )
            })}
            {/* EDU-AREA */}
            <hr />

            <h2>Education</h2>
            {eduArray.map(x => {
                return (
                    <div className='edu-card' key={x.id}>
                        <h3>{x.title}</h3>
                        <p className='dimmerP'>{x.school}</p>
                        <p className='dimmerP'>{x.city}</p>
                        <p className='dimmerP'>{x.startDate} - {x.endDate}</p>
                        <p>{x.result}</p>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}
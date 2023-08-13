export default function ({idx, eduCard, handleChange}) {
    // console.log(eduCard)
    return (
        <form className='tab2'>
            <input type="text" placeholder="School/ Institution Name" value={eduCard.school} onChange={(e) => handleChange(e, 'school', 'edu', idx)} />
            <input type="text" placeholder="City" value={eduCard.city} onChange={(e) => handleChange(e, 'city', 'edu', idx)}/>
            <input type="month" onChange={(e) => handleChange(e, 'startDate', 'edu', idx)}/>
            <input type="month" onChange={(e) => handleChange(e, 'endDate', 'edu', idx)}/>
            <input type="text" placeholder="Diploma / Bachelor" value={eduCard.title} onChange={(e) => handleChange(e, 'title', 'edu', idx)}/>
            <input type="text" placeholder="e.g. CGPA 3.0" value={eduCard.result} onChange={(e) => handleChange(e, 'result', 'edu', idx)}/>
        </form>
    )
}
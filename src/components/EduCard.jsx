export default function ({formContent, handleChange}) {
    return (
        <form className='tab2'>
            <input type="text" placeholder="School/ Institution Name" value={formContent.firstName} onChange={(e) => handleChange(e, 'firstName')} />
            <input type="text" placeholder="City" />
            <input type="month" />
            <input type="month" />
            <input type="text" placeholder="Diploma / Bachelor" />
            <input type="text" placeholder="e.g. CGPA 3.0" />
        </form>
    )
}
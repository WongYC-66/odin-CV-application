import '../styles/eduForm.css'

export default function eduForm(){
    return (
        <form className='tab2'>
            <h1>Education</h1>
            <label>School Name : <input type="text" /></label>
            <label>Title of Study: <input type="text" /></label>
            <label>Date of study : <input type="date" /></label>
            <button type='submit'>Submit</button>
        </form>
    )
}

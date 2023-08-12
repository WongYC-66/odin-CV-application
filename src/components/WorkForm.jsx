import '../styles/workForm.css'

export default function eduForm(){
    return (
        <form className='tab3'>
            <h1>Work Experience</h1>
            <label>Company Name: <input type="text" /></label>
            <label>Position Title: <input type="text" /></label>
            <label>Main responsibilites: <input type="text" /></label>
            <label>Date: <input type="date" /></label>
            <button type='submit'>Submit</button>
        </form>
    )
}

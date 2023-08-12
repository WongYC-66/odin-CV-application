import '../styles/generalForm.css'

export default function GeneralForm(){
    return (
        <form className='tab1'>
            <h1>General Information</h1>
            <label>Name : <input type="text" /></label>
            <label>Email : <input type="email" /></label>
            <label>Tel : <input type="tel" /></label>
            <button type='submit'>Submit</button>
        </form>
    )
}

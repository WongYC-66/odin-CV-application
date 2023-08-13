export default function ({idx, workCard, handleChange}) {
    return (
        <form className='tab3'>
            <input type="text" placeholder="company name" value={workCard.company} onChange={(e) => handleChange(e, 'company', 'work', idx)}/>
            <input type="text" placeholder="position title" value={workCard.title} onChange={(e) => handleChange(e, 'title', 'work', idx)}/>
            <input type="month" onChange={(e) => handleChange(e, 'startDate', 'work', idx)}/>
            <input type="month" onChange={(e) => handleChange(e, 'endDate', 'work', idx)}/>
            <input type="text" placeholder="main responsibilities" value={workCard.responsibility} onChange={(e) => handleChange(e, 'responsibility', 'work', idx)}/>
        </form>
    )
}
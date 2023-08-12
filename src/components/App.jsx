import { useState } from 'react'
import Form from './Form.jsx'
import PrintView from './Print.jsx'

export default function () {
    const [formContent, setFormContent] = useState({
        firstName: 'abc',
        lastName: 'def',
        email: '',
        phoneNumber: '',
        address: '',
        file: null,
        educationList: [
            {
                school: '',
                city: '',
                startDate: '',
                endDate: '',
                title: '',
                result: '',
            }
        ],
        workList: [
            {
                company: '',
                title: '',
                startDate: '',
                endDate: '',
                responsibility: '',
            }
        ]
    })
    return (
        <>
            <Form formContent={formContent} setFormContent={setFormContent}/>
            <PrintView />
        </>
    )
}
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Form from './Form.jsx'
import PrintView from './Print.jsx'


export default function () {
    
    const [formContent, setFormContent] = useState({
        firstName: 'Captain',
        lastName: 'America',
        email: 'captain@shield.com',
        phoneNumber: '555-5555 555',
        address: '3330 Steve Park, New York',
        file: 'default',
        description: 'Captain America is a superhero created by Joe Simon and Jack Kirby who appears in American comic books published by Marvel Comics.',
        educationList: [
            {
                id: uuidv4(),
                school: 'Geoge Washington High School',
                city: 'Washington',
                startDate: 'Jan 1938',
                endDate: 'Jan 1940',
                title: 'A-level',
                result: 'B- for all subjects',
            }
        ],
        workList: [
            {
                id: uuidv4(),
                company: 'Shield Company',
                title: 'Avenger member',
                startDate: 'Mar 2011',
                endDate: 'Jan 2016',
                responsibility: 'Fighter and leader of Avenger team against Loki armies, and various threat to human',
            }
        ]
    })
    return (
        <>
            <Form formContent={formContent} setFormContent={setFormContent}/>
            <PrintView formContent={formContent}/>
        </>
    )
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import GeneralForm from './components/GeneralForm.jsx'
import EduForm from './components/EduForm.jsx'
import WorkForm from './components/WorkForm.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralForm />
    <EduForm />
    <WorkForm />
  </React.StrictMode>,
)

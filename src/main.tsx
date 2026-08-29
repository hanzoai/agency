import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Probe } from './__probe'
import './index.css'

createRoot(document.getElementById("root")!).render(<><App /><Probe /></>);

import {ReactElement, StrictMode} from 'react'
import {createRoot, Root} from 'react-dom/client'
import {App} from './App.tsx'

const rootElement: HTMLElement = document.getElementById('root')!
const rootReactElement: Root = createRoot(rootElement)
const app: ReactElement = (
  <StrictMode>
    <App />
  </StrictMode>
)

rootReactElement.render(app)

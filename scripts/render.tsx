import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App'
export function render() { return renderToString(<MemoryRouter initialEntries={['/']}><App/></MemoryRouter>) }

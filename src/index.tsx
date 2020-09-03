// Import deps
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'

// Import components
import { Photos } from './components/photos'
import { PhotoDetail } from './components/photo-detail'
// Import styles
import './styles/styles.css'

// Find div container
const rootElement = document.getElementById('root');

render(<Router><Photos /></Router>, rootElement);
//render(<Router><PhotoDetail /></Router>, rootElement);

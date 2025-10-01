import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WishlistProvider } from './wishlistcontext.jsx'
import { CartProvider } from './cartcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <WishlistProvider>
    <App />
    </WishlistProvider>
    </CartProvider>
  </StrictMode>,
)

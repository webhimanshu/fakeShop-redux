import React from 'react'
import Header from './containers/Header'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import ProductList from './containers/ProductList'
import ProductDetails from './containers/ProductDetails'
const App = () => {
    return (
        <div>

         <Router>
         <Header/>
         <Routes>
         <Route path="/" exact   element={<ProductList></ProductList>}/>
         <Route path="/product/:productId" exact element={<ProductDetails></ProductDetails>}/>
         <Route>404 NOt Found</Route>
         </Routes>
         </Router>
        </div>
    )
}

export default App

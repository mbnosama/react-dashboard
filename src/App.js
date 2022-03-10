import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Customers from "./pages/customers/Customers";
import OneCustomer from "./pages/customers/OneCustomer";
import Employees from "./pages/employees/Employees";
import Home from "./pages/home/Home";
import Orders from "./pages/orders/Orders";
import Products from "./pages/products/Products";
import Reports from "./pages/reports/Reports";
import Suppliers from "./pages/Suppliers/Suppliers";
//-------------------------------------------------------

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="customers">
              <Route index element={<Customers />} />
              <Route path=":userId" element={<OneCustomer />} />
            </Route>
            <Route path="orders" element={<Orders />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="employees" element={<Employees />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

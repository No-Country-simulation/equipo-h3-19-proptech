import { createBrowserRouter, RouterProvider } from "react-router-dom"


//#region HOME E INGRESO IMP
import Home from "./views/public/Home"
import Auth from "./views/public/Auth"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
//# endregion

//#region CLIENTES IMPORTS
// customers pages and components
import Inversor from "./views/customers/Inversor"
import InversorDashboard from "./components/customers/inversor/Main"
import Calendar from "./components/customers/inversor/dashboard/investments/Calendar"
import History from "./components/customers/inversor/dashboard/investments/history/History"
import Portfolio from "./components/customers/inversor/dashboard/investments/Portfolio"
import Simulator from "./components/customers/inversor/dashboard/investments/Simulator"
import Commissions from "./components/customers/inversor/dashboard/transactions/Commissions"
import Payments from "./components/customers/inversor/dashboard/transactions/payments/Payments"
import Recent from "./components/customers/inversor/dashboard/transactions/Recent/Recent"
import Withdraw from "./components/customers/inversor/dashboard/transactions/Withdraw"
import Beneficiary from "./views/customers/Beneficiary"
import BeneficiaryDashboard from "./components/customers/BeneficiaryDashboard"
import Plotowner from "./views/customers/Plotowner"
import PlotOwnerDashboard from "./components/customers/PlotOwnerDashboard"
//# endregion

//#region FINANCIAL IMPORTS
// plattform pages and components
import Owner from "./views/plattform/Owner"
import OwnerDashboard from "./components/plattform/OwnerDashboard"
import Sealer from "./views/plattform/Sealer"
import SealerDashboard from "./components/plattform/SealerDashboard"
// import ProtectedRoute from "./components/auth/ProtectedRoute"
import Inicio from "./components/customers/inversor/dashboard/Inicio"
import AnalysisStatistics from "./components/customers/inversor/dashboard/investments/AnalysisStatistics"
import Profile from "./components/customers/inversor/dashboard/profile/Profile"
//# endregion

//#region CONFIG DE RUTAS
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>Error - page not found</h1>
  },
  {
    path: '/unauthorized',
    element: <h1 className="text-red-700 text-3xl">unauthorized</h1>
  },
  {
    element: <Auth />,
    children: [
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
  {
    path: '/inversor',
    element: (
      <Inversor />
  
    ),
    children: [
      {
        element: <InversorDashboard />,
        children: [{
          path: '/inversor/dashboard/',
          element: <Inicio />
        },{
          path: '/inversor/dashboard/profile',
          element: <Profile />
        },{
          path: '/inversor/dashboard/investments/analysis',
          element: <AnalysisStatistics />
        },{
          path: '/inversor/dashboard/investments/calendar',
          element: <Calendar />
        },{
          path: '/inversor/dashboard/investments/history',
          element: <History />
        },{
          path: '/inversor/dashboard/investments/portfolio',
          element: <Portfolio />
        },{
          path: '/inversor/dashboard/investments/simulator',
          element: <Simulator />
        },{
          path: '/inversor/dashboard/transactions/recent',
          element: <Recent />
        },{
          path: '/inversor/dashboard/transactions/withdraw',
          element: <Withdraw />
        },{
          path: '/inversor/dashboard/transactions/commisions',
          element: <Commissions />
        },{
          path: '/inversor/dashboard/transactions/payments',
          element: <Payments />
        }]
      }
    ]
  },
  {
    path: '/beneficiary',
    element: (
      
        <Beneficiary />
  
    ),
    children: [
      {
        path: '/beneficiary/dashboard',
        element: <BeneficiaryDashboard />
      }
    ]
  },
  {
    path: '/plotowner',
    element: (
     
        <Plotowner />
  
    ),
    children: [
      {
        path: '/plotowner/dashboard',
        element: <PlotOwnerDashboard />
      }
    ]
  },
  {
    path: '/owner',
    element: (

        <Owner />
  
    ),
    children: [
      {
        path: '/owner/dashboard',
        element: <OwnerDashboard />
      }
    ]
  },
  {
    path: '/sealer',
    element: (
   
        <Sealer />

    ),
    children: [
      {
        path: '/sealer/dashboard',
        element: <SealerDashboard />
      }
    ]
  }
])
//# endregion

//#region APP COMPONENT
const App = () => <RouterProvider router={router} />
export default App
//# endregion
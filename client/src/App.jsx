import { createBrowserRouter, RouterProvider } from "react-router-dom"

//#region HOME E INGRESO IMP
import Home from "./views/public/Home"
import Auth from "./views/public/Auth"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
//# endregion

import VerifyEmail from "./components/auth/VerifyEmail"
import AuthRegister from "./components/auth/authRegister"

// customers pages and components
import Inversor from "./views/customers/Inversor"
import InversorDashboard from "@inversor/Main"
import Calendar from "@inversor/dashboard/investments/Calendar"
import InvestmentsHistory from "@inversor/dashboard/investments/history/History"
import Portfolio from "@inversor/dashboard/investments/Portfolio"
import InvestmentsSimulator from "@inversor/dashboard/investments/Simulator"
import Commissions from "@inversor/dashboard/transactions/Commissions"
import Payments from "@inversor/dashboard/transactions/payments/Payments"
import InversorRecentTransactions from "@inversor/dashboard/transactions/Recent/Recent"
import Withdraw from "@inversor/dashboard/transactions/Withdraw"
import InversorDashboardHome from "@inversor/dashboard/Home"
import AnalysisStatistics from "@inversor/dashboard/investments/AnalysisStatistics"
import InversorProfile from "@inversor/dashboard/profile/Profile"

import Borrower from "./views/customers/Borrower"
import BorrowerDashboard from "@borrower/Main"
import BorrowerDashboardHome from "@borrower/dashboard/Home"
import LoansHistory from "@borrower/dashboard/loans/Loans"
import LoansSimulator from "@borrower/dashboard/loans/Simulator"
import BorrowerRecentTransactions from "@borrower/dashboard/transactions/Recent/Recent"
import BorrowerProfile from "@borrower/dashboard/profile/Profile"
import BorrowerAccount from "@borrower/dashboard/account/Account"

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
        path: '/authRegister',
        element: <AuthRegister />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/verifyCount',
        element: <VerifyEmail />
      }
    ]
  },
  {
    //#region INVERSOR
    path: '/inversor',
    element: (
      <Inversor />

    ),
    children: [
      {
        element: <InversorDashboard />,
        children: [{
          path: '/inversor/dashboard/',
          element: <InversorDashboardHome />
        },
        {
          path: '/inversor/dashboard/profile',
          element: <InversorProfile />
        },
        {
          path: '/inversor/dashboard/investments-analysis',
          element: <AnalysisStatistics />
        },
        {
          path: '/inversor/dashboard/investments-calendar',
          element: <Calendar />
        },
        {
          path: '/inversor/dashboard/investments-history',
          element: <InvestmentsHistory />
        },
        {
          path: '/inversor/dashboard/investments-portfolio',
          element: <Portfolio />
        },
        {
          path: '/inversor/dashboard/investments-simulator',
          element: <InvestmentsSimulator />
        },
        {
          path: '/inversor/dashboard/transactions-recent',
          element: <InversorRecentTransactions />
        },
        {
          path: '/inversor/dashboard/transactions-withdraw',
          element: <Withdraw />
        },
        {
          path: '/inversor/dashboard/transactions-commisions',
          element: <Commissions />
        },
        {
          path: '/inversor/dashboard/transactions-payments',
          element: <Payments />
        }]
      }
    ]
    //# endregion 
  },
  {
    //#region PRESTATARIO
    path: '/borrower',
    element: (

      <Borrower />

    ),
    children: [
      {
        element: <BorrowerDashboard />,
        children: [
          {
            path: '/borrower/dashboard',
            element: <BorrowerDashboardHome />
          },
          {
            path: '/borrower/dashboard/loans-history',
            element: <LoansHistory />
          },
          {
            path: '/borrower/dashboard/loans-simulator',
            element: <LoansSimulator />
          },
          {
            path: '/borrower/dashboard/transactions-recent',
            element: <BorrowerRecentTransactions />
          },
          {
            path: '/borrower/dashboard/account',
            element: <BorrowerAccount />
          },
          {
            path: '/borrower/dashboard/profile',
            element: <BorrowerProfile />
          }
        ]
      }
    ]
    //# endregion 
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
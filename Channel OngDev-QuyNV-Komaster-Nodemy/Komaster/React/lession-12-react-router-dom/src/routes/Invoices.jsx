import { Link, Outlet } from 'react-router-dom'
import { getInvoices } from '../data'

export default function Invoices() {
  const invoices = getInvoices()
  return (
    <div className='invoices'>
      <nav>
        {invoices.map((invoice) => (
          <Link
            className='invoice-item'
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}

import { useParams } from "react-router-dom";
import { getInvoiceByNumber } from "../data";

export default function Invoice() {
  const params = useParams();
  const invoice = getInvoiceByNumber(parseInt(params.invoiceId, 10));

  return (
    <main className="invoice-detail">
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}

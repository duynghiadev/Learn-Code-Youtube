import { useNavigate, useParams } from "react-router-dom";
import { invoices } from "../data/invoices";
import { useEffect } from "react";

const Invoice = () => {
  const param = useParams<{ invoiceId: string }>();
  const navigate = useNavigate();

  const invoice = invoices.find(
    (invoice) => invoice.id.toString() === param.invoiceId
  );

  useEffect(() => {
    // Push user to /invoices
    if (!invoice) navigate("invoices");
  }, [invoice]);

  return (
    <h2 style={{ padding: "1rem" }}>
      Invoice #{invoice?.id} for {invoice?.name}
    </h2>
  );
};

export default Invoice;

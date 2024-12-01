const NewInvoice = () => {
  return (
    <form style={{ padding: "1 rem" }}>
      <label htmlFor="new-invoice" style={{ display: "block" }}>
        New Invoice Name
      </label>
      <input type="text" name="new-invoice" id="new-invoice" />
      <input type="submit" value="Create New Invoice" />
    </form>
  );
};

export default NewInvoice;

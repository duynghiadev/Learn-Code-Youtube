import "../Edit/EditPage.css";
import "../Posts/MakePost.css";

const Input = (props) => {
  const { data, setData, label, inputType, classStyle } = props;
  return (
    <>
      <label>{label}</label>
      {inputType === "textarea" ? (
        <textarea
          type="text"
          className={classStyle}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default Input;

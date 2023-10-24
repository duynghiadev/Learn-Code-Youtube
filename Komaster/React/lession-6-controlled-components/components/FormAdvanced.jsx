import { useState } from "react";

function FormAdvanced() {
  const [fields, setFields] = useState({
    user: "",
    desc: "",
    fruits: "",
  });

  const onChange = (ev) => {
    const target = ev.target;
    const id = target.id;
    const value = target.value;

    setFields((prevFields) => ({
      ...prevFields,
      ...{
        [id]: value,
      },
    }));
  };

  return (
    <form className="form">
      <label>Input text</label>
      <input id="user" value={fields.user} onChange={onChange} />

      <label>Textarea</label>
      <textarea id="desc" value={fields.desc} onChange={onChange} />

      <label>Single select</label>
      <select id="fruits" value={fields.fruits} onChange={onChange}>
        <option value="apple">Apple</option>
        <option value="orange">Orange</option>
        <option value="watermelon">Watermelon</option>
        <option value="avocado">Avocado</option>
        <option value="pineapple">Pineapple</option>
      </select>
    </form>
  );
}

export default FormAdvanced;

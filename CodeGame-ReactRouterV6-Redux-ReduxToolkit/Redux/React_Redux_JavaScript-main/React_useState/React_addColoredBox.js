function Test() {
  const [colors, setColors] = useState([]);

  return (
    <>
      <button
        onClick={() =>
          setColors((prev) => [
            ...prev,
            "#" + Math.floor(Math.random() * 16777215).toString(16),
          ])
        }
      >
        Dodaj boxa
      </button>
      {colors.map((background) => (
        <div
          key={color}
          style={{
            width: 200,
            height: 200,
            background
          }}
        />
      ))}
    </>
  );
}

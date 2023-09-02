function Header({ setIndexPage, setVisibleModel }: any) {
  const handleVisible = (index: number) => {
    setVisibleModel(false);
    setIndexPage(index);
  };
  return (
    <div className=" w-screen h-[45px] bg-dark flex items-center justify-center">
      <div className=" space-x-16 text-light font-light text-xl flex flex-row items-center">
        <a
          href="#"
          onClick={() => handleVisible(1)}
          className="w-52 text-right py-3"
        >
          Projects i've made
        </a>
        <a href="#" onClick={() => handleVisible(2)}>
          <img
            className=" w-12 h-12 rounded-full bg-light border border-light object-cover"
            alt="go-home"
            src="../../../assets/avatar.jpeg"
          />
        </a>
        <a
          href="#"
          onClick={() => handleVisible(3)}
          className=" w-52 text-left py-3"
        >
          Anonymous contact
        </a>
      </div>
    </div>
  );
}

export default Header;

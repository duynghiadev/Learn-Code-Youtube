import { AiOutlineMenuFold } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const MenuIcon = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will navigate back to the previous page in the history stack.
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-lg lg:hidden">
        <div className="flex-1">
          <button
            type="button"
            className="btn btn-ghost normal-case text-xl"
            onClick={handleGoBack}
          >
            <MdOutlineArrowBackIosNew />
          </button>
        </div>
        <div className="flex-none">
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <label htmlFor="my-drawer-2" className="btn btn-ghost normal-case text-xldrawer-button lg:hidden">
            <AiOutlineMenuFold className="text-2xl" />
          </label>
        </div>
      </div>
    </>
  );
};

export default MenuIcon;

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../InputFields/Input";
import "./EditPage.css";
import { updateUser } from "../../redux/apiRequests";

const EditPage = (props) => {
  const { setEdit } = props;
  const avaUrl = [
    "https://i.redd.it/snoovatar/snoo_assets/runways/K047BuOK9CM_Asset_181_552x_RightFacing.png",
    "https://i.redd.it/snoovatar/snoo_assets/runways/iczyqZkN-lA_Asset_173_552x_RightFacing.png",
    "https://i.redd.it/snoovatar/snoo_assets/runways/S06wug4SkSU_Asset_184_552x_RightFacing.png",
    "https://i.redd.it/snoovatar/snoo_assets/runways/lidJx6prXgY_Asset_186_552x_RightFacing.png",
    "https://i.redd.it/snoovatar/snoo_assets/runways/WWMUukzExZY_Asset_167_552x_RightFacing.png",
    "https://i.redd.it/snoovatar/snoo_assets/runways/EiZG1vOUi_w_Asset_171_552x_RightFacing.png",
    "https://i.redd.it/snoovatar/snoo_assets/runways/iq1iIoYokoY_Asset_189_552x_RightFacing.png",
    "https://i.redd.it/snoovatar/snoo_assets/runways/0RVhnBb6rL4_Asset_185_552x_RightFacing.png",
    "https://i.redd.it/snoovatar/snoo_assets/runways/31glVZohNOc_avatar_28573340.jpg",
  ];
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState("#ff9051");
  const [url, setUrl] = useState(user.avaUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updatedUser = {
      name: name,
      age: age,
      about: about,
      avaUrl: url,
      themeColor: theme,
    };
    updateUser(updatedUser, dispatch);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close">Save</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input label="Display name" data={user.name} setData={setName} />
            <Input label="Age" data={user.age} setData={setAge} />
            <Input
              inputType="textarea"
              classStyle="input-about"
              label="About"
              data={user.about}
              setData={setAbout}
            />

            <label>Profile Picture</label>
            <div className="input-image-container">
              {avaUrl.map((url) => {
                return (
                  <>
                    <img
                      src={url}
                      className="input-image"
                      alt="img-reddit"
                      onClick={(e) => setUrl(e.target.src)}
                    />
                  </>
                );
              })}
            </div>
            <div className="theme-container">
              <label>Theme</label>
              <input
                type="color"
                className="theme-color"
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditPage;

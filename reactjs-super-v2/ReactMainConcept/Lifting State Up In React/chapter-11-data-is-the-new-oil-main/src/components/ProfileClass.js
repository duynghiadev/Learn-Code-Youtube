import React from 'react';
import Social from './Social';
import { GITHUB_GET_USER } from '../config';
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : {
        name : "Dummy Name",
        bio : "Dummy content"
      }
    }
    console.log("Profile Component - constructor with props : ", this.props.name, " from parent and state : ", this.state, " from this component");
  }

  async componentDidMount() {
    console.log("Profile Component - componentDidMount", this.props.name);
    const data = await fetch (GITHUB_GET_USER + this.props.name);
    const json = await data.json();
  
    this.setState({
      userInfo : json
    })
  }

  componentDidUpdate() {
    console.log("Profile Component - componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("Profile Component - componentWillUnmount")
  }

  render() {
    const {userInfo} = this.state;
    console.log("Profile Component - render");
    return (
      <div className="flex flex-col justify-center items-center mt-4 gap-5"> 
        <div>
          <img className="rounded-full w-[150px] h-[150px] border-none align-middle" src={userInfo.avatar_url} alt={userInfo.name} />
        </div>
        <div className="">
          <p className="text-base text-bio pt-5 mt-0 mb-4">{userInfo.bio}</p>
          <Social />
        </div>
      </div>
    )
  }
}

export default Profile;
import React from "react"
import {IProfile} from "../Models/IProfile";
import ProfileCard from "./ProfileCard";
import ProfileDetail from "./ProfileDetail";


interface IProps{
    userProfile : IProfile
}
interface IState{
}

let GithubProfile : React.FC<IProps> = ({userProfile}) => {

    return (
        <React.Fragment>
            <hr/>
            <section className="mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {
                                Object.keys(userProfile).length > 0 &&
                                <ProfileCard userProfile = {userProfile}/>
                            }
                        </div>
                        <div className="col-md-8">
                            {
                                Object.keys(userProfile).length > 0 &&
                                <ProfileDetail userProfile = {userProfile}/>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}

export default GithubProfile;
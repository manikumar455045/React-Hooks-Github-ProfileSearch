import React from "react"
import {IProfile} from "../Models/IProfile";

interface IProps{
    userProfile : IProfile
}
interface IState{
}

let ProfileCard : React.FC<IProps> = ({userProfile}) => {

    return (
        <React.Fragment>
            <React.Fragment>
                <div className="card">
                    <img src={userProfile.avatar_url} className= "img-thumbnail" alt=""/>
                    <div className="card-body">
                        <h2>{userProfile.name}</h2>
                        <small>{userProfile.bio}</small>
                    </div>
                </div>
            </React.Fragment>
        </React.Fragment>
    )

}

export default ProfileCard;
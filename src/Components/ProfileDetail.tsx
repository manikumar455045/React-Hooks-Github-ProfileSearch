import React from "react"
import {IProfile} from "../Models/IProfile";

interface IProps{
    userProfile : IProfile
}
interface IState{
}

let ProfileDetail : React.FC<IProps> = ({userProfile}) => {

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-header">
                    <div className="badge badge-success mx-3">{userProfile.followers} Followers</div>
                    <div className="badge badge-primary mx-3">{userProfile.public_repos} Repos</div>
                    <div className="badge badge-danger mx-3">{userProfile.public_gists} Gists</div>
                </div>
                <div className="card-body">
                    <div className="list-group">
                        <div className="list-group-item font-weight-bold">Name : {userProfile.name}</div>
                        <div className="list-group-item">Location : {userProfile.location}</div>
                        <div className="list-group-item">Git Url : <a href={userProfile.html_url} target="_blank" className="text-decoration-none">{userProfile.html_url}</a></div>
                        <div className="list-group-item">Company : {userProfile.company}</div>
                        <div className="list-group-item">Joined Github on : {userProfile.created_at}</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default ProfileDetail;
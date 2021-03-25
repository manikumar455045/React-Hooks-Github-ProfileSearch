import React, {useState} from "react"
import {IProfile} from "../Models/IProfile";
import {IRepo} from "../Models/IRepo";
import axios from "axios";
import GithubProfile from "./GithubProfile";
import GithubRepo from "./GithubRepo";

interface IProps{
}
interface IState{
    username : string,
}

let GithubSearchPanel : React.FC<IProps> = () => {

    let [state , setState] = useState<IState>({
        username : '',
    })

    let [profileState , setProfileState] = useState({
        profile : {} as IProfile
    })

    let [repoState , setRepoState] = useState({
        repos : [] as IRepo[]
    })

    /*to update the username so that it can be user for forming the url for calling the github api*/
    let updateUsername = (event : React.ChangeEvent<HTMLInputElement>) => {
        setState({
            username : event.target.value
        })
    }

    /*Submitting the form which loads the profile and repos*/
    let submitUsername = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateProfile();
        updateRepo();
    }


    let updateProfile = () => {
        let dataUrl : string = `https://api.github.com/users/${state.username}?client_id=c0fda3cbc49b8b6fea98&client_secret=92a6a65ec41e8b9afff6ea3eb114ca2a2a9bd6de`
        axios.get(dataUrl).then((response) => {
            setProfileState({
                profile : response.data
            })
        }).catch((error) => {
            console.error(error)
        })
    }
    /*function calls the github api by forming a url based on entered username to load Github repo*/
    let updateRepo = () => {
        let dataUrl : string = `https://api.github.com/users/${state.username}/repos?client_id=c0fda3cbc49b8b6fea98&client_secret=92a6a65ec41e8b9afff6ea3eb114ca2a2a9bd6de`
        axios.get(dataUrl).then((response) => {
            setRepoState({
                repos : response.data
            })
        }).catch((error) => {
            console.error(error)
        })
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row text-center">
                    <div className="col">
                        <h1>GitHub Profile Search</h1>
                        <p className="lead">Please enter an existing Github username to Load all the details</p>
                    </div>
                    <form onSubmit={submitUsername}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-4">
                                <input type="text" placeholder="Enter GitHub Username" className="form-control" required onChange={updateUsername}/>
                            </div>
                            <div className="col-md-2">
                                <button type="submit" className="btn btn-success btn-sm"><i className="fas fa-search"></i> Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <GithubProfile userProfile = {profileState.profile}/>
            {
                Object.keys(repoState.repos).length > 0 &&
                <GithubRepo repo = {repoState.repos}/>
            }
        </React.Fragment>
    )

}

export default GithubSearchPanel;
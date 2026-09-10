import profilePic from './assets/avatar.jpeg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} width="300" height="200" alt="profile picture"></img>
            <h2>Vaibhav Pandey</h2>
            <p>You will know me soon</p>
        </div>
    );
}

export default Card
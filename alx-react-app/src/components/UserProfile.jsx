function UserProfile(props){

    return(
<div>
<h2>{props.name}</h2>
<p>AGE: {props.age}</p>
<p>BIO: {props.bio}</p>


</div>


    );
}


export default UserProfile;
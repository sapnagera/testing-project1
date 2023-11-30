function ProfileCard({title,handle,image,description}) {

    //note= how we use multi ways return props 
    // first way
    //1 const title= props.title;
    //const handle =props.handle;
// second way 
   //2 const {title, handle} = props;

    return ( 
        
    <div className="card">
        <div className="card-image">
          <figure classname="image is-1by1">
            <img src={image} alt="pda logo" />
            </figure>  
        </div>
        <div className="card-content">
            <div className="media-content">
        <p className="title is-4">  {title}</p>
         <p className="subtitle is-6">{handle}</p>
    </div>
    <div className="content">{description}</div>
    </div>
  </div>
    );

}
export default ProfileCard;



const Header = (props) => {
  return (
    <div>
     {/* <div className="hero-image" style={{backgroundImage: `url(${(props.data) ? props.data.header_image : 'https://ironhorsebucket.s3.us-west-1.amazonaws.com/ma785xckw6yfpg1ncmol029lbf85'})`}}> */}
      <h1 className="ihs">{(props.data)? props.data.header_text : "IRON HORSE STUDIO"}</h1>
    </div>
  );
}

export default Header;

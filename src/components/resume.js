function resume() {
    return (
        <>
            <object data={process.env.PUBLIC_URL + "/resume/Mathew Lundin Resume.pdf"} style={{ height: '48rem', width: '100%' }}><div className="container"><h1 className="orange-text">Looks like you're on a mobile device or your browser doesn't support PDF.<a href="./resume/Mathew Lundin Resume.pdf" download="Mathew Lundin Resume" className="waves-effect waves-light btn-large"><i class="large material-icons">get_app</i> Download Mat's Resume</a></h1><br></br><br></br></div></object>
        </>
    )
};

export default resume;
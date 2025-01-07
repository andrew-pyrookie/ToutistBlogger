const LandingPage = () => {
  return (
    <div className="landing-page">
      <video autoPlay muted loop className="background-video">
        <source src="/italystreets.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="heading">
        <h1>Discovering Art and Romance in Italy</h1>
      </div>
    </div>
  );
};

export default LandingPage;

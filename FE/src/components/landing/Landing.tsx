import HCSLogo from "/HCS_logo.svg";
import "./landing.css";
const Landing = () => {
  return (
    <>
      <div id="root" className="whitespace-pre-line">
        <div className="logo-container">
          <img src={HCSLogo} className="logo" alt="HCSLogo" />
        </div>
        <h1 id="title" className="text-3xl font-bold">
          Happy Cloud Storage
        </h1>
        <h2>행복 클라우드 스토리지</h2>
        <div className="card">
          <p>일상의 행복을 저장하고</p>
          <p>함께 나누어요</p>
        </div>
      </div>
    </>
  );
};

export default Landing;

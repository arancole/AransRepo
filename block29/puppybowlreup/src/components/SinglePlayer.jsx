import { useNavigate } from "react-router-dom";

function SinglePlayer() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/SinglePlayer");
  };
  return (
    <div>
      <h1>Hello, World</h1>
      <button onClick={handleButtonClick}>Go to SinglePlayer Page!</button>
    </div>
  );
}
export default SinglePlayer;

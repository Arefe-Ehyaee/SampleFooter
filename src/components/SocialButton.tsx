import { useNavigate } from "react-router-dom";

interface SocialButtonProps {
  icon: string;
  navigateTo: string;
  text: string;
}

const SocialButton = ({ icon, navigateTo, text }: SocialButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <button onClick={handleClick} className="ml-2">
      <img src={icon} alt={text} />
    </button>
  );
};

export default SocialButton;

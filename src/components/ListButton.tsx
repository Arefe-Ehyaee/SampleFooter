import { useNavigate } from 'react-router-dom';

interface ListButtonProps {
  text: string;
  navigateTo: string;
}

const ListButton = ({ text, navigateTo }: ListButtonProps) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo);
    };

  return (
    <li className="pb-3">
      <button onClick={handleClick}>{text}</button>
    </li>
  );
};

export default ListButton;

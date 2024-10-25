import Chip from "@mui/material/Chip";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface chipProps {
  label: string;
  navigateTo: string;
}

const CustomStyledChip = styled(Chip)`
  background-color: #0059624d !important;
  color: #ffffff !important;
  font-weight: bold !important;
  border-radius: 8px !important;
  padding: 8px !important;
  margin-left: 16px !important;
`;

const CustomChip = ({label, navigateTo}: chipProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };
  return <button onClick={handleClick}><CustomStyledChip label={label} /></button>;
}

export default CustomChip;
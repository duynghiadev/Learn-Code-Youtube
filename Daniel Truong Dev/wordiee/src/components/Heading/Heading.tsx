import "./Heading.css";

interface IProps {
  type: string;
  text: string;
}

const Heading: React.FC<IProps> = (props) => {
  const { type, text } = props;
  return <p className={`heading-${type}`}>{text}</p>;
};

export default Heading;

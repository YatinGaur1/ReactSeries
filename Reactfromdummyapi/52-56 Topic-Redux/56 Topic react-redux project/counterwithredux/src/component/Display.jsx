import { useSelector } from "react-redux";

const Display = () => {
  const counter=useSelector(store=>store.counter);
  return (
    <p className="lead mb-4">
    counter current value:{counter}
    </p>
  );
};

export default Display;
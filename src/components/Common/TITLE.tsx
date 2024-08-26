import KEY from "../../assets/key.webp";
const TITLE = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={KEY} alt="key-img" />
      <h1 className="text-5xl font-bold mb-8">Keysaver</h1>
    </div>
  );
};

export default TITLE;

import useGeneralProvider from "../../hooks/useGeneralProvider";
import KEY_ITEM from "./KEY_ITEM";

const KEYS_LIST = () => {
  const { userData, keysItem, setKeysItem } = useGeneralProvider();

  const handleDelete = (id: string) => {
    const newKeysArr = keysItem.filter((keyItem) => keyItem.id! !== id);

    setKeysItem(newKeysArr);
  };

  return (
    <div className="min-h-[300px] w-full flex flex-col items-center gap-8 md:min-h-[500px]">
      <h2 className="text-white text-3xl font-bold">
        Hello, <span className="text-yellow-500">{userData.username}!</span>
      </h2>
      <ul className="flex flex-col gap-4 overflow-auto md:flex-row md:flex-wrap">
        {keysItem.length > 0 ? (
          keysItem.map((keyItem) => {
            return <KEY_ITEM keyItem={keyItem} handleDelete={handleDelete} />;
          })
        ) : (
          <p className="text-2xl font-semibold text-neutral-200">
            No passwords saved yet!
          </p>
        )}
      </ul>
    </div>
  );
};

export default KEYS_LIST;

const PERIODICITY_TEXT = ({ periodicity }: { periodicity: string }) => {
  return (
    <h2
      className={`text-lg font-semibold ${
        periodicity === "very often"
          ? "text-red-600"
          : periodicity === "often"
          ? "text-orange-500"
          : periodicity === "not so often"
          ? "text-yellow-600"
          : periodicity === "rarely used"
          ? "text-green-500"
          : "text-blue-400"
      }`}
    >
      {periodicity}
    </h2>
  );
};

export default PERIODICITY_TEXT;

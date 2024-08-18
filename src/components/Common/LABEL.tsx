/**
 *
 * @param { Object } - This object expects a children element, the flexDirection that determines the flex properties in tailwind css of the container box, and an optional title
 * @returns Customized label
 */
const LABEL = ({
  children,
  flexDirection,
  title,
}: {
  children: JSX.Element | JSX.Element[];
  flexDirection?: string;
  title?: string;
}) => {
  return (
    <label className={`flex ${flexDirection}`}>
      {title && <p className="font-semibold">{title}</p>}
      <div className={`flex gap-4 ${title ? "items-end" : "items-center"}`}>
        {children}
      </div>
    </label>
  );
};

export default LABEL;

/**
 * A functional component that renders a button with a bold font, padding, rounded corners, and a transition effect on hover.
 * It takes in a `children` prop for the button's content and a `className` prop for additional CSS classes.
 * It also takes in any additional props and spreads them onto the button element.
 * @param {JSX.Element} children - The content of the button.
 * @param {string} className - Additional CSS classes for the button.
 * @param {Object} props - Additional props for the button element.
 * @returns {JSX.Element} The rendered button element.
 */
const MyButton = ({ children, ...props }) => {
  const { className, ...data } = props;

  return (
    <button
      className={`${className} font-bold py-2 px-4 rounded-lg transition-colors`}
      {...data}
    >
      {children}
    </button>
  );
};

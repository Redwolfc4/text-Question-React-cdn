const ChoiceResult = ({ children, textFirst, className }) => {
  return (
    <p className="text-slate-600">
      {textFirst}
      <span className={className}>{children}</span>
    </p>
  );
};

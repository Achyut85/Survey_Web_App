const Button = ({ hover, onClick, bgColor, ButtonIcon, textColor, label ,submit , disable }) => {
  
    const baseStyles = `py-1 px-2 rounded-md font-bold flex justify-center items-center border-none gap-1`;
  
    return (
      <button
        className={`${baseStyles} ${bgColor} ${hover} ${textColor}`}
        onClick={onClick}
        type={`${submit? "submit" : "button"}`}
        
      >
        {ButtonIcon && <span><ButtonIcon /></span>}
        <p >{label}</p>
      </button>
    );
  };
  
  export default Button;
  
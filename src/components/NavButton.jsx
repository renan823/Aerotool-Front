const NavButtons = ({
  isShowView,
  setIsShowView,
  bgColor,
  buttonText,
  isSelected,
}) => {
  let style = `${bgColor} p-2 text-white m-2 text-lg font-semibold cursor-default`;
  if (isSelected) {
    return (
      <div>
        <span className={style} onClick={() => {}}>
          {buttonText}
        </span>
      </div>
    );
  } else {
    style = `${bgColor} p-2 text-primary m-2 text-lg font-semibold cursor-pointer`
    return (
      <div>
        <span className={style} onClick={() => setIsShowView(!isShowView)}>
          {buttonText}
        </span>
      </div>
    );
  }
};

export default NavButtons;

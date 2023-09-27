const NavButtons = ({ isShowView, setIsShowView, bgColor, buttonText }) => {
    const style = `${bgColor} p-2 text-white m-2 text-lg font-semibold `
    return (
    <div>
        <span className={style} onClick={() => setIsShowView(!isShowView)}>{buttonText}</span>
    </div>)
}

export default NavButtons;
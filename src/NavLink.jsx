const NavLink = ({ name, link, hamButton, setHamButton }) => {
  return (
    <a
      href={link}
      className={`hover:text-white ${hamButton ? "" : "max-xl:hidden"}`}
      onClick={() => {
        setHamButton(false);
      }}
    >
      {name}
    </a>
  );
};

export default NavLink;

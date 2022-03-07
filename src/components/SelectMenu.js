export default function SelectMenu(props) {
  return (
    <div className="container">
      <ul className="flex select-menu">
        <li onClick={props.handleClick} className={props.select !== 'All' ? "select-menu-item text-md text-bold" : "select-menu-item text-md text-bold active"}>All</li>
        <li onClick={props.handleClick} className={props.select !== 'JavaScript' ? "select-menu-item text-md text-bold" : "select-menu-item text-md text-bold active"}>JavaScript</li>
        <li onClick={props.handleClick} className={props.select !== 'Ruby' ? "select-menu-item text-md text-bold" : "select-menu-item text-md text-bold active"}>Ruby</li>
        <li onClick={props.handleClick} className={props.select !== 'Java' ? "select-menu-item text-md text-bold" : "select-menu-item text-md text-bold active"}>Java</li>
        <li onClick={props.handleClick} className={props.select !== 'CSS' ? "select-menu-item text-md text-bold" : "select-menu-item text-md text-bold active"}>CSS</li>
        <li onClick={props.handleClick} className={props.select !== 'Python' ? "select-menu-item text-md text-bold" : "select-menu-item text-md text-bold active"}>Python</li>
      </ul>
    </div>
  );
}
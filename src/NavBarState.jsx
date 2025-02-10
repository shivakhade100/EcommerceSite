
import NavBarStateButton from "./NavBarStateButton";

export default function NavBarState(props) {
  let { stateList } = props;
  let {selectedIndex}=props
  function handleClick(index){
    console.log("parent"+index);
    props.onClick(index)
        
        
  }
  
  
  return (
    <>
      <div className="text-center btn-panel p-4 border-bottom border-4 m-3 border-danger  ">
        {stateList.map((s, index) => (
          <NavBarStateButton key={index} label={s.state} selectedIndex={selectedIndex} index={index} onClick={handleClick} />
        ))}
      </div>
    </>
  );
}

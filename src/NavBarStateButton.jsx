export default function NavBarStateButton(props) {
  let { index } = props;
  let { selectedIndex } = props;
  let { label } = props;
  function handleClick() {
    console.log("grand" + index);

    props.onClick(index);
  }
  return (
    <>
      <button
        className={
          " m-2 btn  " +
          // (selectedIndex==index && "btn-primary")
          // (selectedIndex==index && "btn-danger")
           (selectedIndex != index ? " btn-primary" : " btn-danger")

        }
        onClick={handleClick}
      >
        {label}
      </button>
    </>
  );
}

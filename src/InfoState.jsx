export default function InfoState(props) {
  let { selectedState } = props;
  // let { selectedIndex } = props;
  return (
    <>
      <h1 className="text-center  mt-5 w-75 mx-auto p-4">
        Capital of {selectedState.state} is {selectedState.capital}. Its
        population is {selectedState.population}.
      </h1>
    </>
  );
}

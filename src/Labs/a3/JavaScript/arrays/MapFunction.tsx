function MapFunction() {
  let numberArray1 = [1, 2, 3, 4, 5, 6];
  const square = (a: number) => a * a;
  const squareLi = (a: number, index: number) => {
    return (
      <li key={index}>
        {a}* {a} = {a * a}
      </li>
    );
  };

  const squares = numberArray1.map(square);
  const cubes = numberArray1.map((a) => a * a * a);
  const squareLis = numberArray1.map(squareLi);

  return (
    <>
      <h4>Map</h4>
      squares = {squares}
      <br />
      cubes = {cubes}
      <br />
      {numberArray1.map((a, index) => (
        <li key={index}>{a * a}</li>
      ))}
    </>
  );
}
export default MapFunction;

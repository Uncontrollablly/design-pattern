import RoundHole from './types/roundHole';
import RoundPeg from './types/roundPeg';
import SquarePeg from './types/squarePeg';
import SquarePegAdapter from './types/squarePegAdapter';

export default (): void => {
  const hole = new RoundHole(5);
  const rpeg = new RoundPeg(5);

  console.log('Round peg fits round hole: ', hole.fits(rpeg)); // true

  const small_sqpeg = new SquarePeg(5);
  const large_sqpeg = new SquarePeg(10);
  // hole.fits(small_sqpeg); // 此处无法编译（类型不一致）。

  const small_sqpeg_adapter = new SquarePegAdapter(small_sqpeg);
  const large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg);

  console.log(
    'Small square reg fits round hole: ',
    hole.fits(small_sqpeg_adapter)
  ); // true
  console.log(
    "Large square reg does't fits round hole: ",
    hole.fits(large_sqpeg_adapter)
  ); // false
};

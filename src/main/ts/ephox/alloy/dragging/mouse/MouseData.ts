import { Option } from '@ephox/katamari';
import { Position } from '@ephox/sugar';
import { SugarEvent, PositionCoordinates } from '../../alien/TypeDefinitions';

const getData = function (event: SugarEvent): Option<PositionCoordinates> {
  return Option.from(Position(event.x(), event.y()));
};

// When dragging with the mouse, the delta is simply the difference
// between the two position (previous/old and next/nu)
const getDelta = function (old: PositionCoordinates, nu: PositionCoordinates): PositionCoordinates {
  return Position(nu.left() - old.left(), nu.top() - old.top());
};

export {
  getData,
  getDelta
};
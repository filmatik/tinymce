import { Fun, Optional } from '@ephox/katamari';
import { Situs } from './Situs';

export interface Response {
  selection: () => Optional<Situs>;
  kill: () => boolean;
}

const create = (selection: Optional<Situs>, kill: boolean): Response => ({
  selection: Fun.constant(selection),
  kill: Fun.constant(kill)
});

export const Response = {
  create
};

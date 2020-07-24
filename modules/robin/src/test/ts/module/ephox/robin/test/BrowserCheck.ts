import { Optional } from '@ephox/katamari';
import { Insert, Remove, SelectorFind, SugarElement, Traverse } from '@ephox/sugar';

const getNode = function (container: SugarElement): SugarElement<Node> {
  return SelectorFind.descendant(container, '.me').orThunk(function () {
    return SelectorFind.descendant(container, '.child').bind(Traverse.firstChild) as Optional<SugarElement<any>>;
  }).getOrDie('Could not find the descendant ".me" or the first child of the descendant ".child"');
};

const run = function (input: string, f: (e: SugarElement) => void) {
  const body = SelectorFind.first('body').getOrDie();
  const container = SugarElement.fromTag('div');
  Insert.append(body, container);
  container.dom().innerHTML = input;
  const node = getNode(container);
  f(node);
  Remove.remove(container);
};

export {
  run
};

import { PlatformDetection } from '@ephox/sand';

import { KeyModifiers } from '../keyboard/FakeKeys';
import * as SeleniumAction from '../server/SeleniumAction';
import { RealKeys } from './RealKeys';
import { Step } from './Step';

const platform = PlatformDetection.detect();

const sImportToClipboard = <T>(filename: string): Step<T, T> =>
  SeleniumAction.sPerform<T>('/clipboard', {
    import: filename
  });

const pImportToClipboard = (filename: string): Promise<{}> =>
  SeleniumAction.pPerform('/clipboard', {
    import: filename
  });

const sCopy = <T>(selector: string): Step<T, T> => {
  const modifiers: KeyModifiers = platform.os.isOSX() ? { metaKey: true } : { ctrlKey: true };
  return RealKeys.sSendKeysOn<T>(selector, [
    RealKeys.combo(modifiers, 'c')
  ]);
};

const pCopy = (selector: string): Promise<{}> =>
  Step.toPromise(sCopy(selector))(undefined);

const sPaste = <T>(selector: string): Step<T, T> => {
  const modifiers: KeyModifiers = platform.os.isOSX() ? { metaKey: true } : { ctrlKey: true };
  return RealKeys.sSendKeysOn<T>(selector, [
    RealKeys.combo(modifiers, 'v')
  ]);
};

const pPaste = (selector: string): Promise<{}> =>
  Step.toPromise(sPaste(selector))(undefined);

export {
  pImportToClipboard,
  pCopy,
  pPaste,
  sImportToClipboard,
  sCopy,
  sPaste
};

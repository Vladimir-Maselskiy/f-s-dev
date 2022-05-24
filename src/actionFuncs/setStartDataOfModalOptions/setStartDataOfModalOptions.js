import { setStartGorizontalLockStatusOfModalOptions } from './setStartGorizontalLockStatusOfModalOptions';
import { setStartHandleDistanceInModel } from './setStartHandleDistanceInModel';
import { setStartMicroVentilationStatusInModel } from './setStartMicroVentilationStatusInModel';

export function setStartDataOfModalOptions(id) {
  setStartHandleDistanceInModel(id);
  setStartMicroVentilationStatusInModel(id);
  setStartGorizontalLockStatusOfModalOptions(id);
}

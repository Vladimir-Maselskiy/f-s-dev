import { setStartGorizontalLockStatusOfModalOptions } from './setStartGorizontalLockStatusOfModalOptions';
import { setStartHandleDistanceInModel } from './setStartHandleDistanceInModel';
import { setStartMicroVentilationStatusInModel } from './setStartMicroVentilationStatusInModel';
import { setStartWithoutBottomHingeStatusOfModalOptions } from './setStartWithoutBottomHingeStatusOfModalOptions';

export function setStartDataOfModalOptions(id) {
  setStartHandleDistanceInModel(id);
  setStartMicroVentilationStatusInModel(id);
  setStartGorizontalLockStatusOfModalOptions(id);
  setStartWithoutBottomHingeStatusOfModalOptions(id);
}

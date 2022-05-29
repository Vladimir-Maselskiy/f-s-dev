import { setStartGorizontalLockStatusOfModalOptions } from './setStartGorizontalLockStatusOfModalOptions';
import { setStartHandleDistanceInModel } from './setStartHandleDistanceInModel';
import { setStartHingeSidePressSelectStatusOfModalOptions } from './setStartHingeSidePressSelectStatusOfModalOptions';
import { setStartIsTurnTiltGetriebeStatusOfModalOptions } from './setStartIsTurnTiltGetriebeStatusOfModalOptions';
import { setStartMicroVentilationStatusInModel } from './setStartMicroVentilationStatusInModel';
import { setStartWithoutBottomHingeStatusOfModalOptions } from './setStartWithoutBottomHingeStatusOfModalOptions';

export function setStartDataOfModalOptions(id) {
  setStartHandleDistanceInModel(id);
  setStartMicroVentilationStatusInModel(id);
  setStartIsTurnTiltGetriebeStatusOfModalOptions(id);
  setStartGorizontalLockStatusOfModalOptions(id);
  setStartWithoutBottomHingeStatusOfModalOptions(id);
  setStartHingeSidePressSelectStatusOfModalOptions(id);
}

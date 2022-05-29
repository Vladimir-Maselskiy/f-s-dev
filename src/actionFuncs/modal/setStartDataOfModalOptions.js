import { setStartGorizontalLockStatusOfModalOptions } from './setStartGorizontalLockStatusOfModalOptions';
import { setStartHandleDistanceInModel } from './setStartHandleDistanceInModel';
import { setStartHingeSidePressSelectStatusOfModalOptions } from './setStartHingeSidePressSelectStatusOfModalOptions';
import { setStartIsTurnTiltGetriebeStatusOfModalOptions } from './setStartIsTurnTiltGetriebeStatusOfModalOptions';
import { setStartMicroVentilationStatusInModel } from './setStartMicroVentilationStatusInModel';
import { setStartShtulpBlockSelectStatusOfModalOptions } from './setStartShtulpBlockSelectStatusOfModalOptions';
import { setStartWithoutBottomHingeStatusOfModalOptions } from './setStartWithoutBottomHingeStatusOfModalOptions';

export function setStartDataOfModalOptions(id) {
  setStartShtulpBlockSelectStatusOfModalOptions(id);
  setStartIsTurnTiltGetriebeStatusOfModalOptions(id);
  setStartHandleDistanceInModel(id);
  setStartMicroVentilationStatusInModel(id);
  setStartGorizontalLockStatusOfModalOptions(id);
  setStartWithoutBottomHingeStatusOfModalOptions(id);
  setStartHingeSidePressSelectStatusOfModalOptions(id);
}

import { refs } from '../refs';

export function getMinAndMaxHandleDistanceInModal() {
  const height = Number(refs.heightInModalInputRef.value);

  let minHeight = 235;
  let maxHeight = height / 2;
  if (height < 800) {
    maxHeight = 400;
  }
  if (height >= 800 && height < 1250) {
    maxHeight = 625;
  }
  if (height >= 1250 && height < 1350) {
    maxHeight = 675;
  }
  if (height >= 1350 && height < 1750) {
    maxHeight = 875;
  }

  if (height >= 1750) {
    maxHeight = 1200;
  }

  return { minHeight, maxHeight };
}

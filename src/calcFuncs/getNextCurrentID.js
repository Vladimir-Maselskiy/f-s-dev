let currentID = 1;

export function getNextCurrentID() {
  return (currentID += 1);
}

export enum Laminations {
  NONE,
  ONE_SIDE,
  BOTH,
}

const data: string[] = [];
data[Laminations.NONE] = 'Нет';
data[Laminations.ONE_SIDE] = 'Односторонняя';
data[Laminations.BOTH] = 'Двухсторонняя';

export default data;

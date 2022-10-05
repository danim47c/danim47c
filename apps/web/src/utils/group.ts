export const groupList = <T extends unknown>(list: T[], size: number): T[][] => {
  const groups = [];
  for (let i = 0; i < list.length; i += size) {
    groups.push(list.slice(i, i + size));
  }
  return groups;
}
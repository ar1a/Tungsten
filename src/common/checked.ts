enum IsoDateBrand {}

export type IsoDate = IsoDateBrand & string;

export function checkIsoDate(value: string): value is IsoDate {
  return /^\d{4,}-\d{2}-\d{2}$/.test(value);
}

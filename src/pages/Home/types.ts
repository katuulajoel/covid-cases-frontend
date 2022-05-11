export type CovieCaseType = {
  country: string
  city: string
  continent: string
  population: number
  life_expectancy: number
  confirmed: number
  deaths: number
  updated_at: string
};

export type GetCovidCaseApiPayload = {
  id: number;
};

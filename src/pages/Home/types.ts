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

export interface SummaryProps {
  confirmed: number;
  deaths: number;
  continent: string;
}

export interface CovidCasesProps {
  data: CovieCaseType[];
  summary: SummaryProps[];
  countries: string[];
  continents: string[];
  isLoading: boolean;
  error: any;
}

export type GetCovidCaseApiPayload = {
  id: number;
};

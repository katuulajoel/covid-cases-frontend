import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { getCovidCasesTrigger, getCountryCasesTrigger, getContinentCasesTrigger } from "./covidCasesSlice";
import useTypedSelector from "hooks/useTypedSelector";
import { CovidCaseType } from "./types";

const useCovidCases = (country?: string) => {
  const dispatch = useDispatch();
  const { data, summary, countries, continents, isLoading } = useTypedSelector((state) => state.covidCases);
  const [selectedCountry, setSelectedCountry] = useState<string | null>();
  const [selectedContinent, setSelectedContinent] = useState<string | null>();
  const [filteredCountry, setCountryFilter] = useState<CovidCaseType | null>();

  useEffect(() => {
    dispatch(getCovidCasesTrigger());
  }, []);

  useEffect(() => {
    if (country) {
      setCountryFilter(data.find(element => element.country === country))
    }
  }, [country]);

  const getCountryCases = useCallback((val) => {
    console.log(val)
    setSelectedCountry(val);
    setSelectedContinent('');
    dispatch(getCountryCasesTrigger(val));
  }, []);

  const getContinentCases = useCallback((val) => {
    console.log(val)
    setSelectedContinent(val);
    setSelectedCountry('');
    dispatch(getContinentCasesTrigger(val));
  }, []);

  return {
    data,
    summary,
    countries: [...(countries || [])].sort(),
    continents: [...(continents || [])].sort(),
    isLoading,
    selectedCountry,
    selectedContinent,
    getContinentCases,
    getCountryCases,
    filteredCountry
  };
};

export default useCovidCases;

import { useDispatch } from "react-redux";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getCovidCasesTrigger } from "./covidCasesSlice";
import useTypedSelector from "hooks/useTypedSelector";

const useCovidCases = () => {
  const dispatch = useDispatch();
  const { data, summary, countries, continents, isLoading } = useTypedSelector((state) => state.covidCases);
  const [selectCountry, setSelectCountry] = useState<string | null>();
  const [selectedContinent, setSelectedContinent] = useState<string | null>();


  useEffect(() => {
    dispatch(getCovidCasesTrigger());
  }, []);

  const getCountryCases = useCallback((val) => {
    console.log(val)
    setSelectCountry(val);
    setSelectedContinent('');
  }, []);

  const getContinentCases = useCallback((val) => {
    console.log(val)
    setSelectedContinent(val);
    setSelectCountry('');
  }, []);

  return {
    data,
    summary,
    countries: [...countries].sort(),
    continents: [...continents].sort(),
    isLoading,
    selectCountry,
    selectedContinent,
    getContinentCases,
    getCountryCases
  };
};

export default useCovidCases;

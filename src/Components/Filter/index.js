import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { getCountries } from '../../utils/get';

export default function Filter({ ...props }) {

    const [currentInput, setCurrentInput] = useState("");
    const [currentSelect, setCurrentSelect] = useState("");

    const currentOption = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

    useEffect(() => {
        const getResults = async () => {
            let search = await searchByInput(currentInput);

            console.log(search);

            props._onChange(search);
        }

        getResults();
    }, [currentInput]);

    const handleSelectChange = async filteredCountryText => {

        setCurrentInput("");
        setCurrentSelect(filteredCountryText);

        if (filteredCountryText) {

            let region = await getByRegion(filteredCountryText);

            props._onChange(region.data);
        } else {
            let region = await getCountries();

            props._onChange(region.data);
        }
    };
    
    const getByRegion = country => {
        return axios.get(`https://restcountries.eu/rest/v2/region/${country}`);
    };

    const searchByInput = async search => {
        if (currentSelect) {
            let region = await getByRegion(currentSelect);
            region = region.data.filter(region => {
                return region.name.toLowerCase().startsWith(search.toLowerCase()) !== false;
            });
            return region;
        } else {
            let result;
            if (!search.length) {
                result = await getCountries();
            } else {
                result = await axios.get(`https://restcountries.eu/rest/v2/name/${search}`);
            }

            return result.data;
        }
    };

    return (
        <Styled.FilterContainer>

            <Styled.InputContainer>
                <Styled.searchIcon icon={faSearch} />
                <Styled.Input
                    value={currentInput}
                    onChange={e => setCurrentInput(e.target.value)} />
            </Styled.InputContainer>
            <Styled.SelectDiv>

                <Styled.Select
                    select={currentSelect}
                    onChange={(e) => handleSelectChange(e.target.value)}
                >
                    <Styled.Option value="">Filter by region</Styled.Option>
                    {currentOption.map((region) => {
                        return (
                            <Styled.Option value={region}>{region}</Styled.Option>
                        );
                    })}
                </Styled.Select>
            </Styled.SelectDiv>
        </Styled.FilterContainer>
    )
}
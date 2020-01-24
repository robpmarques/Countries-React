import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getByRegion, searchByInput } from '../../utils/get';
import axios from 'axios';

export default function Filter({ ...props }) {

    const [currentInput, setCurrentInput] = useState("");
    const [currentSelect, setCurrentSelect] = useState("");
    const [currentOption, setCurrentOption] = useState(["Africa", "Americas", "Asia", "Europe", "Oceania"]);

    useEffect((currentSelect) => {
        const getResults = async () => {
            if (currentInput) {
                let search = await searchByInput(currentInput);

                props._onChange(search);
            } else {
                props._onChange([]);
            }
        }

        getResults();
    }, [currentInput]);

    const handleSelectChange = async filteredCountryText => {

        if (filteredCountryText) {
            setCurrentInput("");
            setCurrentSelect(filteredCountryText);

            let region = await getByRegion(filteredCountryText);

            props._onChange(region.data);
        }
    };

    useEffect(() => {

    }, []);

    const searchByInput = async (search) => {
        if (currentSelect) {
            let region = await getByRegion(currentSelect);

            region = region.data.filter(region => {
                return region.name.toLowerCase().startsWith(search.toLowerCase()) !== false;
            });
            return region;
        } else {
            let result = await axios.get(`https://restcountries.eu/rest/v2/name/${search}`);

            return result;
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
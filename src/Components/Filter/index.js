import React from 'react';

export default function Filter() {

    const handleInputChange = (filteredCountryText) => {

        let countriesResponse = countries.filter((country) => {
    
          let countryCondition = country.name.toLowerCase().startsWith(filteredCountryText.toLowerCase()) !== false;
    
          if (country.region === filteredCountryText && countryCondition !== '') {
            return true;
          }
    
          return countryCondition;
        });
    
        setFilteredCountry(countriesResponse);
      };

    return (
        <Styled.FilterContainer>

            <Styled.InputContainer>
                <Styled.searchIcon icon={faSearch} />
                <StyledInput onChange={onChange} />
                {/* <Input input={this.state.countryInput} inputChange={(e) => this.handleInputChange(e)} placeholder="Search for a country..." /> */}
            </Styled.InputContainer>
            <Styled.SelectDiv>

                <StyledSelect value={props.select} onChange={(e) => props.selectChange(e)} placeholder={props.placeholder}>
                    ${props.children}
                </StyledSelect>

                {/* <Select select={this.state.selectedRegion} selectChange={(e) => this.handleInputChange(e)}>
                <Styled.Option value="">Filter by region</Styled.Option>
                {this.state.region.map((value) => {
                    if (value.region !== '') {
                        return (
                            <Styled.Option value={value.region}>{value.region}</Styled.Option>
                        );
                    }
                })}
            </Select> */}
            </Styled.SelectDiv>
        </Styled.FilterContainer>
    )
}
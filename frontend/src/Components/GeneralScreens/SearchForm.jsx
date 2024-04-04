import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';

const SearchForm = ({ data, onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter function
    const filterData = (data, searchTerm) => {
        if (!data || !Array.isArray(data)) {
            return [];
        }

        return data.filter(item => {
            const itemName = item && item.name ? item.name.toLowerCase() : '';
            const itemEmail = item && item.email ? item.email.toLowerCase() : '';
            const itemRank = item && item.rank ? item.rank.toLowerCase() : '';

            return (
                itemName.includes(searchTerm.toLowerCase()) ||
                itemEmail.includes(searchTerm.toLowerCase()) ||
                itemRank.includes(searchTerm.toLowerCase())
            );
        });
    };

    const handleSearchTerm = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        // Filter the data based on search term
        const filteredData = filterData(data, searchTerm);
        // Pass the filtered data to the parent component
        onFilterChange(filteredData);
    };

    return (
        <>
            <Input
                flex={1}
                size="sm"
                placeholder="Search Here..."
                value={searchTerm}
                onChange={handleSearchTerm}
            />
        </>
    );
};

export default SearchForm;

import { useState } from 'react';

const useFilteredData = (initialData) => {
    const [filteredData, setFilteredData] = useState(initialData);

    const handleFilterChange = (filteredData) => {
        setFilteredData(filteredData);
    };

    return [filteredData, handleFilterChange];
};

export default useFilteredData;

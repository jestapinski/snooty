import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme/docsTheme';
import Select from '../Select';
import SearchContext from './SearchContext';
import {
  getSortedBranchesForProperty,
  parseMarianManifests,
  parseMarianManifest,
} from '../../utils/parse-marian-manifests';

const PARSED_MANIFESTS = {
  Atlas: { master: 'atlas-master' },
  'Atlas Open Service Broker': { current: 'atlas-open-service-broker-current' },
  Charts: {
    '19.06': 'charts-19.06',
    '19.09': 'charts-19.09',
    '19.12': 'charts-19.12',
    current: 'charts-current',
    master: 'charts-master',
    'v0.10': 'charts-v0.10',
    'v0.11': 'charts-v0.11',
    'v0.12': 'charts-v0.12',
    'v0.9': 'charts-v0.9',
  },
};

const SideLabelText = styled('p')`
  font-family: Akzidenz;
  font-size: ${theme.fontSize.small};
  letter-spacing: 0.5px;
  margin: 0;
`;

const SelectWrapper = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  :first-of-type {
    margin-bottom: ${theme.size.medium};
  }
`;

const MaxWidthSelect = styled(Select)`
  width: 175px;
`;

const SearchFilters = ({ hasSideLabels, ...props }) => {
  const { searchFilter, setSearchFilter } = useContext(SearchContext);
  const [filterResults, setFilterResults] = useState({});
  const [propertyChoices, setPropertyChoices] = useState([]);
  const [property, setProperty] = useState(null);
  const [branchChoices, setBranchChoices] = useState([]);
  const [branch, setBranch] = useState(null);
  // On mount, pull in the marian manifests and update filters with current values
  useEffect(() => {
    async function fetchManifests() {
      // const result = await fetch('http://marian.mongodb.com/status');
      // const jsonResult = await result.json();
      // setFilterResults(parseMarianManifests(jsonResult.manifests));
      setFilterResults(PARSED_MANIFESTS);
    }
    fetchManifests().then(() => {
      if (searchFilter) {
        const { property, branch } = parseMarianManifest(searchFilter);
        setProperty(property);
        setBranch(branch);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const properties = Object.keys(filterResults);
    properties.sort();
    setPropertyChoices(properties.map(p => ({ text: p, value: p })));
  }, [filterResults]);
  useEffect(() => {
    if (filterResults && filterResults[property]) {
      const branches = getSortedBranchesForProperty(filterResults, property);
      setBranch(branches[0]);
      setBranchChoices(branches.map(b => ({ text: b, value: b })));
    }
  }, [filterResults, property]);
  useEffect(() => {
    if (filterResults && property && branch && filterResults[property]) {
      setSearchFilter(filterResults[property][branch]);
    }
  }, [branch, filterResults, property, setSearchFilter]);

  return (
    <div {...props}>
      <SelectWrapper>
        {hasSideLabels && <SideLabelText>Product</SideLabelText>}
        <MaxWidthSelect
          choices={propertyChoices}
          onChange={({ value }) => setProperty(value)}
          defaultText="Select a Property"
          value={property}
        />
      </SelectWrapper>
      <SelectWrapper>
        {hasSideLabels && <SideLabelText>Version</SideLabelText>}
        <MaxWidthSelect
          choices={branchChoices}
          onChange={({ value }) => setBranch(value)}
          disabled={!branchChoices.length}
          defaultText="Select a Version"
          value={branch}
        />
      </SelectWrapper>
    </div>
  );
};

export default SearchFilters;

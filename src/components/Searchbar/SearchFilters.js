import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme/docsTheme';
import Select from '../Select';
import SearchContext from './SearchContext';
import {
  getSortedBranchesForProperty,
  parseMarianManifest,
  // TODO: Remove warning when Marian change is in prod
  // eslint-disable-next-line no-unused-vars
  parseMarianManifests,
} from '../../utils/parse-marian-manifests';

// TODO: remove when Marian change is in prod
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
      // TODO: Fix when Marian change is in production
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
    // Ignoring exhaustive deps allows us to only run this on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update property choices when the filter results from Marian are loaded
  useEffect(() => {
    const properties = Object.keys(filterResults);
    properties.sort();
    setPropertyChoices(properties.map(p => ({ text: p, value: p })));
  }, [filterResults]);

  // Update branch choices when a property is chosen
  useEffect(() => {
    if (filterResults && filterResults[property]) {
      const branches = getSortedBranchesForProperty(filterResults, property);
      setBranch(branches[0]);
      setBranchChoices(branches.map(b => ({ text: b, value: b })));
    }
  }, [filterResults, property]);

  // When a property and branch are chosen, update the filter to the Marian manifest value
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

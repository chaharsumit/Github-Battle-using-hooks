import SelectMenu from "./SelectMenu";
import AccountCard from "./AccountCard";
import RepoGrid from './RepoGrid';
import { useState, useEffect } from 'react';

export default function Popular() {
  const [select, setSelect] = useState('All');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchRepoData(){
    setLoading(true);
    fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${select}&sort=stars&order=desc&type=Repositories`)
    .then(res => res.json())
    .then(({items}) => {setData(items); setLoading(false)});
  }

  useEffect(() => {
    fetchRepoData();
  }, [select]);

  function handleClick({target}){
    setSelect(target.innerText);
  }

  return (
    <>
      <SelectMenu select={select} handleClick={handleClick} />
      <RepoGrid data={data} loading={loading} />
    </>
  );
}

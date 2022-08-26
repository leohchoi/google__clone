import React from 'react';
import Head from 'next/head';
import SearchHeader from './components/SearchHeader';


const Search = () => {
  return (
    <div>
      <Head>
        <title>search results</title>
        <link href="/favicon.ico" />
      </Head>
      {/* header */}
      <SearchHeader />
      {/* search results */}
    </div>
  );
}

export default Search;
//file name lowercase bc it's directly linked to route name
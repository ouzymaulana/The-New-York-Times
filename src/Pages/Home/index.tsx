import React, { useEffect, useState } from 'react'
import Search from '../../Components/Search'
import Card from '../../Components/Card'
import { handleGetData } from '../../Api'
import { useArticleStore } from '../../Strores/Articles'

const Home = () => {
  const { articles, setArticles } = useArticleStore();
  const [searchVal, setSearchVal] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const getArticleData = async () => {
    try {
      setIsLoading(true);
      const results = await handleGetData(searchVal);
      setArticles(results);
      console.log('result', results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getArticleData();
  },[]);

  return (
    <div>
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">The New York Times</h1>
          <p className="text-lg text-gray-600">Search and discover articles</p>
        </div>
        <Search searchVal={searchVal} isLoading={isLoading} setSearchVal={setSearchVal} onSubmitSearch={() => getArticleData()}/>
        { articles.length > 0 &&
          articles.map((item, i) => (
            <Card key={i} data={item}/>
          ))
        }
    </div>
  )
}

export default Home

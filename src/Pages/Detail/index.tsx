import { useEffect, useState } from 'react'
import { useArticleStore, type ArticleDataType } from '../../Strores/Articles'
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id || '');
  const { articles } = useArticleStore();
  const [dataDetail, setDataDetail] = useState<ArticleDataType>();

  const getDataById = () => {    
      const result = articles.find((item) => item._id === decodedId);
      setDataDetail(result);
  }

  useEffect(() => {
    getDataById();
  }, []);

  return (
    <div className="grid gap-4 sm:gap-6 mt-6 max-w-[50rem] mx-auto">
        <div className="rounded-2xl shadow-lg scale-[1.02] border border-gray-200">
            <div className="p-6 flex flex-col sm:flex-row gap-4">
                <img src={dataDetail?.multimedia?.default?.url} alt="" className='object-cover rounded-[8px]' height={100} width={300}/>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1 space-y-3">
                        <h2 className="text-xl sm:text-2xl text-start font-bold text-gray-900 leading-tight hover:text-blue-600 transition-colors">
                            {dataDetail?.headline.main}
                        </h2>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <p>{new Date(dataDetail?.pub_date || '').toLocaleDateString()}</p>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-justify">{dataDetail?.snippet}</p>
                        <div className='flex items-center justify-start'>
                            <a className="cursor-pointer h-5 text-gray-400" href={dataDetail?.web_url}>Read More...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail

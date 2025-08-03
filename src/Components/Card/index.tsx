import React from 'react'
import type { ArticleDataType } from '../../Strores/Articles'
import { useNavigate } from 'react-router-dom'

type CardProps = {
  data: ArticleDataType
}

const Card:React.FC<CardProps> = ({data}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${encodeURIComponent(data._id)}`);
  };

  return (
    <div className="grid gap-4 sm:gap-6 mt-6 max-w-[50rem] mx-auto" onClick={handleClick}>
        <div className="cursor-pointer rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border border-gray-200 hover:border-blue-300">
            <div className="p-6 flex flex-col sm:flex-row gap-4">
                <img src={data.multimedia?.default?.url} alt="" className='object-cover rounded-[8px] max-sm:w-full' height={100} width={300}/>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1 space-y-3">
                        <h2 className="text-xl sm:text-2xl text-start font-bold text-gray-900 leading-tight hover:text-blue-600 transition-colors">
                            {data.headline.main}
                        </h2>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <p>{new Date(data.pub_date).toLocaleDateString()}</p>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-justify">{data.snippet}</p>
                    </div>

                    <div className="flex-shrink-0">
                        <a className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card

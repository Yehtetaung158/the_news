import React from 'react';

const SideNews = ({ data }) => {
  return (
    <div className=' flex flex-col gap-2 pr-2'>
      {data?.slice(1, 4).map((item, index) => (
        <div key={index}>
          <div className=' relative'>
            {item?.multimedia?.[0] && (
              <img src={item.multimedia[0].url} alt={item.multimedia[0].caption || 'Side News Image'} />
            )}
            <h1 className=' absolute bottom-0 text-white p-1'>{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideNews;

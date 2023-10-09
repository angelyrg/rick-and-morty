import React from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

function PaginationBar({totalPages, currentPage, setCurrentPage}) {  
  return (    
    <ResponsivePagination
      total={totalPages}
      current={currentPage}
      onPageChange={page => {setCurrentPage(page)}}
    />
  );
}

export default PaginationBar
import React from "react";

import Button from "./ui/Button";

interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  limit,
  page,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / limit);
  const numbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <ul className="pagination">
        {numbers.map((number) => (
          <Button
            key={number}
            onClick={() => onPageChange(number)}
            className={page === number ? "active" : ""}
            disabled={page === number}
          >
            {number}
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

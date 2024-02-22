import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';

interface IProps {
    totalPages: number;
}
const UsersPagination = (props: IProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { totalPages } = props;

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {totalPages > 0 &&
                <Pagination>
                    <Pagination.Prev
                        disabled={currentPage === 1}
                        onClick={() => {
                            if (currentPage === 1) return;
                            setCurrentPage(currentPage - 1);
                        }}
                    />
                    {[...Array(totalPages)].map((page, i) => {
                        return (
                            <Pagination.Item
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                active={currentPage === i + 1}
                            >{i + 1}</Pagination.Item>
                        )
                    }
                    )}
                    <Pagination.Next
                        disabled={currentPage === totalPages}
                        onClick={() => {
                            if (currentPage === totalPages) return;
                            setCurrentPage(currentPage + 1)
                        }} />
                </Pagination>
            }
        </div>
    );
}

export default UsersPagination;
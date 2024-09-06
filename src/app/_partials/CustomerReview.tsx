import Avatar from '@mui/material/Avatar';
import { redirect } from 'next/navigation'

interface CustomerReviewProps {
    reviewDescription: string,
    reviewName: string,
}

const CustomerReview = ({ reviewDescription, reviewName }: CustomerReviewProps) =>
(
    <div className="flex flex-col w-full md:w-96 h-80 mt-10 rounded-lg bg-white justify-center items-center gap-2 px-2 md:px-10">
        <Avatar className='bg-red-500'>{reviewName?.substring(0, 1)}</Avatar>
        {reviewDescription && <q className="text-2xl font-medium text-center p-3">{reviewDescription}</q>}
        <p className="text-faded">{reviewName}</p>
    </div>
)

export default CustomerReview
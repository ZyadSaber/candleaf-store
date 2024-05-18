import { memo, useCallback } from "react";
import { CustomerReviewProps } from "../interface"

const CustomerReview = memo(({ reviewDescription, reviewName, star }: CustomerReviewProps) => {
    const starRender = useCallback(() => {
        let components = []
        if (star)
            for (let i = 0; i <= star; i++) {
                components?.push(<span className="text-2xl text-main" >&#9733;</span>)
            }
        return components
    }, [])
    return (
        <div className="flex flex-col w-96 h-80 mt-10 rounded-lg bg-white justify-center items-center gap-3 px-10">
            <div className="h-28 w-28 bg-[url('/src/images/avatar.png')] bg-center bg-cover rounded-full" />
            <div className="flex gap-3">
                {starRender()}
            </div>
            {reviewDescription && <q className="text-2xl font-medium text-center">{reviewDescription}</q>}
            <p className="text-faded">{reviewName}</p>
        </div>
    )
})

export default CustomerReview
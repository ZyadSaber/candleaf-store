import { memo } from "react";

const QuantitySelector = memo(() => {
    return (
        <div className="border flex flex-wrap items-center justify-center">
            <button className="w-2/12 bg-main">+</button>
            <input type="number" className="w-8/12 text-center" value={1} />
            <button className="w-2/12 bg-main text-center">-</button>
        </div>
    )
})

export default QuantitySelector
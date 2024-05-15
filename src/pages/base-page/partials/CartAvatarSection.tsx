import { memo } from "react";
import { Link } from "react-router-dom";

const CartAvatarSection = memo(() => {

    return (
        <div className="w-16 md:w-20 gap-3 flex py-6">
            <Link className="cursor-pointer" to="profile">
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="auto" height="auto"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" /><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" /></svg>
            </Link>
            <Link className="relative cursor-pointer" to="cart">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="auto" height="auto"><path d="M23.38,4H6.49l-.26-1.84c-.17-1.23-1.23-2.16-2.48-2.16h-1.76V1h1.76c.75,0,1.38,.56,1.49,1.29l2.02,14.55c.17,1.23,1.23,2.16,2.48,2.16h11.26v-1H9.74c-.75,0-1.38-.56-1.49-1.29l-.24-1.71h13.16l2.2-11ZM7.88,14l-1.25-9h15.53l-1.8,9H7.88Zm1.12,6c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm0,3c-.55,0-1-.45-1-1s.45-1,1-1,1,.45,1,1-.45,1-1,1Zm9-3c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm0,3c-.55,0-1-.45-1-1s.45-1,1-1,1,.45,1,1-.45,1-1,1ZM3.74,6H0v-1H3.6l.14,1Zm.56,4H0v-1H4.16l.14,1Zm.42,3l.14,1H0v-1H4.71Z" /></svg>
                <div className="absolute bottom-5 left-6 rounded-full w-5 h-5 flex items-center justify-center text-sm bg-main text-white">1</div>
            </Link>
        </div>
    )
})

export default CartAvatarSection;
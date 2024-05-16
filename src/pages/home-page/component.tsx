import { memo } from "react";
import { StyledTextOverImage } from "./styled"

const SignInPage = memo(() => (
  <div>
    <div className="w-full relative">
      <img src="/src/images/heading-image.svg" className="w-screen" alt="" />
      <StyledTextOverImage className="bg-glossy absolute left-2/4 top-2/4 h-96 w-4/6 flex flex-col justify-center items-center gap-5 ">
        test
      </StyledTextOverImage>
    </div>
  </div>
)
);

export default SignInPage;

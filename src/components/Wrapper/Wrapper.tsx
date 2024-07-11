import React from "react";
import { WrapperContent } from "./Wrapper.styles";

function WrapperComponent({ children }: { children: React.ReactNode }) {
  return <WrapperContent>{children}</WrapperContent>;
}

export default WrapperComponent;

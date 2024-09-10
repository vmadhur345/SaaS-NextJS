"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("feaf3806-d12e-40b5-bbc3-1ff0042c55f3");
  }, []);

  return null;
};
import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import Context from "../common/context";

function RefIcon() {
  const { addRef } = useContext(Context);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);
  const ref13 = useRef(null);
  const ref14 = useRef(null);
  const ref15 = useRef(null);
  const ref16 = useRef(null);
  const ref17 = useRef(null);
  const ref18 = useRef(null);
  const ref19 = useRef(null);
  const ref20 = useRef(null);
  const n = [
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7,
    ref8,
    ref9,
    ref10,
    ref11,
    ref12,
    ref13,
    ref14,
    ref15,
    ref16,
    ref17,
    ref18,
    ref19,
    ref20,
  ];
  useEffect(() => {
    addRef(n);
  }, []);
  return;
}

export default RefIcon;

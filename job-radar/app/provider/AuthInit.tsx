"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useAppDispatch } from "@/app";
import { setUser } from "@/app";

export function AuthInit() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userCookie = Cookies.get("user");

    if (userCookie) {
      try {
        const user = JSON.parse(userCookie);
        dispatch(setUser(user));
      } catch {}
    }
  }, [dispatch]);

  return null;
}

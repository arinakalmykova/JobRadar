"use client";
import Cookies from "js-cookie";

export function deleteUser() {
  Cookies.remove("token");
  Cookies.remove("user");
}

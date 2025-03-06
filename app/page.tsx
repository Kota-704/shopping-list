"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/header";
import { useState } from "react";
export default function Home() {
  const [items, setItems] = useState("");

  const regItem = (e) => {
    setItems(e.target.value);
  };

  return (
    <div className="text-center">
      <Header />
      <h1 className="mt-10">ショッピングリスト</h1>
      <div className="flex w-full max-w-sm space-x-2 justify-center mt-7">
        <Input
          type="text"
          placeholder="買うもの"
          className="w-3/4"
          value={items}
          onChange={(e) => setItems(e.target.value)}
        />
        <Button type="submit" variant="secondary" onClick={regItem}>
          登録
        </Button>
      </div>
      <ul>
        <li>{items}</li>
      </ul>
    </div>
  );
}

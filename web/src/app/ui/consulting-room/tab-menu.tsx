"use client";
import React, { useState } from "react";
import { Card } from "../component/molecule/card/card";
import Library from "./library";
import DocumentSearch from "./document-search";
import ConsultationHistory from "./consultation-history";
import { useConsultingRoomStore } from "@/app/stores/consulting-room.provider";

interface TabItem {
  id: number;
  button: string;
  content: JSX.Element;
}

export default function TabMenu() {
  const customerId = useConsultingRoomStore(state=>state.customerId)

  const TabData: TabItem[] = [
    { id: 1, button: "과거 상담 기록", content: <ConsultationHistory customerId={customerId}/> },
    { id: 2, button: "문서 검색", content: <DocumentSearch /> },
    { id: 3, button: "서류 검색", content: <Library /> },
  ];

  const [selectedTab, setSelectedTab] = useState(TabData[0].id);

  return (
    <div className="min-w-[311.6px]">
      <div>
        {TabData.map((tab) => (
          <button
            className={`text-white rounded-t-3xl rounded-b-none px-6 py-3 text-sm
            ${selectedTab === tab.id ? "bg-hwachang-darkgreen" : "bg-hwachang-hanasilver"}`}
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.button}
          </button>
        ))}
      </div>

      <Card className="rounded-lg rounded-tl-none h-[55vh] overflow-y-scroll">
        {TabData.find((tab) => tab.id === selectedTab)?.content}
      </Card>
    </div>
  );
}

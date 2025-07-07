import { AgentType } from "@/lib/types";
import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";

const AgentCard = ({ agent }: { agent: AgentType }) => {
  return (
    <Card className="p-2.5 border border-gray-300 shadow-none cursor-pointer hover:shadow-sm transition-shadow duration-500">
      <CardTitle>{agent.name}</CardTitle>
      <CardContent className="p-0 m-0">
        <p>{agent.description}</p>
      </CardContent>
    </Card>
  );
};

export default AgentCard;

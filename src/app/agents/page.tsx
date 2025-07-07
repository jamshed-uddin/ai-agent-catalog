import React from "react";
import agentsData from "../../../public/mock-agents.json";
import { AgentType } from "@/lib/types";
import AgentCard from "@/components/AgentCard";
const agents = agentsData as AgentType[];

const AgentsPage = async () => {
  console.log(agents);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default AgentsPage;

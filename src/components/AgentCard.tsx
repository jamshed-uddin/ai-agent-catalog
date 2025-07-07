import { AgentType } from "@/lib/types";
import React, { JSX } from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

import {
  UserGroupIcon,
  BriefcaseIcon,
  MegaphoneIcon,
  ChartBarIcon,
  CodeBracketIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
const pricingModelBadge = {
  "Free Tier": "bg-[#8cf04833] border border-green-500 text-green-600",
  Subscription: "bg-[#19a4e233] border border-blue-500 text-blue-800",
  "Per-Use": "bg-[#fcb80833] border border-yellow-500 text-yellow-600",
};

const categoryIcons: Record<string, JSX.Element> = {
  "Customer Service": <UserGroupIcon className="w-5 h-5 text-gray-400" />,
  Operations: <BriefcaseIcon className="w-5 h-5 text-gray-400" />,
  Marketing: <MegaphoneIcon className="w-5 h-5 text-gray-400" />,
  "Data Analysis": <ChartBarIcon className="w-5 h-5 text-gray-400" />,
  Development: <CodeBracketIcon className="w-5 h-5 text-gray-400" />,
  "Human Resources": <UsersIcon className="w-5 h-5 text-gray-400" />,
  Finance: <CurrencyDollarIcon className="w-5 h-5 text-gray-400" />,
  Legal: <ScaleIcon className="w-5 h-5 text-gray-400" />,
};

const AgentCard = ({ agent }: { agent: AgentType }) => {
  const { name, description, category, pricingModel, status } = agent;
  return (
    <Card className="p-2.5 border border-gray-800 shadow-none cursor-pointer hover:scale-[102%] hover:bg-gray-900 transition-all duration-300 gap-0">
      {/* icon */}
      <div className=" mb-2">
        {categoryIcons[agent.category] ?? (
          <ChatBubbleLeftRightIcon className="w-5 h-5 text-slate-600" />
        )}
      </div>
      {/* card title */}
      <CardTitle className="flex items-center justify-between mb-8">
        <h3 className="text-sm">{name}</h3>
        <Badge className="border border-gray-600 rounded-xl">{status}</Badge>
      </CardTitle>
      {/* card content */}
      <CardContent className="p-0 m-0 flex-grow text-gray-400 text-sm mb-5">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="p-0 flex items-center gap-3">
        <Badge className="border border-gray-600 rounded-xl">{category}</Badge>
        <Badge className={` ${pricingModelBadge[pricingModel]}  rounded-xl`}>
          {pricingModel}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default AgentCard;

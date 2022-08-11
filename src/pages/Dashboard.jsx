import React from "react";
// Icon Imports
import { BsCurrencyBitcoin } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
// Component imports
import { Stacked, Pie, Button, SparkLine } from "../components";
// Data import
import { earningData, SparklineAreaData, ecomPieChartDat } from "../data/dummy";
// Context import
import { useContextState } from "../contexts/ContextProvider";

const Dashboard = () => {
  return (
    <div className="mt-12">
      <div className="flex  flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  h-44 rounded-xl w-full lg:w-80 p-8 pt-9 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$529,938</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              backgroundColor="gray"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex flex-wrap m-3 justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 pt-9 rounded-2xl">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-3xl opacity-90 rounded-full hover:drop-shadow-xl p-4"
              >
                {item.icon}
              </button>
              <p className="mt-2">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm pl-1 text-${item.pcColor}`}>
                  {item.percentage}
                </span>
              </p>
              <p className="w-full items-center text-sm md:text-md text-gray-400 mt-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 rounded-2xl dark:bg-secondary-dark-bg p-4 m-3 md:w-780">
            <div className="flex gap-2 justify-between">
              <p className="font-semi-bold text-xl">Revenue Updates</p>
              <div className="flex items-center  gap-4">
                <p className="flex gap-2 items-center text-gray-600 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Expense</span>
                </p>
                <p className="flex gap-2 items-center text-green-600 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className="mt-10 flex gap-10 flex-wrap justify-center">
              <div className="border-r-2 border-color m-4 pr-10">
                <div>
                  <p>
                    <span className="text-3xl font-bold">$23,439</span>
                    <span className="p-1.5 cursor-pointer hover:drop-shadow-xl rounded-full bg-green-600 ml-2 text-xs text-white">
                      21%
                    </span>
                  </p>
                  <p className="text-gray-600 mt-1">Budget</p>
                </div>
                <div>
                  <p>
                    <span className="text-3xl font-bold">$23,439</span>
                  </p>
                  <p className="text-gray-600 mt-1">Budget</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

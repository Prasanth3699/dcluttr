import React, { useState } from "react";
import {
  Users,
  ChevronDown,
  ChevronsUpDown,
  ChevronRight,
  ChevronsLeft,
  Plus,
  Images,
  HelpCircle,
  Settings,
  CalendarDays,
  MoveUp,
  MoveDown,
  ChartLine,
} from "lucide-react";
import { PiPresentationChartLight } from "react-icons/pi";
import { RxHome } from "react-icons/rx";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts";

const CustomToggle = () => (
  <div className="w-10 h-5 bg-custom-green rounded-full p-0.5 flex items-center cursor-pointer">
    <div className="w-4 h-4 bg-white rounded-full shadow-md ml-auto"></div>
  </div>
);

const Dashboard = () => {
  const [expandedChannels, setExpandedChannels] = useState(true);

  // Chart data
  const lineChartData = [
    { name: "09", thisMonth: 1.8, lastMonth: 2.8 },
    { name: "10", thisMonth: 2.5, lastMonth: 2.2 },
    { name: "11", thisMonth: 3.5, lastMonth: 3.0 },
    { name: "12", thisMonth: 4.5, lastMonth: 3.8 },
    { name: "13", thisMonth: 2.9, lastMonth: 4.4 },
    { name: "14", thisMonth: 3.8, lastMonth: 3.1 },
    { name: "15", thisMonth: 4.8, lastMonth: 3.5 },
  ];

  const pieChartData = [
    { name: "New Delhi", value: 35, color: "#8B5CF6" },
    { name: "Mumbai", value: 23, color: "#EF4444" },
    { name: "West Bengal", value: 21, color: "#FBBF24" },
    { name: "Others", value: 21, color: "#E5E7EB" },
  ];

  // Exact data from images
  const skuData = [
    {
      id: 1,
      name: "Protein Bar 100g",
      sales: ["₹93,132.12"],
      outOfStock: ["1.68%"],
      inventory: ["931.9"],
      avgRank: ["3.2"],
      traffic: ["12,303"],
      impressions: ["25,005"],
      ctr: ["1.5"],
      hasCheckbox: true,
      isChecked: true,
    },
    {
      id: 2,
      name: "Choco Bar 100g",
      sales: ["₹8,526.32", "₹7,012.72", { value: "2.4%", trend: "up" }],
      outOfStock: ["6.79%", "3.28%", { value: "2.4%", trend: "up" }],
      inventory: ["679", "328", "-"],
      avgRank: ["7", "4", { value: "2.4%", trend: "up" }],
      traffic: ["3005", "2960", { value: "2.4%", trend: "up" }],
      impressions: ["4231", "3657", { value: "2.4%", trend: "up" }],
      ctr: ["2.4", "2.4", { value: "2.4%", trend: "down" }],
      hasCheckbox: true,
      isChecked: true,
    },
    {
      id: 3,
      name: "SKU 3",
      sales: ["₹9313"],
      outOfStock: ["1.68%"],
      inventory: ["931.9"],
      avgRank: ["11"],
      traffic: ["1931.9"],
      impressions: ["₹931.9"],
      ctr: ["1.5"],
      hasCheckbox: true,
      isChecked: false,
    },
    {
      id: 4,
      name: "SKU 4",
      sales: ["₹0"],
      outOfStock: ["0"],
      inventory: ["0"],
      avgRank: ["0"],
      traffic: ["₹0"],
      impressions: ["₹0"],
      ctr: ["0.0"],
      hasCheckbox: true,
      isChecked: false,
    },
  ];

  const cityData = [
    {
      id: 1,
      name: "Delhi",
      sales: ["₹93,132.12"],
      outOfStock: ["1.68%"],
      inventory: ["931.9"],
      avgRank: ["3.2"],
      traffic: ["12,303"],
      impressions: ["25,005"],
      ctr: ["1.5"],
      hasCheckbox: true,
      isChecked: true,
    },
    {
      id: 2,
      name: "Bengaluru",
      sales: ["₹8,526.32", "₹7,012.72", { value: "2.4%", trend: "up" }],
      outOfStock: ["6.79%", "3.28%", { value: "2.4%", trend: "up" }],
      inventory: ["679", "328", "-"],
      avgRank: ["7", "4", { value: "2.4%", trend: "up" }],
      traffic: ["3005", "2960", { value: "2.4%", trend: "up" }],
      impressions: ["4231", "3657", { value: "2.4%", trend: "up" }],
      ctr: ["2.4", "2.4", { value: "2.4%", trend: "down" }],
      hasCheckbox: true,
      isChecked: true,
    },
    {
      id: 3,
      name: "SKU 3",
      sales: ["₹9313"],
      outOfStock: ["1.68%"],
      inventory: ["931.9"],
      avgRank: ["11"],
      traffic: ["1931.9"],
      impressions: ["₹931.9"],
      ctr: ["1.5"],
      hasCheckbox: true,
      isChecked: false,
    },
    {
      id: 4,
      name: "SKU 4",
      sales: ["₹0"],
      outOfStock: ["0"],
      inventory: ["0"],
      avgRank: ["0"],
      traffic: ["₹0"],
      impressions: ["₹0"],
      ctr: ["0.0"],
      hasCheckbox: true,
      isChecked: false,
    },
  ];
  const LineChartCardComponent = () => (
    <div className="h-[180px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={lineChartData}
          margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16A34A" stopOpacity={0.22} />
              <stop offset="95%" stopColor="#16A34A" stopOpacity={0.04} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6B7280" }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6B7280" }}
            domain={[0, 6]}
            ticks={[1.5, 3.0, 4.5, 6.0]}
            tickFormatter={(value) => value.toFixed(1)}
          />

          <Area
            type="monotone"
            dataKey="thisMonth"
            stroke="#16A34A"
            strokeWidth={2.5}
            fill="url(#colorThisMonth)"
            dot={false}
          />

          <Area
            type="monotone"
            dataKey="lastMonth"
            stroke="#EF4444"
            strokeWidth={2}
            fill="none"
            strokeDasharray="5 5"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  const DonutChartCardComponent = () => (
    <div>
      <div className="relative h-[200px] -mt-16">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius={100}
              outerRadius={120}
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center Stats */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-center">
          <div className="text-sm text-gray-500">Total</div>
          <div className="text-2xl font-bold text-gray-900">₹68.2L</div>
          <div className="text-sm text-custom-green flex items-center justify-center">
            <MoveUp className="w-4 h-4 mr-1" />
            2.2%
          </div>
        </div>
      </div>

      {/* City Stats Grid */}
      <div className="grid grid-cols-4 gap-4 mt-8">
        {[
          {
            name: "New Delhi",
            amount: "₹26.5L",
            percentage: "35%",
            change: "1.2%",
            up: true,
            color: "#8B5CF6",
          },
          {
            name: "Mumbai",
            amount: "₹36.4L",
            percentage: "23%",
            change: "3.3%",
            up: false,
            color: "#EF4444",
          },
          {
            name: "West Bengal",
            amount: "₹12.2L",
            percentage: "21%",
            change: "2.3%",
            up: false,
            color: "#FBBF24",
          },
          {
            name: "Others",
            amount: "₹24.3L",
            percentage: "9%",
            change: "1.09%",
            up: true,
            color: "#E5E7EB",
          },
        ].map((city) => (
          <React.Fragment key={city.name}>
            <div className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: city.color }}
              ></div>
              <span className="text-sm text-gray-700">{city.name}</span>
            </div>
            <div className="text-sm font-semibold text-gray-900 text-right">
              {city.amount}
            </div>
            <div className="text-sm text-gray-500 text-right">
              {city.percentage}
            </div>
            <div
              className={`flex items-center justify-end text-sm font-medium ${
                city.up
                  ? "text-custom-green border-custom-green-border"
                  : "text-custom-red border-custom-red-border"
              }`}
            >
              {city.up ? (
                <MoveUp className="w-4 h-4 mr-1" />
              ) : (
                <MoveDown className="w-4 h-4 mr-1" />
              )}
              {city.change}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const TableRow = ({ item, shouldUnderline }) => {
    const renderCellValue = (valueArray) => {
      return (
        <div className="flex flex-col">
          {valueArray.map((value, index) => {
            // Apply grayed-out style to the second row (index 1) when there are 3 rows
            const isSecondOfThree = valueArray.length === 3 && index === 1;

            if (typeof value === "object" && value.value) {
              // This is a trend indicator
              const trendColor =
                value.trend === "up"
                  ? "text-custom-green border-custom-green-border"
                  : "text-custom-red border-custom-red-border";
              const TrendIcon = value.trend === "up" ? MoveUp : MoveDown;
              return (
                <div
                  key={index}
                  className={`${trendColor} text-sm flex items-center justify-center py-0.5`}
                >
                  <TrendIcon className="w-3 h-3 mr-1" />
                  {value.value}
                </div>
              );
            }
            return (
              <div
                key={index}
                className={`py-0.5 ${
                  isSecondOfThree ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {value}
              </div>
            );
          })}
        </div>
      );
    };

    return (
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-3 text-gray-800 font-medium">
          <div className="flex items-center gap-3">
            {item.hasCheckbox && (
              <div className="relative">
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  readOnly
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                    item.isChecked
                      ? "bg-custom-green border-custom-green"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {item.isChecked && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
            )}
            <span className={shouldUnderline ? "underline" : ""}>
              {item.name}
            </span>
          </div>
        </td>
        <td className="px-4 py-3 text-center">{renderCellValue(item.sales)}</td>
        <td className="px-4 py-3 text-center">
          {renderCellValue(item.outOfStock)}
        </td>
        <td className="px-4 py-3 text-center">
          {renderCellValue(item.inventory)}
        </td>
        <td className="px-4 py-3 text-center">
          {renderCellValue(item.avgRank)}
        </td>
        <td className="px-4 py-3 text-center">
          {renderCellValue(item.traffic)}
        </td>
        <td className="px-4 py-3 text-center">
          {renderCellValue(item.impressions)}
        </td>
        <td className="px-4 py-3 text-center">{renderCellValue(item.ctr)}</td>
      </tr>
    );
  };

  const DashboardCards = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {["Sales (MRP)", "Total Quantity Sold"].map((title) => (
          <div
            key={title}
            className="bg-white rounded-lg border border-gray-200/80 p-5 flex flex-col"
          >
            <div className="flex items-center justify-between text-gray-600 pb-4 border-b border-gray-200/80">
              <span className="text-base font-medium">{title}</span>
              <HelpCircle className="w-5 h-5 text-gray-700" />
            </div>
            {/* Corrected Layout: Value left, Trend right */}
            <div className="flex justify-between items-start mt-4 gap-4">
              <span className="text-2xl font-bold text-gray-800">125.49</span>
              <div className="flex flex-col items-end text-sm">
                <span className="text-custom-green flex items-center font-semibold">
                  <MoveUp className="w-4 h-4 mr-1" />
                  2.4%
                </span>
                <span className="text-gray-500">vs 119.69 last month</span>
              </div>
            </div>
            <div className="flex-grow">
              <LineChartCardComponent />
            </div>
            <div className="flex items-center space-x-6 mt-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">This Month</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">Last Month</span>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-white rounded-lg border border-gray-200/80 p-5">
          <div className="flex items-center justify-between text-gray-600 pb-4 border-b border-gray-200/80">
            <span className="text-base font-medium ">Top Cities</span>
            <HelpCircle className="w-5 h-5 text-gray-700" />
          </div>
          <DonutChartCardComponent />
        </div>
      </div>
    );
  };

  // --- MAIN RENDER ---
  return (
    <div className="flex h-screen bg-[#F9FAFB] font-sans">
      {/* Sidebar */}
      <div className="flex bg-white border-r border-gray-200/80">
        <div className="w-16 bg-white border-r border-gray-200/60 flex flex-col items-center py-4 px-2">
          <div className="w-10 h-10 bg-white border border-none rounded-xl flex items-center justify-center mb-1">
            <div className="rounded-lg flex items-center justify-center">
              <img
                src="./images/perfora.jpg"
                className="object-cover w-full h-9 rounded-lg  border border-1.5 border-custom-green"
                alt="Perfora"
              />
            </div>
          </div>
          <div className="w-10 h-10 bg-white border border-none rounded-xl flex items-center justify-center mb-1">
            <div className=" rounded-lg flex items-center justify-center">
              <img
                src="./images/mama_earth.png"
                className="object-cover w-full h-9 rounded-lg"
                alt="Perfora"
              />
            </div>
          </div>
          <div className="w-10 h-10 bg-white border border-none rounded-xl flex items-center justify-center mb-1">
            <div className=" rounded-lg flex items-center justify-center">
              <img
                src="./images/boat.png"
                className="object-cover w-full h-9 rounded-lg"
                alt="Perfora"
              />
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer mb-auto">
            <Plus className="w-4 h-4 text-gray-500" />
          </div>
          <div className="mb-4">
            <Users className="w-5 h-5 text-gray-500" />
          </div>
          <div className="w-10 h-10 bg-white rounded-lg  flex items-center justify-center cursor-pointer">
            <div className="flex items-center space-x-3 px-3 py-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">SS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-60 flex flex-col">
          <div className="p-4 border-b border-gray-200/60 flex">
            <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 bg-white hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-semibold">SS</span>
              </div>
              <span className="font-semibold text-sm text-gray-800 ">
                Test_brand
              </span>
              <ChevronsUpDown className="w-4 h-4 text-gray-900 ml-auto" />
            </div>
            <div className="ml-2 p-2 mt-2 cursor-pointer ">
              <ChevronsLeft className="w-4 h-4 text-custom-green " />
            </div>
          </div>
          <div className="flex-1 flex flex-col p-2">
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <RxHome className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium">Overview</span>
              </a>
              <div>
                <div
                  onClick={() => setExpandedChannels(!expandedChannels)}
                  className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <PiPresentationChartLight className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium">Channels</span>
                  {expandedChannels ? (
                    <ChevronDown className="w-4 h-4 ml-auto text-gray-700" />
                  ) : (
                    <ChevronRight className="w-4 h-4 ml-auto text-gray-700" />
                  )}
                </div>
                {expandedChannels && (
                  <div className="mt-1 space-y-1 pl-6">
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    >
                      <span className="text-sm">Meta Ads</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    >
                      <span className="text-sm">Google Ads</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-teal-700 bg-teal-50 rounded-lg"
                    >
                      <span className="text-sm font-semibold">
                        Quick Commerce
                      </span>
                    </a>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <Images className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium">Creatives</span>
              </a>
            </nav>
            <div className="mt-auto space-y-1">
              <a
                href="#"
                className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <HelpCircle className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium">Help</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <Settings className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium">Settings</span>
              </a>
              <div className="border-t border-gray-200/60 my-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto border rounded border-gray-200/80 ml-5 mt-2">
        <header className="bg-white border-b border-gray-200/80 px-6 py-3 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">
              Quick Commerce
            </h1>
            <div className="flex items-center space-x-4 ">
              <div className="flex items-center space-x-2 border p-1.5 border-gray-300 rounded-md">
                <ChartLine className="w-5 h-5 text-gray-900" />
                <CustomToggle />
              </div>
              <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 rounded-md bg-white text-sm">
                <CalendarDays className="w-4 h-4 text-gray-900" />
                <span className="text-gray-900">
                  Aug 01, 024 - Aug 03, 2024
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-custom-background rounded-md cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center  font-bold text-xs rounded-sm">
                <img src="./images/blinkit.jpeg" alt="" />
              </div>
              <span className="text-sm text-custom-green font-medium">
                Blinkit
              </span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5  text-gray-200 rounded-md cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center  font-bold text-xs rounded-sm">
                <img
                  src="./images/zepto.jpeg"
                  className="opacity-40"
                  alt="zepto"
                />
              </div>
              <span className="text-sm font-medium">Zepto</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5  text-gray-200 rounded-md cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center  font-bold text-xs rounded-sm">
                <img
                  src="./images/instamart.jpg"
                  className="opacity-40"
                  alt="instamart"
                />
              </div>
              <span className="text-sm font-medium op">Instamart</span>
            </div>
          </div>
        </header>

        <div className="flex-1 p-6">
          <DashboardCards />
          {[
            {
              title: "SKU level data",
              subtitle: "Analytics for all your SKUs",
              data: skuData,
              headerName: "SKU Name",
              shouldUnderline: true,
            },
            {
              title: "City level data",
              subtitle: "Analytics for all your Cities",
              data: cityData,
              headerName: "SKU Name",
              shouldUnderline: false,
            },
          ].map((tableInfo, idx) => (
            <div key={idx} className="mb-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {tableInfo.title}
                  </h3>
                  <p className="text-sm text-gray-500">{tableInfo.subtitle}</p>
                </div>
                <button className="flex items-center space-x-2 px-3 py-1.5 bg-custom-green text-white rounded-md text-sm font-medium hover:bg-custom-green/90">
                  <span>Filters(1)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-white rounded-lg border border-gray-200/80">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          className="px-4 py-3 text-left font-medium text-gray-600 border-b border-gray-200"
                          rowSpan="2"
                        >
                          <div className="flex items-center space-x-1">
                            <ChartLine className="w-4 h-4 text-gray-400" />
                            <span>{tableInfo.headerName}</span>
                          </div>
                        </th>
                        <th
                          className="px-4 py-6 text-center font-medium text-gray-900 border-b border-gray-200"
                          colSpan="3"
                        >
                          Availability
                        </th>
                        <th
                          className="px-4 py-6 text-center font-medium text-gray-900 border-b border-gray-200"
                          colSpan="4"
                        >
                          Visibility
                        </th>
                      </tr>
                      <tr className="text-xs text-gray-900 font-medium">
                        {[
                          "Sales",
                          "Out of Stock",
                          "Total Inventory",
                          "Average Rank",
                          "Est. Traffic",
                          "Est. Impressions",
                          "CTR",
                        ].map((header) => (
                          <th
                            key={header}
                            className="px-4 py-3 text-center border-b border-gray-200"
                          >
                            <div className="flex items-center justify-center space-x-1">
                              <span>{header}</span>
                              <ChevronDown className="w-3.5 h-3.5" />
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200/70">
                      {tableInfo.data.map((item) => (
                        <TableRow
                          key={`${tableInfo.title}-${item.id}`}
                          item={item}
                          shouldUnderline={tableInfo.shouldUnderline}
                        />
                      ))}
                      <tr className="bg-gray-50 font-semibold text-gray-800">
                        <td className="px-4 py-3">Total</td>
                        <td className="px-4 py-3 text-center">₹2,93,132.12</td>
                        <td className="px-4 py-3 text-center">16%</td>
                        <td className="px-4 py-3 text-center">2931</td>
                        <td className="px-4 py-3 text-center">8.3</td>
                        <td className="px-4 py-3 text-center">61,985</td>
                        <td className="px-4 py-3 text-center">2,61,768</td>
                        <td className="px-4 py-3 text-center">1.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

import { ChevronDown, X } from "lucide-react";
import React from "react";

type Addon = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type AddonSectionProps = {
  title: string;
  description: string;
  color: string;
  sectionKey: string;
  addonIds: string[];
  allAddons: { [id: string]: Addon };
  expandedSections: { [key: string]: boolean };
  toggleSection: (key: string) => void;
  selectedAddons: { [key: string]: string };
  onSelect: (sectionKey: string, addonId: string) => void;
};

const AddonSection: React.FC<AddonSectionProps> = ({
  title,
  description,
  color,
  sectionKey,
  addonIds,
  allAddons,
  expandedSections,
  toggleSection,
  selectedAddons,
  onSelect
}) => {
  const addons = addonIds.map(id => allAddons[id]).filter(Boolean);
  const isExpanded = expandedSections[sectionKey];
  const hasSelection = Boolean(selectedAddons[sectionKey]);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        dot: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-500',
        bg: 'bg-blue-50'
      },
      yellow: {
        dot: 'bg-yellow-500',
        text: 'text-yellow-600',
        border: 'border-yellow-500',
        bg: 'bg-yellow-50'
      },
      red: {
        dot: 'bg-red-500',
        text: 'text-red-600',
        border: 'border-red-500',
        bg: 'bg-red-50'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const colorClasses = getColorClasses(color);

  return (
    <div className="mb-6">
      <button
        onClick={() => toggleSection(sectionKey)}
        className={`flex items-center gap-3 mb-4 ${colorClasses.text} font-semibold hover:opacity-80 transition-opacity`}
      >
        <div className={`w-3 h-3 ${colorClasses.dot} rounded-sm`}></div>
        <span className="text-lg">{title}</span>
        <span className="text-gray-500 text-sm font-normal">{description}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ml-auto ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {isExpanded && (
        <div className="ml-6">
          {/* Header Row */}
          <div className="grid grid-cols-4 gap-6 text-sm font-semibold text-gray-700 pb-3 border-b border-gray-200 mb-4">
            <div>Name</div>
            <div>Price (₹)</div>
            <div>Description</div>
            <div className="text-center">Select</div>
          </div>

          {/* Addon Rows */}
          <div className="space-y-3">
            {addons.map((addon) => (
              <div 
                key={addon.id} 
                className={`grid grid-cols-4 gap-6 text-sm py-4 px-4 rounded-lg border-2 transition-all ${
                  selectedAddons[sectionKey] === addon.id
                    ? `${colorClasses.border} ${colorClasses.bg}`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium text-gray-900">{addon.name}</div>
                <div className="font-bold text-gray-900">₹{addon.price.toLocaleString()}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{addon.description}</div>
                <div className="flex items-center justify-center">
                  <input
                    type="radio"
                    name={sectionKey}
                    value={addon.id}
                    checked={selectedAddons[sectionKey] === addon.id}
                    onChange={() => onSelect(sectionKey, addon.id)}
                    className={`w-5 h-5 border-gray-300 focus:ring-2 ${
                      color === 'blue' ? 'text-blue-500 focus:ring-blue-500' :
                      color === 'yellow' ? 'text-yellow-500 focus:ring-yellow-500' :
                      'text-red-500 focus:ring-red-500'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {hasSelection && (
            <div className="flex justify-end mt-4">
              <button
                onClick={() => onSelect(sectionKey, '')}
                className="flex items-center text-sm text-gray-500 hover:text-red-600 transition-colors"
              >
                <X className="w-4 h-4 mr-1" />
                Clear selection
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddonSection;
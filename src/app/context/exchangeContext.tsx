"use client";
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { RouteDataProps } from '../shared/RouteData/type';

interface ExchangeContextType {
    sellValue: any;
    setSellValue: (value: any) => void;
    recciveValue: any;
    setRecciveValue: (value: any) => void;
    showRoute: boolean;
    setShowRoute: (value: boolean) => void;
    selectedRoute: RouteDataProps | null;
    setSelectedRoute: (route: RouteDataProps | null) => void;
    isViewingRouteDetails: boolean;
    setIsViewingRouteDetails: (value: boolean) => void;
}

const ExchangeContext = createContext<ExchangeContextType | undefined>(undefined);

export const ExchangeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [sellValue, setSellValue] = useState(0);
    const [recciveValue, setRecciveValue] = useState(0);
    const [showRoute, setShowRoute] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState<RouteDataProps | null>(null);
    const [isViewingRouteDetails, setIsViewingRouteDetails] = useState(false);


    return (
      <ExchangeContext.Provider
        value={{
          sellValue,
          setSellValue,
          recciveValue,
          setRecciveValue,
          showRoute,
          setShowRoute,
          selectedRoute,
          setSelectedRoute,
          isViewingRouteDetails,
          setIsViewingRouteDetails
        }}
      >
        {children}
      </ExchangeContext.Provider>
    );
};

export const useExchange = () => {
    const context = useContext(ExchangeContext);
    if (context === undefined) {
        throw new Error('useExchange must be used within an ExchangeProvider');
      }
    return context;
};
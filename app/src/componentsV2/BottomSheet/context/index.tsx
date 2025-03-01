import React, { createContext, useState, useContext, useCallback } from "react";
import { BottomSheetPlacement } from "../types";
import {
  trackBottomSheetToggled,
  trackViewBottomSheetOnBottomClicked,
  trackViewBottomSheetOnRightClicked,
} from "../analytics";

interface BottomSheetContextProps {
  isBottomSheetOpen: boolean;
  sheetPlacement: BottomSheetPlacement;
  toggleBottomSheet: (isOpen?: boolean) => void;
  toggleSheetPlacement: (placement?: BottomSheetPlacement) => void;
}

const BottomSheetContext = createContext<BottomSheetContextProps | undefined>(undefined);

export const BottomSheetProvider: React.FC<{
  children: React.ReactNode;
  defaultPlacement: BottomSheetPlacement;
  isSheetOpenByDefault?: boolean;
}> = ({ children, defaultPlacement, isSheetOpenByDefault = false }) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(isSheetOpenByDefault);
  const [sheetPlacement, setSheetPlacement] = useState(defaultPlacement);

  const toggleBottomSheet = (isOpen?: boolean) => {
    if (isOpen) {
      setIsBottomSheetOpen(isOpen);
      trackBottomSheetToggled(isOpen);
    } else {
      setIsBottomSheetOpen((prev) => !prev);
      trackBottomSheetToggled(!isBottomSheetOpen);
    }
  };

  const toggleSheetPlacement = useCallback(
    (placement?: BottomSheetPlacement) => {
      if (placement) {
        setSheetPlacement(placement);
        return;
      }
      if (sheetPlacement === BottomSheetPlacement.BOTTOM) {
        setSheetPlacement(BottomSheetPlacement.RIGHT);
        trackViewBottomSheetOnRightClicked();
      } else {
        setSheetPlacement(BottomSheetPlacement.BOTTOM);
        trackViewBottomSheetOnBottomClicked();
      }
    },
    [sheetPlacement]
  );

  return (
    <BottomSheetContext.Provider
      value={{
        isBottomSheetOpen,
        toggleBottomSheet,
        sheetPlacement,
        toggleSheetPlacement,
      }}
    >
      {children}
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error("useBottomSheetContext must be used within a BottomSheetProvider");
  }
  return context;
};

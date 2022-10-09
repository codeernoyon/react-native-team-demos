import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppHeader } from "../shared";
import PurchaseSummaryBer from "./PurchaseSummaryBer";
import PurchaseSummerStore from "./PurchaseSummerStore";

const PurchaseSummaryScreen = () => {
  return (
    <SafeAreaView>
      {/* ----==== App Header ----==== */}
      <AppHeader title={"Purchase Summary"} />
      {/* -----==== Ber ====----- */}
      <PurchaseSummaryBer />
      {/* -----==== Stores ====----- */}
      <PurchaseSummerStore />
    </SafeAreaView>
  );
};

export default PurchaseSummaryScreen;

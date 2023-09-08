"use client";

import { useStoreModal } from "@/hooks/useStoreModal";
import { useEffect } from "react";

export default function Home() {
  const { isOpen, onOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}

import React from "react";

export interface  Agenda {
    title: string;
    topics: string[];
    description: string;
}

export default interface AgendaProps {
    handleToggle: () => void;
    agenda?: Agenda[];
    setAgenda?: React.Dispatch<React.SetStateAction<Agenda[]>>;
    setStoredAgenda?: React.Dispatch<React.SetStateAction<Agenda[]>>;
} 
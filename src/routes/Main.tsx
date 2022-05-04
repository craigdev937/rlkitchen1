import React from "react";
import { Link, MakeGenerics, ReactLocation } from "@tanstack/react-location";
import { ReactLocationDevtools } from "@tanstack/react-location-devtools";
import { LocationGenerics } from "../models/Interfaces";

const location = new ReactLocation<LocationGenerics>();

export const Main = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>Main</h1>
        </React.Fragment>
    );
};




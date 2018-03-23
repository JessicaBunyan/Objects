// @flow
import * as React from "react";
import { SceneProps, Scene } from "./Scene";

export class ObjectSceneProps {
    parentScene: Scene;
    exitSceneCallback: () => void;
    complete: boolean;
    active: boolean;
}

export class ObjectScene extends Scene{
    static defaultProps = {
        complete: false,
        active: false,
    }
} 